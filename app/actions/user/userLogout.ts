'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

/**
 * User logout
 */
const userLogout = (): Promise<void> => {
  // check cookie env variable
  if (!process.env.NEXT_PUBLIC_JWT_COOKIE) {
    throw new Error('You must define an env variable with the name NEXT_PUBLIC_JWT_COOKIE');
  }

  // delete the jwt cookie and redirect to home page
  cookies().delete(process.env.NEXT_PUBLIC_JWT_COOKIE);
  redirect('/');
};

export default userLogout;
