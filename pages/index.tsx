import React from 'react';
import Head from 'next/head';
import { Element as Section } from 'react-scroll';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  SkillsSection,
  ResumeSection,
} from '@/components/containers';
import { Layout } from '@/components/layout';
import { SectionHeading } from '@/components/utils';

export default function Home() {
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
    </Layout>
  );
}
