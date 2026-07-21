import SectionTitle from "../Common/SectionTitle";

const cards = [
  {
    title: "Underwriting Judgment",
    description:
      "The reasoning behind every past decision — why you structured, priced, or passed the way you did — captured and reusable.",
  },
  {
    title: "Performance Outcomes",
    description:
      "How those deals actually performed. Ground truth, not just what the model projected at close.",
  },
  {
    title: "Market Context",
    description:
      "The conditions each decision was made under — vintage, regime, comparable terms — so precedent is judged in context.",
  },
  {
    title: "Precedent, Applied",
    description:
      "On every new deal, CREDITspective surfaces the relevant precedents from your own record — successes, misses, and avoided risks.",
  },
];

const MemoryAsAlpha = () => {
  return (
    <section
      id="memory-as-alpha"
      className="bg-gray-light dark:bg-gray-dark relative overflow-hidden py-16 md:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-80 dark:opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(74,108,247,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(74,108,247,0.12),_transparent_30%)]" />
        <svg
          className="absolute inset-x-0 top-0 h-full w-full"
          viewBox="0 0 1440 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M92 132H312L426 202H684L812 148H1052L1168 186"
            stroke="currentColor"
            className="text-primary/15"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
          <path
            d="M166 338H412L548 262H824L956 332H1270"
            stroke="currentColor"
            className="text-primary/10"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
          <circle cx="92" cy="132" r="8" className="fill-primary/20" />
          <circle cx="312" cy="132" r="8" className="fill-primary/15" />
          <circle cx="426" cy="202" r="10" className="fill-primary/20" />
          <circle cx="684" cy="202" r="10" className="fill-primary/15" />
          <circle cx="812" cy="148" r="8" className="fill-primary/20" />
          <circle cx="1052" cy="148" r="8" className="fill-primary/15" />
          <circle cx="1168" cy="186" r="8" className="fill-primary/20" />
          <circle cx="166" cy="338" r="8" className="fill-primary/15" />
          <circle cx="412" cy="338" r="8" className="fill-primary/20" />
          <circle cx="548" cy="262" r="10" className="fill-primary/20" />
          <circle cx="824" cy="262" r="10" className="fill-primary/15" />
          <circle cx="956" cy="332" r="8" className="fill-primary/20" />
          <circle cx="1270" cy="332" r="8" className="fill-primary/15" />
        </svg>
        <div className="border-primary/15 absolute top-8 left-[8%] h-28 w-28 rounded-full border" />
        <div className="border-primary/10 absolute top-20 right-[7%] h-40 w-40 rounded-full border" />
        <div className="bg-primary/10 absolute bottom-14 left-[18%] h-3 w-20 rounded-full blur-[2px]" />
        <div className="bg-primary/10 absolute right-[18%] bottom-20 h-3 w-28 rounded-full blur-[2px]" />
      </div>

      <div className="container">
        <div className="relative z-10">
          <SectionTitle
            eyebrow="Memory as Alpha"
            title={"From deal history\nto credit precedent."}
            paragraph="CREDITspective connects your firm's underwriting judgment, actual performance outcomes, and live market context — so every new deal is evaluated against your own record of successes, misses, and avoided risks."
            center
            width="880px"
            mb="32px"
          />

          <div className="grid gap-5 lg:grid-cols-4">
            {cards.map((card) => (
              <article
                key={card.title}
                className="border-body-color/10 flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-gray-800/70"
              >
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {card.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed lg:text-[15px]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryAsAlpha;
