import React from 'react';
import Head from 'next/head';
import { Element as Section } from 'react-scroll';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  SkillsSection,
  ResumeSection,
  PortfoliosSection,
  ReviewsSection,
  BlogSection,
} from '@/components/containers';
import { Layout } from '@/components/layout';
import { SectionHeading } from '@/components/utils';
import { getPostsByPage } from '@/lib/blogging';
import { PostItemsModel } from '@/models';

export function getStaticProps() {
  const { posts } = getPostsByPage();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export interface HomeProps {
  posts: PostItemsModel;
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout blurred>
      <Head>
        <title>Max Balukh - Mobile App Developer</title>
      </Head>

      {/* Start Hero Section */}
      <Section name="section-home">
        <HeroSection blurred scroll={false} typed={true} />
      </Section>
      {/* End Hero Section */}

      {/* Start About Section */}
      <Section name="section-about" className="about-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading animated={false} title="About Me" watermark="About" />
          <AboutSection />
        </div>
      </Section>
      {/* End About Section */}

      {/* Start Skills Section */}
      <Section name="section-skills" className="skills-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading animated={false} title="My Skills" watermark="Skills" />
          <SkillsSection />
        </div>
      </Section>
      {/* End Skills Section */}

      {/* Start Service Section */}
      <Section name="section-service" className="services-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading animated={false} title="My Services" watermark="Services" />
          <ServicesSection />
        </div>
      </Section>
      {/* End Service Section */}

      {/* Start Resume Section */}
      <Section name="section-resume" className="resume-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading animated={false} title="My Resume" watermark="Resume" />
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
          <SectionHeading animated={false} title="My Works" watermark="Works" />
          <PortfoliosSection />
        </div>
      </Section>
      {/* End Portfolios Section */}

      {/* Start Reviews Section */}
      <Section name="section-reviews" className="reviews-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading animated={false} title="Client Reviews" watermark="Reviews" />
          <ReviewsSection />
        </div>
      </Section>
      {/* End Reviews Section */}

      {/* Start Blog Section */}
      <Section name="section-blog" className="news-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading animated={false} title="Latest Blogs" watermark="Blogs" />
          <BlogSection posts={posts} />
        </div>
      </Section>
      {/* End Blog Section */}
    </Layout>
  );
}
