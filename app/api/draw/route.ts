import {Question} from '@schemas/questions/questions.schema';
import {HTTP_OK} from '@utils/constants/api';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import {prisma} from '@utils/prisma/client';
import {QuestionDraw} from '@utils/types/api';

/**
 * Create a new question in the database
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function POST(request: Request): Promise<Response> {
  try {
    // get data from request
    const body: QuestionDraw = await request.json();

    const drawnQuestions: Question[] = [];

    // draw questions
    while (drawnQuestions.length < body.quantity) {
      const question: Question | null = await prisma.question.findFirst({
        where: {
          category_id: {
            in: body.categories,
          },
        },
        skip: Math.floor(Math.random() * 100),
      });

      if (!question) {
        continue;
      }

      // check if question is already drawn
      if (drawnQuestions.some((q) => q.id === question.id)) {
        continue;
      }

      drawnQuestions.push(question);
    }

    return sendJsonResponse<Question[]>(drawnQuestions, HTTP_OK);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}
