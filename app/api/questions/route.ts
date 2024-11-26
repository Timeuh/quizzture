import { Question,questionValidator } from '@schemas/questions/questions.schema';
import { HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND, HTTP_BAD_REQUEST, MSG_SERVER_ERROR, HTTP_CREATED } from '@utils/constants/api';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import { prisma } from '@utils/prisma/client';
import { ApiError, ApiParams } from '@utils/types/api';

/**
 * Get a question from the database by ID
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function GET(_request: Request, apiParams: ApiParams): Promise<Response> {
    try {
      const questions: Question[] = await prisma.question.findMany();
  
      if (questions.length === 0) {
        return sendJsonResponse<ApiError>(
          {
            error: {
              code: HTTP_NOT_FOUND,
              message: MSG_NOT_FOUND,
              details: "No questions found",
            },
          },
          HTTP_NOT_FOUND,
        );
      }
  
      return sendJsonResponse<Question[]>(questions, HTTP_OK);
    } catch (error: unknown) {
      return sendErrorResponse(error);
    }
  }
  

/**
 * Create a new question in the database
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function POST(request: Request): Promise<Response> {
  try {
    const body : Question = await request.json();

    if (!body.heading || !body.category_id || !body.answer) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_BAD_REQUEST,
            message: MSG_SERVER_ERROR,
            details: 'Missing required fields: heading, category_id, answer',
          },
        },
        HTTP_BAD_REQUEST,
      );
    }

    const newQuestion : Question = await prisma.question.create({
      data: {
        heading: body.heading,
        answer: body.answer,
        category_id: body.category_id,
      },
    });

    return sendJsonResponse<Question>(newQuestion, HTTP_CREATED);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}

