'use server';

import {cookies} from 'next/headers';

/**
 * Set the user jwt in cookies
 *
 * @param {string} token : the jwt of the user
 */
const setUserCookie = (token: string): void => {
  // check cookie env variable
  if (!process.env.NEXT_PUBLIC_JWT_COOKIE) {
    throw new Error('You must define an env variable with the name NEXT_PUBLIC_JWT_COOKIE');
  }

  // set the jwt cookie in the navigator
  cookies().set(process.env.NEXT_PUBLIC_JWT_COOKIE, token);
  return;
};

export default setUserCookie;
