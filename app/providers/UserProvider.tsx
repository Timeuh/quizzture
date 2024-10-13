'use client';

import getUserCookie from '@actions/cookies/getUserCookie';
import useUser from '@hooks/useUser';
import {User} from '@schemas/user/user.schema';
import {createContext, ReactNode, useContext} from 'react';

type Props = {
  children: ReactNode;
};

// current user context
const UserContext = createContext<User | null | undefined>(null);

/**
 * Provider for user context
 */
export default function UserProvider({children}: Props) {
  // get the user jwt from cookies
  const userJwt = getUserCookie();

  // get the user from the api
  const {data: userInfos} = useUser(userJwt);

  return <UserContext.Provider value={userInfos}>{children}</UserContext.Provider>;
}

/**
 * Hook to get a user from the context
 */
export const useUserContext = (): User | null | undefined => {
  return useContext(UserContext);
};
