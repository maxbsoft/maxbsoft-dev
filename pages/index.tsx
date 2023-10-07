import Head from 'next/head';
import { Element as Section } from 'react-scroll';
import {
  HeroSection,
} from "@/components/containers";

import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/utils";

export default function Home() {
  return (
    <Layout blurred>
      <Head>
        <title>Max Balukh - Mobile App Developer</title>
      </Head>

      {/* Start Hero Section */}
      <Section name="section-home">
        <HeroSection blurred />
      </Section>
      {/* End Hero Section */}
    </Layout>
  )
}
