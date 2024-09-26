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
