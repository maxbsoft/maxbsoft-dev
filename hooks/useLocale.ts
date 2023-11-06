import { Locale } from '@/types';
import { useRouter } from 'next/router';

const useLocale = () => {
  const router = useRouter();
  const { locale: routerLocale } = router;

  const locale: Locale =
    routerLocale === 'uk' || routerLocale === 'en' || routerLocale === 'ru'
      ? routerLocale
      : 'en'; // 'en' is the default value

  return {
    locale,
  };
};

export default useLocale;
