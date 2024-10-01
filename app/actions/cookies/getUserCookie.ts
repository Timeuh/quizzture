import {getCookie} from 'cookies-next';

/**
 * Get the user jwt in cookies
 */
const getUserCookie = (): string => {
  if (!process.env.NEXT_PUBLIC_JWT_COOKIE) {
    throw new Error('You must define an env variable with the name NEXT_PUBLIC_JWT_COOKIE');
  }

  return getCookie(process.env.NEXT_PUBLIC_JWT_COOKIE) as string;
};

export default getUserCookie;
