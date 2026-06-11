import Head from 'next/head';
import { Element as Section } from 'react-scroll';
import { Layout2 } from '@/components/layout';
import { SectionHeading } from '@/components/utils';

const apps = [
  {
    name: 'DelivApp Business',
    role: 'For restaurants: manage marketplace listing, accept orders, control readiness, dispatch to delivery, run promotions.',
    url: 'https://apps.apple.com/us/app/delivapp-business/id1564044502',
  },
  {
    name: 'DelivApp Manager',
    role: 'For operations teams: live logistics control, courier dispatching, order flow monitoring across the whole network.',
    url: 'https://apps.apple.com/il/app/delivapp-manager/id6550921488',
  },
  {
    name: 'DelivApp Courier',
    role: 'For couriers: route assignments, real-time order tracking, delivery confirmation and earnings.',
    url: 'https://apps.apple.com/us/app/delivapp-courier/id1033519561',
  },
];

const highlights = [
  'Multi-app ecosystem: consumer ordering apps, restaurant terminal, logistics manager and courier app working on a shared backend',
  '30+ white-label branded consumer apps generated from a single codebase and published to the App Store and Google Play',
  'Real-time order lifecycle: ordering, kitchen readiness, dispatching, live courier tracking, delivery confirmation',
  'Logistics and dispatch algorithms for fleets of couriers working across multiple restaurants simultaneously',
  'Integrations: payment providers, POS and receipt printers (Epson), push notifications, geofencing and maps',
  'High-load architecture: peak-hour order spikes, offline-tolerant mobile clients, idempotent order processing',
  'Release automation: an internal AI agent driving CI/CD that builds and ships all 30+ apps to both stores on demand',
];

const stack = [
  'React Native (iOS + Android)',
  'Node.js services',
  'PostgreSQL + PostGIS',
  'Firebase',
  'AWS (S3, EC2)',
  'Real-time messaging',
  'AppVeyor CI/CD',
  'App Store Connect / Google Play APIs',
];

const DelivappCase = () => {
  return (
    <Layout2>
      <Head>
        <title>Case Study: Food Delivery Platform - Max Balukh</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Section name="section-delivapp" className="pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading
            title="Food Delivery Platform: a Multi-App Ecosystem"
            watermark="Case Study"
            animated={false}
          />

          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-lg">
              For several years I worked as a lead engineer on a large food delivery
              platform (DelivApp / GeoRest Ltd) that powers restaurant chains and delivery
              marketplaces. It is not a single app but a software complex: branded consumer
              apps, a restaurant terminal, a logistics manager and a courier app, all
              running on a shared real-time backend.
            </p>

            <h4 className="mb-4 mt-10 text-2xl font-semibold">The ecosystem</h4>
            <div className="grid gap-6 md:grid-cols-3">
              {apps.map((app) => (
                <a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-white/10 p-5 transition hover:border-primary"
                >
                  <h5 className="mb-2 text-lg font-semibold">{app.name}</h5>
                  <p className="text-sm opacity-80">{app.role}</p>
                </a>
              ))}
            </div>

            <p className="mt-6">
              On top of these, the platform ships{' '}
              <a
                href="https://apps.apple.com/us/developer/georest-ltd/id1033519560"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                30+ branded consumer apps
              </a>{' '}
              (restaurant chains and delivery brands), each generated from a single
              white-label codebase and published to the App Store and Google Play.
            </p>

            <h4 className="mb-4 mt-10 text-2xl font-semibold">What I built and ran</h4>
            <ul className="list-disc space-y-2 pl-6">
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <h4 className="mb-4 mt-10 text-2xl font-semibold">Stack</h4>
            <p>{stack.join(' · ')}</p>

            <p className="mt-10 text-sm opacity-60">
              Most of this work is covered by NDA, so this page describes only what is
              publicly visible in the app stores. Happy to walk through architecture
              decisions on a call.
            </p>
          </div>
        </div>
      </Section>

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </Layout2>
  );
};

export default DelivappCase;
