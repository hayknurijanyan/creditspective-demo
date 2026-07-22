import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const outcomes = [
  {
    title: "Discover deals aligned with your investment criteria.",
    description:
      "Surface opportunities that match your mandate, credit box, and vintage preferences — before they're crowded.",
    image: "/images/outcome/deal-discovery-concept.jpg",
    alt: "Deal discovery preview",
  },
  {
    title: "Turn hindsight into insight by leveraging institutional memory.",
    description:
      "Every funded, declined, and done-away deal becomes reusable context for the next decision.",
    image: "/images/outcome/portfolio-management-concept.jpg",
    alt: "Institutional memory and underwriting preview",
  },
  {
    title: "Underwrite smarter and faster.",
    description:
      "Auto-spread financials, draft memos, and run precedent-aware analysis without sacrificing rigor.",
    image: "/images/outcome/underwriting-concept.jpg",
    alt: "Monitoring and analysis preview",
  },
  {
    title: "Identify risks proactively in your portfolio.",
    description:
      "Continuous covenant tracking, working-capital signals, and early-warning alerts across every position.",
    image: "/images/outcome/monitoring-concept.jpg",
    alt: "Portfolio risk preview",
  },
];

const WhatYouGet = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionTitle
          eyebrow="What you get"
          title={"Four outcomes across the credit lifecycle."}
          center
          width="900px"
          titleClassName="text-2xl sm:text-3xl md:text-4xl"
          mb="56px"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className="shadow-three dark:bg-gray-dark dark:shadow-two border-stroke overflow-hidden rounded-2xl border bg-white transition-transform duration-300 hover:-translate-y-1 dark:border-white/10"
            >
              <div className="bg-gray-light relative aspect-[16/10] w-full overflow-hidden dark:bg-black/20">
                <Image
                  src={outcome.image}
                  alt={outcome.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {outcome.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
