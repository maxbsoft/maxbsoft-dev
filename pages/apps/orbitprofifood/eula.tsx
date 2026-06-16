import type { GetStaticProps } from 'next';
import LegalLayout, { H2, P, UL } from '@/components/legal/LegalLayout';

const EFFECTIVE_DATE = 'June 16, 2026';
const PRIVACY_URL = '/apps/orbitprofifood/privacy';

interface EulaProps {
  effectiveDate: string;
}

/**
 * End-User License Agreement for the OrbitProfiFood application.
 * Published to satisfy the Intuit Developer production "App details" EULA URL
 * requirement. Statically pre-rendered (getStaticProps) so the full text is in
 * the served HTML, readable without client-side JavaScript.
 */
const Eula = ({ effectiveDate }: EulaProps) => {
  return (
    <LegalLayout title="End-User License Agreement" effectiveDate={effectiveDate}>
      <P>
        This End-User License Agreement (the &ldquo;Agreement&rdquo;) is a legal agreement
        between you (&ldquo;you&rdquo; or the &ldquo;Customer&rdquo;) and Maksym Balukh, an
        independent software developer (&ldquo;Developer&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;), governing your use of the OrbitProfiFood application and its
        related services (the &ldquo;Application&rdquo;). By installing, connecting,
        accessing, or using the Application, you agree to be bound by this Agreement. If you
        do not agree, do not use the Application.
      </P>

      <H2>1. Nature of the Application</H2>
      <P>
        OrbitProfiFood is a private, custom-built business application provided to a
        specific business customer. It connects to that customer&rsquo;s QuickBooks Online
        company on a <strong>read-only</strong> basis to read customer, invoice, and product
        data, and uses that data to send order-reminder text messages (SMS) to the
        customer&rsquo;s contacts and to manage the resulting conversations. The Application
        does not create, modify, or delete any records in your QuickBooks Online accounting
        data.
      </P>

      <H2>2. License Grant</H2>
      <P>
        Subject to your continued compliance with this Agreement, the Developer grants you a
        limited, non-exclusive, non-transferable, non-sublicensable, revocable license to
        access and use the Application for your internal business purposes only.
      </P>

      <H2>3. Restrictions</H2>
      <P>You agree that you will not, and will not permit any third party to:</P>
      <UL>
        <li>
          copy, modify, adapt, translate, or create derivative works of the Application;
        </li>
        <li>
          reverse engineer, decompile, or disassemble the Application, except to the extent
          expressly permitted by applicable law;
        </li>
        <li>
          rent, lease, lend, sell, sublicense, or otherwise transfer the Application to any
          third party;
        </li>
        <li>
          use the Application to send messages to recipients who have not provided the
          consent required by applicable law, or after a recipient has opted out;
        </li>
        <li>
          use the Application in any unlawful manner or in violation of any applicable
          anti-spam, telecommunications, or privacy law (including, where applicable,
          Canada&rsquo;s CASL, the U.S. TCPA and FCC rules, and Quebec&rsquo;s applicable
          legislation).
        </li>
      </UL>

      <H2>4. Your Responsibilities Regarding Messaging Consent</H2>
      <P>
        You acknowledge that you are responsible for ensuring there is a valid legal basis
        (such as the consent required by applicable law) for sending SMS messages to your
        contacts, and for honoring opt-out and revocation requests. The Application provides
        automated safeguards to help with compliance (including consent checks, quiet hours,
        and STOP/HELP keyword handling), but these safeguards do not replace your own legal
        obligations.
      </P>

      <H2>5. Third-Party Services</H2>
      <P>
        The Application relies on third-party services to function, including Intuit
        QuickBooks Online (data source), Twilio (SMS delivery), and Anthropic (AI processing
        of message text). Your use of the Application is also subject to the applicable
        terms of those providers. Handling of personal information is described in our{' '}
        <a href={PRIVACY_URL} className="text-primary hover:underline">
          Privacy Policy
        </a>
        .
      </P>

      <H2>6. Intellectual Property</H2>
      <P>
        The Application, including all software, code, design, and documentation, is owned
        by the Developer and is protected by intellectual property laws. Except for the
        limited license granted above, no rights are transferred to you.
      </P>

      <H2>7. Data and Privacy</H2>
      <P>
        The Application processes personal information as described in the{' '}
        <a href={PRIVACY_URL} className="text-primary hover:underline">
          Privacy Policy
        </a>
        , which is incorporated into this Agreement by reference. You are responsible for
        ensuring that your provision of personal information to the Application complies
        with applicable law.
      </P>

      <H2>8. Disclaimer of Warranties</H2>
      <P>
        THE APPLICATION IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;,
        WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING
        WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, AND NON-INFRINGEMENT. THE DEVELOPER DOES NOT WARRANT THAT THE
        APPLICATION WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
      </P>

      <H2>9. Limitation of Liability</H2>
      <P>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPER WILL NOT BE LIABLE
        FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR
        ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR
        USE OF THE APPLICATION. NOTHING IN THIS AGREEMENT EXCLUDES OR LIMITS LIABILITY THAT
        CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
      </P>

      <H2>10. Term and Termination</H2>
      <P>
        This Agreement remains in effect while you use the Application. You may terminate it
        at any time by disconnecting the Application from your QuickBooks Online company and
        ceasing all use. The Developer may suspend or terminate your access if you breach
        this Agreement. Upon termination, the license granted to you ends, and the
        data-handling terms of the{' '}
        <a href={PRIVACY_URL} className="text-primary hover:underline">
          Privacy Policy
        </a>{' '}
        continue to apply to any retained data until it is deleted.
      </P>

      <H2>11. Changes to this Agreement</H2>
      <P>
        The Developer may update this Agreement from time to time. Material changes will be
        reflected by updating the &ldquo;Effective date&rdquo; above. Your continued use of
        the Application after an update constitutes acceptance of the revised Agreement.
      </P>

      <H2>12. Governing Law</H2>
      <P>
        This Agreement is governed by applicable law. To the extent the Application is used
        in connection with recipients located in Canada (including Quebec) or the United
        States, the parties intend that the Application be operated in accordance with the
        messaging and privacy laws of those jurisdictions.
      </P>

      <H2>13. Contact</H2>
      <P>
        Questions about this Agreement may be sent to{' '}
        <a href="mailto:maxbsoft@gmail.com" className="text-primary hover:underline">
          maxbsoft@gmail.com
        </a>
        .
      </P>
    </LegalLayout>
  );
};

export const getStaticProps: GetStaticProps<EulaProps> = async () => {
  return { props: { effectiveDate: EFFECTIVE_DATE } };
};

export default Eula;
