import { motion } from 'framer-motion';
import { RiBriefcaseLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { getJobExperience } from '@/fetchers';
import { childrenAnimation } from '@/lib/motion';
import { TimelineItem } from '@/components/elements';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import useLocale from '@/hooks/useLocale';

export interface JobTimelineProps {}
const RECORDS_LIMIT = 2;
const JobTimeline: React.FC<JobTimelineProps> = () => {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const [visibleFull, setVisibleFull] = useState<boolean>(false);
  const { data } = useQuery('job-experience', getJobExperience);

  if (!data) return null;

  return (
    <div className="job-experience">
      <h4>
        <RiBriefcaseLine className="mr-2 inline-block text-primary" />
        {t('resume:workingExperience')}
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

export default JobTimeline;
