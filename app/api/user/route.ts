import {HTTP_CREATED} from '@utils/constants/api';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import encryptPassword from '@utils/functions/bcrypt/encryptPassword';
import {prisma} from '@utils/prisma/client';
import vine from '@vinejs/vine';
import {Infer} from '@vinejs/vine/types';

export const credentialsSchema = vine.object({
  email: vine.string().email(),
  type: vine.enum(['google', 'email']),
  password: vine.string().optional().requiredWhen('type', '=', 'email'),
});

export const credentialsValidator = vine.compile(credentialsSchema);

type Credentials = Infer<typeof credentialsSchema>;

type User = {
  email: string;
  password: string | null;
  highest_score: number;
  victories: number;
  victories_chain: number;
  victories_three: number;
  games: number;
  games_chain: number;
  games_three: number;
};

/**
 * Create a new user
 *
 * @param {Request} request : the request object
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: Credentials = await credentialsValidator.validate(body);

    const shouldHash: boolean = parsedBody.type === 'email' && parsedBody.password !== undefined;

    const hashedPassword: string | null = shouldHash ? await encryptPassword(parsedBody.password!) : null;

    const createdUser: User = await prisma.user.create({
      data: {
        email: parsedBody.email,
        password: hashedPassword,
        highest_score: 0,
        victories: 0,
        victories_chain: 0,
        victories_three: 0,
        games: 0,
        games_chain: 0,
        games_three: 0,
      },
    });

    return sendJsonResponse<User>(createdUser, HTTP_CREATED);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}
