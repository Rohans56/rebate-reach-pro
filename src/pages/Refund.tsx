import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Refund = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy | ADSA Solar</title>
        <meta
          name="description"
          content="ADSA Solar refund policy. Learn about our 14-day cooling-off period, cancellation terms, and refund conditions."
        />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Refund Policy
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Cooling-Off Period
                </h2>
                <p>
                  After signing the contract, customers are entitled to a 14-day
                  cooling-off period. During this time, the contract may be
                  cancelled; however, cancellation charges may apply to cover
                  administrative and processing costs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Installation Scheduling
                </h2>
                <p>
                  Installation will be scheduled 14 days after rebate approval,
                  subject to stock availability and grid connection requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Refund Exclusions
                </h2>
                <p className="mb-4">
                  Refunds will not apply in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Installation has been completed and the system commissioned.
                  </li>
                  <li>
                    Rebates or Small-scale Technology Certificates (STCs) are lost
                    due to customer ineligibility or failure to cooperate with
                    program requirements.
                  </li>
                  <li>
                    Finance arrangements are cancelled without ADSA's prior written
                    consent.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Refund Requests
                </h2>
                <p>All refund requests must be submitted in writing.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Refund;
