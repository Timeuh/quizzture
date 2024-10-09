import Link from 'next/link';
import Image from 'next/image';
import {
  vNotFound_link,
  vNotFound_logo,
  vNotFound_notFound,
  vNotFound_title,
} from '@views/not_found/NotFoundView.styles';

/**
 * Not found page main view
 */
export default function NotFoundView() {
  return (
    <main id='not-found' className={vNotFound_notFound}>
      <Image
        src={'/images/logo.png'}
        alt={'quizz logo'}
        width={0}
        height={0}
        sizes={'100vw'}
        className={vNotFound_logo}
      />
      <h1 className={vNotFound_title}>Page introuvable</h1>
      <Link href={'/'} className={vNotFound_link}>
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
