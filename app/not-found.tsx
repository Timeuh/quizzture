import NotFoundView from '@views/not_found/NotFoundView';
import {Metadata} from 'next';

// page metadata
export const metadata: Metadata = {
  title: 'QuizzTure - page introuvable',
  description: 'QuizzTure, page introuvable',
};

/**
 * Not found page
 */
export default function NotFound() {
  return <NotFoundView />;
}
