import {Credentials, credentialsValidator} from '@schemas/credentials/credentials.schema';
import {User} from '@schemas/user/user.schema';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@utils/constants/api';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import {prisma} from '@utils/prisma/client';
import {ApiError} from '@utils/types/api';

/**
 * Log a user
 *
 * @param {Request} request : the request object
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();

    const parsedBody: Credentials = await credentialsValidator.validate(body);

    const searchedUser: User | null = await prisma.user.findFirst({
      where: {
        email: parsedBody.email,
      },
    });

    if (!searchedUser) {
      const error: ApiError = {
        error: {
          code: HTTP_NOT_FOUND,
          message: MSG_NOT_FOUND,
          details: `Could not find user with email ${parsedBody.email}`,
        },
      };

      return sendJsonResponse<ApiError>(error, HTTP_NOT_FOUND);
    }

    return sendJsonResponse<User>(searchedUser, HTTP_OK);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}
