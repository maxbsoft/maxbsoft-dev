import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { getServices } from '@/fetchers';
import { childrenAnimation } from '@/lib/motion';
import { Service } from '@/components/elements';
import useLocale from '@/hooks/useLocale';

const ServicesSection = () => {
  const { locale } = useLocale();
  const { data } = useQuery('services', getServices);

  if (!data) return null;

  return (
    <div className="services-wrapper grid grid-cols-3 gap-7">
      {data?.map((service, index) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 * index }}
          variants={childrenAnimation}
          className="col-span-3 lg:col-span-1"
          key={service.id}
        >
          <Service service={service} locale={locale} />
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesSection;
