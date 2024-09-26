import {Credentials, credentialsValidator} from '@schemas/credentials/credentials.schema';
import {User} from '@schemas/user/user.schema';
import {HTTP_CREATED} from '@utils/constants/api';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import encryptPassword from '@utils/functions/bcrypt/encryptPassword';
import {prisma} from '@utils/prisma/client';

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
