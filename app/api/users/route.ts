import {Credentials, credentialsValidator} from '@schemas/credentials/credentials.schema';
import {CreatedUser} from '@schemas/user/user.schema';
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
    // get request body
    const body = await request.json();

    // validate the body with the schema
    const parsedBody: Credentials = await credentialsValidator.validate(body);

    // check if the password should be hashed
    const shouldHash: boolean = parsedBody.type === 'email' && parsedBody.password !== undefined;

    // hash the password if needed
    const hashedPassword: string | null = shouldHash ? await encryptPassword(parsedBody.password!) : null;

    // create the user in database
    const createdUser: CreatedUser = await prisma.user.create({
      data: {
        username: parsedBody.username!,
        picture: parsedBody.picture!,
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
      select: {
        email: true,
      },
    });

    // return the created user
    return sendJsonResponse<CreatedUser>(createdUser, HTTP_CREATED);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}
