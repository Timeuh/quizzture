import {GoogleOAuthProvider} from '@react-oauth/google';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

/**
 * Provider for google auth
 *
 * @param {ReactNode} children : the children components
 */
export default function GoogleProvider({children}: Props) {
  // get the google client id from the env
  const googleId = process.env.GOOGLE_CLIENT_ID || '';

  return <GoogleOAuthProvider clientId={googleId}>{children}</GoogleOAuthProvider>;
}
