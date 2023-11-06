import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { imageLoader, shimmer, toBase64 } from '@/lib/utils';
import { childrenAnimation } from '@/lib/motion';
import { getInformation } from '@/fetchers';
import useLocale from '@/hooks/useLocale';
import { getStringFromLocalizedText } from '@/utils';
import { useTranslation } from 'next-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const { data } = useQuery('information', getInformation);

  if (!data) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 items-center gap-7">
      <div className="col-span-2 lg:col-span-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          variants={childrenAnimation}
          className="about-image overflow-hidden rounded-lg"
        >
          <div className="about-image-inner fiximage relative border-10 border-primary border-opacity-20">
            <span className="absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerleftright rounded-full bg-gradient-to-r from-transparent to-primary" />
            <span className="absolute top-auto -bottom-2.5 left-auto z-10 h-2.5 w-10 animate-ledgerrightleft rounded-full bg-gradient-to-r from-primary to-transparent" />
            <span className="absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate-ledgerbottomtop rounded-full bg-gradient-to-t from-transparent to-primary" />
            <span className="absolute left-auto -right-2.5 z-10 h-10 w-2.5 animate-ledgertopbottom rounded-full bg-gradient-to-b from-transparent to-primary" />
            <Image
              loader={imageLoader}
              unoptimized={true}
              src={data.largeImage || ''}
              height={422}
              width={660}
              layout="responsive"
              alt={getStringFromLocalizedText(data.fullName, locale)}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(660, 422))}`}
            />
          </div>
        </motion.div>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          variants={childrenAnimation}
          className="about-content"
        >
          <h3>
            {t('about:hiIam')}{' '}
            <span className="text-primary">
              {getStringFromLocalizedText(data.fullName, locale)}
            </span>
          </h3>
          <ul className="styledlist">
            {data.firstName && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  {t('about:firstName')}{' '}
                </strong>
                : {getStringFromLocalizedText(data.firstName, locale)}
              </li>
            )}
            {data.lastName && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  {t('about:lastName')}{' '}
                </strong>
                : {getStringFromLocalizedText(data.lastName, locale)}
              </li>
            )}
            {data.age && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  {t('about:age')}{' '}
                </strong>
                {data.age} {t('about:yers')}
              </li>
            )}
            {data.nationality && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  {t('about:nationality')}{' '}
                </strong>
                : {getStringFromLocalizedText(data.nationality, locale)}
              </li>
            )}
            {data.languages?.length ? (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  {t('about:languages')}{' '}
                </strong>
                :{' '}
                {data.languages
                  .map((item) => getStringFromLocalizedText(item, locale))
                  .join(', ')}
              </li>
            ) : null}
            {data.address && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  {t('about:address')}{' '}
                </strong>
                : {getStringFromLocalizedText(data.address, locale)}
              </li>
            )}
            {data.freelance && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  {t('about:freelance')}{' '}
                </strong>
                : {getStringFromLocalizedText(data.freelance, locale)}
              </li>
            )}
          </ul>
          <a href="/resume.pdf" className="btn mt-3">
            <span>{t('about:downloadResume')}</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
