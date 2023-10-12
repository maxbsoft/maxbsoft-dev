import React from 'react';
import Head from 'next/head';
import { Element as Section } from 'react-scroll';
import { HeroSection } from '@/components/containers';
import { Layout } from '@/components/layout';
import { SectionHeading } from '@/components/utils';
import AboutSection from '@/components/containers/AboutSection';

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
    </Layout>
  );
}
