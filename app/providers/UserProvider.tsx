'use client';

import getUserCookie from '@actions/cookies/getUserCookie';
import readUser from '@utils/functions/jwt/readUser';
import {UserPayload} from '@utils/types/api';
import {createContext, ReactNode, useContext, useEffect, useMemo, useState} from 'react';

type Props = {
  children: ReactNode;
};

// current user context
const UserContext = createContext<UserPayload | null>(null);

/**
 * Provider for user context
 */
export default function UserProvider({children}: Props) {
  const [user, setUser] = useState<UserPayload | null>(null);

  /**
   * Fetch the user from the jwt when the component mounts
   */
  useEffect(() => {
    const fetchUser = async () => {
      const userJwt = getUserCookie();
      const userResult = await readUser(userJwt);
      if (userResult) {
        setUser(userResult);
      }
    };

    fetchUser();
  }, []);

  /**
   * Memoize the user to avoid re-rendering
   */
  const userMemo = useMemo(() => {
    return user;
  }, [user]);

  return <UserContext.Provider value={userMemo}>{children}</UserContext.Provider>;
}

/**
 * Hook to get a user from the context
 */
export const useUserContext = (): UserPayload | null => {
  return useContext(UserContext);
};
