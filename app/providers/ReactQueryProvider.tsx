'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

/**
 * Provider for react-query
 *
 * @param {ReactNode} children : the children components
 */
export default function ReactQueryProvider({children}: Props) {
  // create the react-query client
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
