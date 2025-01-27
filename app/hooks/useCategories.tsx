import {Category} from '@schemas/categories/categories.schema';
import {useQuery} from '@tanstack/react-query';
import {ApiCollection} from '@utils/types/api';

/**
 * Fetch the categories from the api
 */
const fetchCategories = async (): Promise<ApiCollection<Category>> => {
  // get the categories from the api
  return await fetch('/api/categories').then((res: Response) => {
    return res.json();
  });
};

/**
 * Hook to get categories from the database
 */
const useCategories = () => {
  return useQuery<ApiCollection<Category>>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
};

export default useCategories;
