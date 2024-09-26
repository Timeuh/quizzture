import {UserPayload} from '@utils/types/api';
import {jwtVerify} from 'jose';

/**
 * Read a jwt
 *
 * @param {string} token : the token to decode
 */
const readUser = async (token: string): Promise<UserPayload | false> => {
  // check env variable for jwt
  if (!process.env.NEXT_PUBLIC_JWT_SECRET) {
    throw new Error('You must define an env variable with the name NEXT_PUBLIC_JWT_SECRET');
  }

  // encode secret
  const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

  // decode and return the jwt
  try {
    return await jwtVerify(token, secret, {algorithms: ['HS256']});
  } catch (error: unknown) {
    console.log(error);
    return false;
  }
};

export default readUser;
