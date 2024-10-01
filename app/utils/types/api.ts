import {User} from '@schemas/user/user.schema';

// error returned by api
export interface ApiError {
  error: {
    code: number;
    message: string;
    details: unknown;
  };
}

export interface UserPayload {
  payload: {
    user: User;
    iat: number;
    iss: string;
    exp: number;
  };
  protectedHeader: {
    alg: string;
  };
}

// auth from google auth
export interface GoogleAuth {
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  email: string;
  email_verified: boolean;
  nbf: number;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
  iat: number;
  exp: number;
  jti: string;
}
