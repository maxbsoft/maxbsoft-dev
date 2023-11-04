import React from 'react';
import Head from 'next/head';
import { Element as Section } from 'react-scroll';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  SkillsSection,
  ResumeSection,
  PortfoliosSection,
  ReviewsSection,
  BlogSection,
  ContactSection,
} from '@/components/containers';
import { Layout } from '@/components/layout';
import { SectionHeading } from '@/components/utils';
import { getPostsByPage } from '@/lib/blogging';
import { PostItemsModel } from '@/models';

export interface HomeProps {
  posts: PostItemsModel;
}

function Home({ posts }: HomeProps) {
  const { t } = useTranslation('common');
  return (
    <Layout blurred>
      <Head>
        <title>Max Balukh - Mobile App Developer</title>
      </Head>

      {/* Start Hero Section */}
      <Section name="section-home">
        <HeroSection blurred scroll={true} typed={true} />
      </Section>
      {/* End Hero Section */}

      {/* Start About Section */}
      <Section name="section-about" className="about-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading animated={false} title={t('aboutMe')} watermark={t('about')} />
          <AboutSection />
        </div>
      </Section>
      {/* End About Section */}

      {/* Start Skills Section */}
      <Section name="section-skills" className="skills-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading animated={false} title={t('mySkills')} watermark={t('skills')} />
          <SkillsSection />
        </div>
      </Section>
      {/* End Skills Section */}

      {/* Start Service Section */}
      <Section name="section-service" className="services-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading
            animated={false}
            title={t('myServices')}
            watermark={t('services')}
          />
          <ServicesSection />
        </div>
      </Section>
      {/* End Service Section */}

      {/* Start Resume Section */}
      <Section name="section-resume" className="resume-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading animated={false} title={t('myResume')} watermark={t('resume')} />
          <ResumeSection />
        </div>
      </Section>
      {/* End Resume Section */}

      {/* Start Portfolios Section */}
      <Section
        name="section-portfolios"
        className="portfolios-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading animated={false} title={t('myWorks')} watermark={t('works')} />
          <PortfoliosSection />
        </div>
      </Section>
      {/* End Portfolios Section */}

      {/* Start Reviews Section */}
      <Section name="section-reviews" className="reviews-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading
            animated={false}
            title={t('clientReviews')}
            watermark={t('reviews')}
          />
          <ReviewsSection />
        </div>
      </Section>
      {/* End Reviews Section */}

      {/* Start Blog Section */}
      <Section name="section-blog" className="news-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading
            animated={false}
            title={t('latestBlogs')}
            watermark={t('blogs')}
          />
          <BlogSection posts={posts} />
        </div>
      </Section>
      {/* End Blog Section */}

      {/* Start Contact Section */}
      <Section name="section-contact" className="contact-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading
            animated={false}
            title={t('contactUs')}
            watermark={t('contact')}
          />
          <ContactSection />
        </div>
      </Section>
      {/* End Contact Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const { posts } = getPostsByPage();
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'header', 'footer'])),
      posts,
    },
    revalidate: 10,
  };
};

export default Home;
