import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const benefits = [
  "See more of the market, sooner, and focus analyst time where it counts.",
  "Every decision traces back to its source data.",
  "Agents do the assembly. Analysts do the judgment.",
  "Covenant status and cushion are continuously tracked.",
  "Portfolio exposure and variance are visible by the numbers.",
  "Funded, declined, and done-away deals all compound your edge.",
];

const Pricing = () => {
  return (
    <section id="benefits" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="See the full workflow, end to end."
          paragraph="Book a walkthrough tailored to how your team sources, underwrites, and monitors credit."
          center
          width="900px"
        />

        <div className="mb-12 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-reveal="up"
              className="shadow-three dark:bg-gray-dark dark:shadow-two rounded-xs bg-white p-5"
            >
              <p className="text-body-color dark:text-body-color-dark">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        <div
          data-reveal="zoom"
          className="shadow-three dark:bg-gray-dark dark:shadow-two relative w-full overflow-hidden rounded-xs bg-white p-8 text-center sm:p-10"
        >
          <div className="absolute inset-0 z-0 opacity-70 dark:opacity-45">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(74,108,247,0.16),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(74,108,247,0.12),_transparent_30%)]" />
            <svg
              className="absolute top-0 left-0 h-full w-full"
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
            <div className="border-primary/15 absolute top-10 left-10 h-20 w-20 rounded-full border" />
            <div className="border-primary/10 absolute right-8 bottom-8 h-28 w-28 rounded-full border" />
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
            <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl dark:text-white">
              One platform, built to compound institutional memory.
            </h3>
            <p className="text-body-color dark:text-body-color-dark mb-6 text-base">
              Discovery, underwriting, monitoring, and portfolio management all
              run on the same agentic foundation.
            </p>
            <Link
              href="/#contact"
              className="bg-action hover:bg-action-hover inline-block rounded-xs px-8 py-4 text-base font-semibold text-white duration-300"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
