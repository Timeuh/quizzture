import {User} from '@schemas/user/user.schema';
import {useQuery} from '@tanstack/react-query';
import readUser from '@utils/functions/jwt/readUser';

/**
 * Fetch the user from the api
 *
 * @param {string} userJwt : the user jwt
 */
const fetchUser = async (userJwt: string): Promise<User | null> => {
  // read the user from the jwt
  const userResult = await readUser(userJwt);

  // if there is no user
  if (!userResult) {
    return null;
  }

  // get the user from the api
  return await fetch(`/api/users/${userResult.payload.email}`).then((res: Response) => {
    return res.json();
  });
};

/**
 * Hook to get a user from the database
 *
 * @param {string} userJwt : the user jwt
 */
const useUser = (userJwt: string) => {
  return useQuery<User | null>({
    queryKey: ['user', userJwt],
    queryFn: () => {
      return fetchUser(userJwt);
    },
  });
};

export default useUser;
