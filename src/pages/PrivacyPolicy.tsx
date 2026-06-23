import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | ADSA Australian Solar</title>
        <meta name="description" content="ADSA Australian Solar privacy policy — how we collect, use, store and protect your personal information." />
        <link rel="canonical" href="https://adsaaustraliansolar.com.au/privacy-policy" />
      </Helmet>

      <Header />

      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#f26b3a] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-600">Privacy Policy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e3a5f] mb-3">Privacy Policy</h1>
          <p className="text-gray-400 mb-12">Last updated: June 2026</p>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-8
            [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-[#1e3a5f] [&_h2]:mt-10 [&_h2]:mb-4
            [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4
            [&_li]:leading-relaxed
            [&_a]:text-[#f26b3a] [&_a]:font-semibold [&_a]:no-underline hover:[&_a]:underline
          ">

            <p>
              ADSA Australian Solar ("we", "us", "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our website or use our services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li><strong>Contact details</strong> — name, phone number, email address, and street address</li>
              <li><strong>Property information</strong> — suburb, postcode, and details relevant to assessing your solar or battery needs</li>
              <li><strong>Enquiry details</strong> — any messages or information you provide through our contact forms, quote requests, or chat assistant</li>
              <li><strong>Technical information</strong> — IP address, browser type, and general usage data collected automatically when you visit our website</li>
            </ul>

            <h2>2. How We Collect Your Information</h2>
            <p>We collect personal information when you:</p>
            <ul>
              <li>Submit a quote request or contact form on our website</li>
              <li>Speak with our virtual assistant or live team via chat</li>
              <li>Contact us by phone or email</li>
              <li>Engage with us on social media</li>
              <li>Browse our website (via cookies and analytics tools)</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the personal information we collect to:</p>
            <ul>
              <li>Respond to your enquiries and provide quotes for solar, battery, and electrical services</li>
              <li>Assess your eligibility for government rebates and process related paperwork</li>
              <li>Schedule and carry out installations</li>
              <li>Communicate with you about your enquiry, quote, or installation</li>
              <li>Improve our website, products and services</li>
              <li>Comply with our legal and regulatory obligations</li>
            </ul>

            <h2>4. Disclosure of Your Information</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul>
              <li>Third-party service providers who assist us in operating our business (e.g. database hosting, email and communication tools)</li>
              <li>Government bodies, where required to process rebate applications (e.g. STC rebate, Cheaper Home Batteries Program)</li>
              <li>Electricity network distributors, where required for grid connection applications</li>
              <li>Regulatory or law enforcement bodies, where required by law</li>
            </ul>

            <h2>5. Data Storage and Security</h2>
            <p>
              We take reasonable steps to protect your personal information from misuse, loss, and unauthorised access. Your information is stored using secure, industry-standard database and hosting providers. While we take care to protect your data, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to improve your browsing experience, analyse website traffic, and understand where our visitors come from. You can disable cookies through your browser settings, though this may affect the functionality of our website.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2>8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of any inaccurate or outdated information</li>
              <li>Request deletion of your personal information, subject to our legal obligations</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details below.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our website and services are not directed at children, and we do not knowingly collect personal information from minors.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
            </p>
            <ul>
              <li>Email: <a href="mailto:info@adsaaustraliansolar.com.au">info@adsaaustraliansolar.com.au</a></li>
              <li>Phone: <a href="tel:0469312118">0469 312 118</a></li>
              <li>Address: 82 Yale Dr, Epping, VIC 3076</li>
            </ul>

          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </>
  );
};

export default PrivacyPolicy;
