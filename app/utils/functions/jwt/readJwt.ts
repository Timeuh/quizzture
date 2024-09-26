import {decodeJwt} from 'jose';

/**
 * Read a jwt
 *
 * @param {string} token : the token to decode
 */
const readJwt = async (token: string): Promise<unknown | false> => {
  // decode and return the jwt
  try {
    return await decodeJwt(token);
  } catch (error: unknown) {
    console.log(error);
    return false;
  }
};

export default readJwt;
