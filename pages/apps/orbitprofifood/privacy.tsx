import type { GetStaticProps } from 'next';
import LegalLayout, { H2, H3, P, UL } from '@/components/legal/LegalLayout';

const EFFECTIVE_DATE = 'June 16, 2026';

interface PrivacyProps {
  effectiveDate: string;
}

/**
 * Privacy Policy for the OrbitProfiFood application.
 * Published to satisfy the Intuit Developer production "App details" Privacy
 * Policy URL requirement. Discloses the actual data flow: read-only QuickBooks
 * Online data, SMS via Twilio, AI processing via Anthropic, and hosting on a
 * VPS located in Ukraine (cross-border transfer disclosed). Statically
 * pre-rendered (getStaticProps).
 */
const Privacy = ({ effectiveDate }: PrivacyProps) => {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate={effectiveDate}>
      <P>
        This Privacy Policy explains how the OrbitProfiFood application (the
        &ldquo;Application&rdquo;) collects, uses, shares, and protects personal
        information. The Application is operated by Maksym Balukh, an independent software
        developer (&ldquo;we&rdquo;, &ldquo;us&rdquo;, the &ldquo;data controller&rdquo;).
        OrbitProfiFood is a private application built for a specific business customer (the
        &ldquo;Business&rdquo;, e.g. a restaurant or food business) and is not offered to
        the general public.
      </P>

      <H2>1. Who is responsible for your data</H2>
      <P>
        Maksym Balukh is the controller responsible for the personal information processed
        by the Application. For any privacy question, request, or complaint, contact:{' '}
        <a href="mailto:maxbsoft@gmail.com" className="text-primary hover:underline">
          maxbsoft@gmail.com
        </a>
        . Maksym Balukh also acts as the person responsible for the protection of personal
        information for the purposes of applicable Quebec privacy legislation (Law 25).
      </P>

      <H2>2. Whose data we process</H2>
      <P>The Application processes personal information about two groups:</P>
      <UL>
        <li>
          <strong>The Business</strong> that authorizes the Application (its authorized
          administrator who connects QuickBooks Online); and
        </li>
        <li>
          <strong>The Business&rsquo;s contacts</strong> — the customers of the Business who
          appear in the Business&rsquo;s QuickBooks Online records and who may receive
          reminder messages.
        </li>
      </UL>

      <H2>3. What data we collect and how</H2>
      <H3>3.1 Data read from QuickBooks Online (read-only)</H3>
      <P>
        With the Business&rsquo;s authorization (via Intuit&rsquo;s OAuth 2.0 connection),
        the Application reads the following from the Business&rsquo;s QuickBooks Online
        company on a read-only basis:
      </P>
      <UL>
        <li>
          customer records: names, business names, phone numbers, email addresses, and
          billing/shipping addresses;
        </li>
        <li>invoices: dates, line items, amounts, and status;</li>
        <li>products / items: names, SKUs, types, and prices.</li>
      </UL>
      <P>
        The Application <strong>does not write, modify, or delete</strong> any data in the
        Business&rsquo;s QuickBooks Online accounting records.
      </P>

      <H3>3.2 Data we generate and store</H3>
      <UL>
        <li>
          messaging consent and opt-out status for each contact (stored in our own database,
          not in QuickBooks Online);
        </li>
        <li>
          the content of SMS conversations between the Application and contacts (outgoing
          reminders and incoming replies);
        </li>
        <li>
          delivery status, timestamps, and operational logs needed to run the service and to
          demonstrate compliance with messaging law.
        </li>
      </UL>

      <H2>4. How we use the data</H2>
      <UL>
        <li>
          to determine which contacts may be eligible for a reminder and to send
          order-reminder SMS messages on behalf of the Business;
        </li>
        <li>
          to receive and respond to replies, including generating reply text with AI
          assistance;
        </li>
        <li>
          to enforce messaging-compliance safeguards (consent checks, quiet hours, frequency
          limits, and STOP/HELP keyword handling);
        </li>
        <li>to operate, secure, debug, and maintain the Application.</li>
      </UL>
      <P>We do not sell personal information, and we do not use it for advertising.</P>

      <H2>5. Service providers (subprocessors)</H2>
      <P>
        To provide the Application we share the minimum necessary personal information with
        the following service providers, who act on our behalf:
      </P>
      <UL>
        <li>
          <strong>Intuit (QuickBooks Online)</strong> — the source of the Business&rsquo;s
          accounting data, accessed read-only via OAuth 2.0;
        </li>
        <li>
          <strong>Twilio</strong> — delivery of outgoing SMS and receipt of incoming SMS;
          receives recipient phone numbers and message content;
        </li>
        <li>
          <strong>Anthropic</strong> — AI processing of message text to help generate
          replies; message content may be sent to Anthropic&rsquo;s API for this purpose;
        </li>
        <li>
          <strong>Our hosting provider in Ukraine</strong> — the Application and its
          database run on a virtual private server hosted in Ukraine; and{' '}
          <strong>Vercel</strong> — hosting of this website and these legal pages.
        </li>
      </UL>

      <H2>6. International transfer of data</H2>
      <P>
        The Application and its database are hosted on a server located in{' '}
        <strong>Ukraine</strong>. Some of the service providers listed above may also
        process data in the United States or other countries. This means that personal
        information about contacts located in Canada (including Quebec) or the United States
        may be <strong>transferred to and stored in Ukraine</strong> and other jurisdictions
        whose data-protection laws may differ from those of the contact&rsquo;s home
        jurisdiction. The Business authorizes the Application with knowledge of this hosting
        arrangement. We take reasonable measures to protect personal information regardless
        of where it is processed.
      </P>

      <H2>7. How long we keep data</H2>
      <P>
        We keep personal information only as long as needed for the purposes described
        above: while the Application remains connected and in use by the Business, and for a
        limited period afterward as required to operate the service and to comply with legal
        obligations. Records that demonstrate messaging consent and opt-out status may be
        kept longer where retaining them is necessary to comply with anti-spam and
        telecommunications law. When data is no longer needed, we delete it or render it
        anonymous.
      </P>

      <H2>8. Your rights and choices</H2>
      <H3>8.1 Opting out of messages</H3>
      <P>
        A contact can stop receiving messages at any time by replying with STOP (or an
        equivalent keyword, including ARRET / ARR&Ecirc;TE / ARR&Ecirc;TER in French) to a
        message. We honor opt-out and revocation requests as required by applicable law.
      </P>
      <H3>8.2 Access, correction, and deletion</H3>
      <P>
        Subject to applicable law, individuals may request access to, correction of, or
        deletion of their personal information held by the Application, and may withdraw
        consent. Because the source customer records belong to the Business in its own
        QuickBooks Online account, some requests may need to be directed to, or coordinated
        with, the Business. To make a request, contact us at{' '}
        <a href="mailto:maxbsoft@gmail.com" className="text-primary hover:underline">
          maxbsoft@gmail.com
        </a>
        .
      </P>

      <H2>9. Security</H2>
      <P>
        We use reasonable technical and organizational measures to protect personal
        information, including encrypted connections to third-party services and restricted
        access to the database. No method of transmission or storage is completely secure,
        and we cannot guarantee absolute security.
      </P>

      <H2>10. Children</H2>
      <P>
        The Application is a business tool and is not directed to children. We do not
        knowingly collect personal information from children.
      </P>

      <H2>11. Changes to this Policy</H2>
      <P>
        We may update this Privacy Policy from time to time. Material changes will be
        reflected by updating the &ldquo;Effective date&rdquo; above.
      </P>

      <H2>12. Contact</H2>
      <P>
        For any privacy question or request, contact Maksym Balukh at{' '}
        <a href="mailto:maxbsoft@gmail.com" className="text-primary hover:underline">
          maxbsoft@gmail.com
        </a>
        .
      </P>
    </LegalLayout>
  );
};

export const getStaticProps: GetStaticProps<PrivacyProps> = async () => {
  return { props: { effectiveDate: EFFECTIVE_DATE } };
};

export default Privacy;
