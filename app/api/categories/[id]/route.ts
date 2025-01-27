import {Category, categoryCreationValidator} from '@schemas/categories/categories.schema';
import {HTTP_NOT_FOUND, HTTP_OK, MSG_NOT_FOUND} from '@utils/constants/api';
import sendErrorResponse from '@utils/functions/api/sendErrorResponse';
import sendJsonResponse from '@utils/functions/api/sendJsonResponse';
import {prisma} from '@utils/prisma/client';
import {ApiError, ApiParams} from '@utils/types/api';

/**
 * Get a category by its id
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function GET(_request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    // get the category with the given id from the database
    const category: Category | null = await prisma.category.findFirst({
      where: {
        id: Number(apiParams.params.id),
      },
    });

    // if the category does not exist, return an error
    if (!category) {
      return sendJsonResponse<ApiError>(
        {
          error: {
            code: HTTP_NOT_FOUND,
            message: MSG_NOT_FOUND,
            details: `Category with ID ${apiParams.params.id} not found`,
          },
        },
        HTTP_NOT_FOUND,
      );
    }

    return sendJsonResponse<Category>(category, HTTP_OK);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}

/**
 * Update a category
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function PUT(request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    // get update data
    const body = await request.json();

    // verify no data is missing
    const categoryToUpdate = await categoryCreationValidator.validate(body);

    // update the category in the database
    const updatedCategory: Category = await prisma.category.update({
      where: {
        id: Number(apiParams.params.id),
      },
      data: categoryToUpdate,
    });

    // return the updated category
    return sendJsonResponse<Category>(updatedCategory, HTTP_OK);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}

/**
 * Delete a category from the database
 *
 * @param {Request} request : the request object
 * @param {ApiParams} apiParams : the request parameters
 */
export async function DELETE(_request: Request, apiParams: ApiParams): Promise<Response> {
  try {
    // delete the category with the given id from the database
    const deletedCategory: Category = await prisma.category.delete({
      where: {
        id: Number(apiParams.params.id),
      },
    });

    // return the deleted category
    return sendJsonResponse<Category>(deletedCategory, HTTP_OK);
  } catch (error: unknown) {
    return sendErrorResponse(error);
  }
}
