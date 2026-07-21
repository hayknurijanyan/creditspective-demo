import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const problems = [
  {
    id: "01",
    title: "Credit expertise isn't keeping pace with industry growth.",
    response:
      "CREDITspective amplifies every analyst with the firm's collective acumen, so junior resources work with senior-level pattern recognition.",
    image: "/images/problem-we-solve/credit-expertise.jpg",
    imageAlt: "Credit expertise challenge",
  },
  {
    id: "02",
    title: "Changing market dynamics.",
    response:
      "Real-time market context and comps, with regime- and vintage-aware analysis.",
    image: "/images/problem-we-solve/changing-market-dynamics.jpg",
    imageAlt: "Changing market dynamics",
  },
  {
    id: "03",
    title: "Insights and learnings from past deals aren't leveraged.",
    response:
      "Institutional memory surfaces the relevant precedents on every new deal.",
    image: "/images/problem-we-solve/insights-and-learnings.jpg",
    imageAlt: "Insights and learnings from past deals",
  },
  {
    id: "04",
    title: "Monitoring is too reactive.",
    response:
      "Continuous covenant tracking and early-warning alerts flag issues before they escalate.",
    image: "/images/problem-we-solve/monitoring.jpg",
    imageAlt: "Monitoring is too reactive",
  },
  {
    id: "05",
    title: "Bottlenecks in the workflow slow the process.",
    response:
      "Parallel, AI-driven workflows with auto-extraction and draft memos compress hours into minutes.",
    image: "/images/problem-we-solve/bottlenecks.jpg",
    imageAlt: "Workflow bottlenecks",
  },
  {
    id: "06",
    title: "Fragmented knowledge across multiple systems.",
    response:
      "A unified context layer organizes everything around each transaction.",
    image: "/images/problem-we-solve/fragmented-knowledge.jpg",
    imageAlt: "Fragmented knowledge across systems",
  },
];

const ProblemsWeSolve = () => {
  return (
    <section className="bg-gray-light dark:bg-gray-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          eyebrow="Problems we solve"
          title={"Convert competitive pressures to \n competitive advantage."}
          center
          width="920px"
          titleClassName="text-2xl sm:text-3xl md:text-4xl"
          mb="56px"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.id}
              className="shadow-three dark:shadow-two overflow-hidden rounded-2xl border border-white/10 bg-white transition-transform duration-300 hover:-translate-y-1 dark:bg-gray-800/70"
            >
              <div className="bg-gray-light relative aspect-[16/9] w-full dark:bg-black/20">
                <Image
                  src={problem.image}
                  alt={problem.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6">
                <p className="text-primary mb-3 text-sm font-semibold tracking-[0.2em] uppercase">
                  {problem.id}
                </p>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  {problem.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                  <span className="font-semibold text-black dark:text-white">
                    How CREDITspective answers it
                  </span>
                  <br />
                  {problem.response}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
