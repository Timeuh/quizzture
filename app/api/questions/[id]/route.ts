import {Question, questionValidator} from '@schemas/questions/questions.schema';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@utils/constants/api';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import {prisma} from '@utils/prisma/client';
import {ApiError, ApiParams} from '@utils/types/api';

/**
 * Get a question by its id
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function GET(_request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    // get the question with the given id from the database
    const question: Question | null = await prisma.question.findFirst({
      where: {
        id: Number(apiParams.params.id),
      },
    });

    // if the question does not exist, return an error
    if (!question) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_NOT_FOUND,
            message: MSG_NOT_FOUND,
            details: `Question with ID ${apiParams.params.id} not found`,
          },
        },
        HTTP_NOT_FOUND,
      );
    }

    return sendJsonResponse<Question>(question, HTTP_OK);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}

/**
 * Update a question
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function PUT(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    // get update data
    const body = await request.json();

    // verify no data is missing
    const questionToUpdate = await questionValidator.validate(body);

    // update the question in the database
    const updatedQuestion: Question = await prisma.question.update({
      where: {
        id: Number(apiParams.params.id),
      },
      data: questionToUpdate,
    });

    // return the updated question
    return sendJsonResponse<Question>(updatedQuestion, HTTP_OK);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}

/**
 * Delete a question from the database
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function DELETE(_request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    // delete the question with the given id from the database
    const deletedQuestion: Question = await prisma.question.delete({
      where: {
        id: Number(apiParams.params.id),
      },
    });

    // return the deleted question
    return sendJsonResponse<Question>(deletedQuestion, HTTP_OK);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}
