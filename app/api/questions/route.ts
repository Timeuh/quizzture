import {Question} from '@schemas/questions/questions.schema';
import {
  HTTP_NOT_FOUND,
  HTTP_OK,
  MSG_NOT_FOUND,
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  MSG_MISSING_DATA,
} from '@utils/constants/api';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import {prisma} from '@utils/prisma/client';
import {ApiError, ApiParams} from '@utils/types/api';

/**
 * Get questions from the database
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function GET(_request: Request): Promise<Response> {
  try {
    // get all questions from database
    const questions: Question[] = await prisma.question.findMany();

    // if there are no questions, return 404
    if (questions.length === 0) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_NOT_FOUND,
            message: MSG_NOT_FOUND,
            details: 'No questions found',
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
    // get data from request
    const body: Question = await request.json();

    // if any field is missing, return an error
    if (!body.heading || !body.category_id || !body.answer) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_BAD_REQUEST,
            message: MSG_MISSING_DATA,
            details: 'Missing required fields: heading, category_id, answer',
          },
        },
        HTTP_BAD_REQUEST,
      );
    }

    // create a new question in the database
    const newQuestion: Question = await prisma.question.create({
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
