import {Question, questionCreationValidator} from '@schemas/questions/questions.schema';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND, HTTP_CREATED} from '@utils/constants/api';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import {prisma} from '@utils/prisma/client';
import {ApiError} from '@utils/types/api';

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

    // validate the provided data
    const validatedQuestion = await questionCreationValidator.validate(body);

    // create a new question in the database
    const newQuestion: Question = await prisma.question.create({
      data: {
        heading: validatedQuestion.heading,
        answer: validatedQuestion.answer,
        category_id: validatedQuestion.category_id,
      },
    });

    return sendJsonResponse<Question>(newQuestion, HTTP_CREATED);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}
