import {
  HTTP_NOT_FOUND,
  HTTP_SCHEMA_ERROR,
  HTTP_SERVER_ERROR,
  MSG_DUPLICATE_ERROR,
  MSG_FOREIGN_KEY_ERROR,
  MSG_NOT_FOUND,
  MSG_SERVER_ERROR,
} from '@constants/api';
import {PrismaClientKnownRequestError} from '@prisma/client/runtime/library';
import {ApiError} from '@utils/types/api';

/**
 * Construct and send an error response
 *
 * @param {unknown} error : the error object
 */
const sendErrorResponse = (error: unknown): Response => {
  const apiError: ApiError = {
    error: {
      code: HTTP_SERVER_ERROR,
      message: MSG_SERVER_ERROR,
      details: error,
    },
  };

  // if the error is a schema validation error
  if (error instanceof Object && 'status' in error && 'messages' in error && error.status === HTTP_SCHEMA_ERROR) {
    apiError.error.code = HTTP_SCHEMA_ERROR;
    apiError.error.details = error.messages;
    return Response.json(apiError, {status: apiError.error.code});
  }

  // if the error is a Prisma error
  if (error instanceof PrismaClientKnownRequestError) {
    // if the error is a duplicate error
    if (error.code === 'P2002') {
      apiError.error.message = MSG_DUPLICATE_ERROR;
      apiError.error.details = {
        field: error.meta!.target instanceof Array ? error.meta!.target[0] : error.meta!.target,
        message: `A record for the ${error.meta!.modelName} table with this ${error.meta!.target} value already exists`,
      };
    }

    // if the error is a foreign key error
    if (error.code === 'P2003') {
      apiError.error.message = MSG_FOREIGN_KEY_ERROR;
      apiError.error.details = {
        table: error.meta!.modelName,
        field: error.meta!.field_name,
        message: `Can not create a record for the ${
          error.meta!.modelName
        } table because the record referenced by the foreign key ${error.meta!.field_name} does not exist`,
      };
    }

    // if the record to update does not exist
    if (error.code === 'P2025') {
      apiError.error.code = HTTP_NOT_FOUND;
      apiError.error.message = MSG_NOT_FOUND;
      apiError.error.details = `Can not update table ${error.meta!.modelName} because the record does not exist`;
    }
  }

  return Response.json(apiError, {status: apiError.error.code});
};

export default sendErrorResponse;
