'use server';

import {CreatedUser} from '@schemas/user/user.schema';
import {ApiError} from '@utils/types/api';

/**
 * Call the api to create a new user
 *
 * @param {string} picture : the user profile picture
 * @param {string} username : the user name
 * @param {string} email : the email of the user
 * @param {string} password : the password of the user
 * @param {'email' | 'google'} type : the type of registration, via email or google auth
 */
const createUser = async (
  picture: string,
  username: string,
  email: string,
  password: string,
  type: 'email' | 'google',
): Promise<CreatedUser | ApiError> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: 'POST',
    body: JSON.stringify({picture, username, email, password, type}),
    cache: 'no-cache',
  }).then((response: Response) => {
    return response.json();
  });
};

export default createUser;
