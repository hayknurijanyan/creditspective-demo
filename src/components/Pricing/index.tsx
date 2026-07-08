import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const benefits = [
  "Quickly analyze new deal flow for return and portfolio fit.",
  "Leverage your firm's institutional memory and investment performance.",
  "Enhance firm-specific process functionality.",
  "Increase analytical granularity from underwriting through portfolio management.",
  "Integrate seamlessly without replacing existing systems.",
  "Monitor portfolio health 24/7 with real-time alerts.",
  "Scale operations without proportional headcount growth.",
  "Support compliance with built-in regulatory intelligence.",
];

const Pricing = () => {
  return (
    <section id="benefits" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Why CREDITspective?"
          paragraph="No matter where you invest in the credit markets, you are competing for resources across the entire credit universe."
          center
          width="820px"
        />

        <div className="mx-auto mb-12 grid max-w-[920px] grid-cols-1 gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-reveal="up"
              className="rounded-xs bg-white p-5 shadow-three dark:bg-gray-dark dark:shadow-two"
            >
              <p className="text-body-color dark:text-body-color-dark">{benefit}</p>
            </div>
          ))}
        </div>

        <div data-reveal="zoom" className="relative mx-auto max-w-[920px] overflow-hidden rounded-xs bg-white p-8 text-center shadow-three dark:bg-gray-dark dark:shadow-two sm:p-10">
          <div className="absolute inset-0 z-0 opacity-70 dark:opacity-45">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(74,108,247,0.16),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(74,108,247,0.12),_transparent_30%)]" />
            <svg
              className="absolute left-0 top-0 h-full w-full"
              viewBox="0 0 920 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M86 77H270L366 132H544L660 92H834"
                stroke="currentColor"
                className="text-primary/20"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
              <path
                d="M124 203H318L430 163H608L714 205H810"
                stroke="currentColor"
                className="text-primary/15"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
              <circle cx="86" cy="77" r="7" className="fill-primary/25" />
              <circle cx="270" cy="77" r="7" className="fill-primary/20" />
              <circle cx="366" cy="132" r="9" className="fill-primary/25" />
              <circle cx="544" cy="132" r="9" className="fill-primary/20" />
              <circle cx="660" cy="92" r="7" className="fill-primary/25" />
              <circle cx="834" cy="92" r="7" className="fill-primary/20" />
              <circle cx="124" cy="203" r="7" className="fill-primary/20" />
              <circle cx="318" cy="203" r="7" className="fill-primary/25" />
              <circle cx="430" cy="163" r="9" className="fill-primary/25" />
              <circle cx="608" cy="163" r="9" className="fill-primary/20" />
              <circle cx="714" cy="205" r="7" className="fill-primary/25" />
              <circle cx="810" cy="205" r="7" className="fill-primary/20" />
            </svg>
            <div className="absolute left-10 top-10 h-20 w-20 rounded-full border border-primary/15" />
            <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full border border-primary/10" />
          </div>

          <div className="relative z-10">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-sm dark:bg-black/30 dark:text-white">
                Faster Underwriting
              </span>
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-sm dark:bg-black/30 dark:text-white">
                Real-Time Monitoring
              </span>
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-sm dark:bg-black/30 dark:text-white">
                Scalable Credit Ops
              </span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Ready to Optimize Your Credit Capabilities to Generate More Alpha?
            </h3>
            <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
              Join leading leveraged credit funds and banks leveraging AI to gain
              competitive advantage.
            </p>
            <Link
              href="/#contact"
              className="inline-block rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/90"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;