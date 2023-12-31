import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiBookLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { getEducationBackground } from '@/fetchers';
import { childrenAnimation } from '@/lib/motion';
import { TimelineItem } from '@/components/elements';
import { useTranslation } from 'next-i18next';
import useLocale from '@/hooks/useLocale';

export interface EducationTimelineProps {
  visibleFull?: boolean;
}
const RECORDS_LIMIT = 3;
const EducationTimeline: React.FC<EducationTimelineProps> = () => {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const [visibleFull, setVisibleFull] = useState<boolean>(false);
  const { data } = useQuery('education-background', getEducationBackground);

  if (!data) return null;

  return (
    <div className="education-timeline">
      <h4>
        <RiBookLine className="mr-2 inline-block text-primary" />
        {t('resume:educationalQualification')}
      </h4>
      {data
        ?.filter((_, index) => (!visibleFull ? index < RECORDS_LIMIT : true))
        .map((timeline, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            variants={childrenAnimation}
            className="timeline-wrap"
            key={timeline.id}
          >
            <TimelineItem timeline={timeline} locale={locale} />
          </motion.div>
        ))}
      {!visibleFull && (
        <div className="mt-12 text-center">
          <button
            className="btn btn-small"
            onClick={() => setVisibleFull((prevValue: boolean) => !prevValue)}
          >
            <span>{!visibleFull ? t('common:loadMore') : t('common:hide')}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationTimeline;
