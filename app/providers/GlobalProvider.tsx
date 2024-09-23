import {GoogleOAuthProvider} from '@react-oauth/google';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export default function GlobalProvider({children}: Props) {
  const googleId = process.env.GOOGLE_CLIENT_ID || '';

  return <GoogleOAuthProvider clientId={googleId}>{children}</GoogleOAuthProvider>;
}
