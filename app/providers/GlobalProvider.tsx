import {GoogleOAuthProvider} from '@react-oauth/google';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

/**
 * Global app provider regrouping all the utilities providers
 *
 * @param {ReactNode} children : the children components
 */
export default function GlobalProvider({children}: Props) {
  // get the google client id from the env
  const googleId = process.env.GOOGLE_CLIENT_ID || '';

  return <GoogleOAuthProvider clientId={googleId}>{children}</GoogleOAuthProvider>;
}
