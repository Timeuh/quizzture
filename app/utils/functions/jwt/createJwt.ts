import {SignJWT} from 'jose';
import {User} from '@schemas/user/user.schema';

/**
 * Create a login jwt for the user
 *
 * @param {User} user : the user information
 */
const createJwt = async (user: User): Promise<string> => {
  // check jwt secret env variable
  if (!process.env.NEXT_PUBLIC_JWT_SECRET) {
    throw new Error('You must define an env variable with the name NEXT_PUBLIC_JWT_SECRET');
  }

  // create jwt secret with env variable secret
  const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

  // create jwt with user information
  return await new SignJWT(user)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setIssuer(user.email)
    .setExpirationTime('1week')
    .sign(secret);
};

export default createJwt;
