import {Credentials, credentialsValidator} from '@schemas/credentials/credentials.schema';
import {User} from '@schemas/user/user.schema';
import {HTTP_BAD_REQUEST, HTTP_NOT_FOUND, HTTP_OK, MSG_INCORRECT_PASSWORD, MSG_NOT_FOUND} from '@utils/constants/api';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import validatePassword from '@utils/functions/bcrypt/validatePassword';
import {prisma} from '@utils/prisma/client';
import {ApiError} from '@utils/types/api';

/**
 * Log a user
 *
 * @param {Request} request : the request object
 */
export async function POST(request: Request): Promise<Response> {
  try {
    // get request body
    const body = await request.json();

    // validate the body with the schema
    const parsedBody: Credentials = await credentialsValidator.validate(body);

    // get the user from database
    const searchedUser: User | null = await prisma.user.findFirst({
      where: {
        email: parsedBody.email,
      },
    });

    // if the user is not found, return an error
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

    // check if the login is with password
    const shouldVerifyPassword: boolean = parsedBody.type === 'email' && parsedBody.password !== undefined;

    // if logging in via google, return the user
    if (!shouldVerifyPassword) {
      return sendJsonResponse<User>(searchedUser, HTTP_OK);
    }

    // check if the password is correct
    const isAuth: boolean | null = shouldVerifyPassword
      ? await validatePassword(parsedBody.password!, searchedUser.password!)
      : null;

    // if the password is incorrect, return an error
    if (!isAuth) {
      const error: ApiError = {
        error: {
          code: HTTP_BAD_REQUEST,
          message: MSG_INCORRECT_PASSWORD,
          details: 'Password is incorrect',
        },
      };

      return sendJsonResponse<ApiError>(error, HTTP_BAD_REQUEST);
    }

    // return the user
    return sendJsonResponse<User>(searchedUser, HTTP_OK);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}
