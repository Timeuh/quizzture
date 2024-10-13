import {User} from '@schemas/user/user.schema';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@utils/constants/api';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import {prisma} from '@utils/prisma/client';
import {ApiError, ApiParams} from '@utils/types/api';

/**
 * Get a user from the database
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function GET(_request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    // find the user by email in database
    const user: User | null = await prisma.user.findUnique({
      where: {
        email: apiParams.params.id,
      },
    });

    // if the user is not found
    if (!user) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_NOT_FOUND,
            message: MSG_NOT_FOUND,
            details: `User with email ${apiParams.params.id} not found`,
          },
        },
        HTTP_NOT_FOUND,
      );
    }

    // return the searched user
    return sendJsonResponse<User>(user, HTTP_OK);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}
