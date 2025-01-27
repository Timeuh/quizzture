import {Category, categoryCreationValidator} from '@schemas/categories/categories.schema';
import {HTTP_NOT_FOUND, MSG_NOT_FOUND, HTTP_CREATED} from '@utils/constants/api';
import sendCollectionResponse from '@utils/functions/api/sendCollectionResponse';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import {prisma} from '@utils/prisma/client';
import {ApiError} from '@utils/types/api';

/**
 * Get categories from the database
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function GET(_request: Request): Promise<Response> {
  try {
    // get all categories from database
    const categories: Category[] = await prisma.category.findMany();

    // if there are no categories, return 404
    if (categories.length === 0) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_NOT_FOUND,
            message: MSG_NOT_FOUND,
            details: 'No categories found',
          },
        },
        HTTP_NOT_FOUND,
      );
    }

    return sendCollectionResponse<Category>(categories);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}

/**
 * Create a new category in the database
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function POST(request: Request): Promise<Response> {
  try {
    // get data from request
    const body: Category = await request.json();

    // validate the provided data
    const validatedCategory = await categoryCreationValidator.validate(body);

    // create a new category in the database
    const newCategory: Category = await prisma.category.create({
      data: {
        name: validatedCategory.name,
      },
    });

    return sendJsonResponse<Category>(newCategory, HTTP_CREATED);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}
