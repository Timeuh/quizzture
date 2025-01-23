import { Question } from '@schemas/questions/questions.schema';
import { HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND, HTTP_BAD_REQUEST, MSG_SERVER_ERROR, HTTP_CREATED } from '@utils/constants/api';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import { prisma } from '@utils/prisma/client';
import { ApiError, ApiParams } from '@utils/types/api';

export async function GET(_request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const question : Question | null = await prisma.question.findFirst({
      where: {
        id: Number(apiParams.params.id),
      },
    });

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

export async function PUT(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const body = await request.json();

    const updateData: Partial<Question> = {};

    if (body.heading) updateData.heading = body.heading;
    if (body.answer) updateData.answer = body.answer;
    if (body.category_id) updateData.category_id = body.category_id;

    if (Object.keys(updateData).length === 0) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_BAD_REQUEST,
            message: MSG_SERVER_ERROR,
            details: 'At least one of heading, answer, or category_id is required to update',
          },
        },
        HTTP_BAD_REQUEST,
      );
    }

    const updatedQuestion : Question = await prisma.question.update({
      where: {
        id: Number(apiParams.params.id),
      },
      data: updateData, 
    });

    // Retourner la question mise à jour
    return sendJsonResponse<Question>(updatedQuestion, HTTP_OK);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}



export async function DELETE(_request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    const deletedQuestion : Question = await prisma.question.delete({
      where: {
        id: Number(apiParams.params.id),
      },
    });

    return sendJsonResponse<String>('Question deleted successfully', HTTP_OK);

  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}

