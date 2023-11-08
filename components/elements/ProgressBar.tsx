import React from 'react';
import { motion } from 'framer-motion';
import { SkillModel } from '@/models';
import { Locale } from '@/types';
import { getStringFromLocalizedText } from '@/utils';

export interface ProgressBarProps {
  skill: SkillModel;
  locale: Locale;
}
const ProgressBar = ({ skill: { title, percentage }, locale }: ProgressBarProps) => (
  <div className="progress">
    <h5>
      {getStringFromLocalizedText(title, locale)} -{' '}
      <span className="text-primary">({percentage}%)</span>
    </h5>
    <div className="progress-bar relative h-4 w-full rounded-full bg-primary bg-opacity-20">
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { scaleX: 1, originX: 0 },
          hidden: { scaleX: 0, originX: 0 },
        }}
        className="progress-progress absolute left-0 top-0 h-full rounded-full bg-primary"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

export default ProgressBar;
