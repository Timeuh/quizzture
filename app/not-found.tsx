import NotFoundView from '@views/not_found/NotFoundView';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'QuizzTure - page introuvable',
  description: 'QuizzTure, page introuvable',
};

export default function NotFound() {
  return <NotFoundView />;
}
