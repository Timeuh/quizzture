'use client';

import getUserCookie from '@actions/cookies/getUserCookie';
import {User} from '@schemas/user/user.schema';
import readUser from '@utils/functions/jwt/readUser';
import {createContext, ReactNode, useContext, useEffect, useMemo, useState} from 'react';

type Props = {
  children: ReactNode;
};

// current user context
const UserContext = createContext<User | null>(null);

/**
 * Provider for user context
 */
export default function UserProvider({children}: Props) {
  const [user, setUser] = useState<User | null>(null);
  const userJwt = getUserCookie();

  /**
   * Fetch the user from the jwt when the component mounts
   */
  useEffect(() => {
    const fetchUser = async () => {
      const userResult = await readUser(userJwt);

      if (userResult) {
        const userInfos: User = await fetch(`/api/users/${userResult.payload.email}`).then((res) => {
          return res.json();
        });
        setUser(userInfos);
      }
    };

    fetchUser();
  }, [userJwt]);

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
export const useUserContext = (): User | null => {
  return useContext(UserContext);
};
