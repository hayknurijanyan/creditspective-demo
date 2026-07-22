"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../Common/SectionTitle";

type WorkflowFeature = {
  id: number;
  anchor: string;
  icon: React.ReactNode;
  title: string;
  summary: string;
  details: string;
  bullets: string[];
  eyebrow: string;
  imageSrc: string;
  imageAlt: string;
};

const featuresData: WorkflowFeature[] = [
  {
    id: 1,
    anchor: "underwriting",
    eyebrow: "Underwriting",
    title: "AI-Generated Base Case Areas of Focus",
    summary:
      "Before an analyst opens the first document, CREDITspective identifies the areas that deserve scrutiny on this specific credit.",
    details:
      "Underwriting starts with a point of view, not a blank page. CREDITspective surfaces the specific areas that deserve scrutiny on this credit so analysts can focus on the decisions that matter most.",
    bullets: [
      "Deal-specific focus areas before the first review",
      "Guidance that starts the underwriting process with a thesis",
      "Attention directed to the issues most likely to matter",
    ],
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path
          opacity="0.5"
          d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
        />
        <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
      </svg>
    ),
    imageSrc: "/images/stages/02.png",
    imageAlt:
      "CREDITspective underwriting workspace showing AI-generated areas of focus and a deal-specific evidence view.",
  },
  {
    id: 2,
    anchor: "evidence-panel",
    eyebrow: "Across every output",
    title: "The Evidence Panel",
    summary:
      "Every analysis CREDITspective generates comes with an evidence panel showing exactly how and where your institutional memory shaped it.",
    details:
      "Every output carries its own audit trail: which past deals informed the answer, which precedents shaped the recommendation, and which sources supported the conclusion. The insight is interrogable, not just accepted.",
    bullets: [
      "Trace past deals, precedents, and sources in one place",
      "See how institutional memory shaped each answer",
      "Interrogate the output instead of taking it on trust",
    ],
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path
          opacity="0.5"
          d="M20 2.5L38 12.5V28.5L20 38.5L2 28.5V12.5L20 2.5Z"
        />
        <path d="M20 12.5C23.866 12.5 27 15.634 27 19.5C27 23.366 23.866 26.5 20 26.5C16.134 26.5 13 23.366 13 19.5C13 15.634 16.134 12.5 20 12.5ZM20 8.5C13.373 8.5 8 13.873 8 20.5C8 27.127 13.373 32.5 20 32.5C26.627 32.5 32 27.127 32 20.5C32 13.873 26.627 8.5 20 8.5Z" />
      </svg>
    ),
    imageSrc: "/images/stages/03.png",
    imageAlt:
      "CREDITspective evidence panel view showing precedent sources and explainable analysis context.",
  },
  {
    id: 3,
    anchor: "monitoring",
    eyebrow: "Monitoring",
    title: "Variance Analysis",
    summary:
      "Once a deal is funded, CREDITspective continuously measures actual performance against the base case built at underwriting and the terms set in the credit agreement.",
    details:
      "Divergence is surfaced as it emerges, not at the next reporting cycle. The platform compares actual performance to the underwriting base case and the live credit agreement so risk moves are visible early.",
    bullets: [
      "Track actual performance against the underwriting base case",
      "Compare performance to the live credit agreement terms",
      "Surface divergence as it emerges, not after the fact",
    ],
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path
          opacity="0.5"
          d="M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z"
        />
        <path d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z" />
      </svg>
    ),
    imageSrc: "/images/stages/04.png",
    imageAlt:
      "CREDITspective monitoring view showing live variance analysis across portfolio performance.",
  },
  {
    id: 4,
    anchor: "discovery",
    eyebrow: "Discovery",
    title: "Deal Analysis",
    summary:
      "Discover and analyze new deal opportunities based on return, risk, and portfolio fit from internal and external sources.",
    details:
      "CREDITspective helps teams identify attractive opportunities faster by combining internal institutional memory with external market context, so every new deal is tested against return, risk, and portfolio fit.",
    bullets: [
      "Source opportunities from internal and external data",
      "Test return, risk, and portfolio fit early",
      "Move from discovery to analysis with less manual work",
    ],
    icon: (
      <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
        <path
          opacity="0.5"
          d="M31.8943 25.3303C34.1233 25.3303 36.1497 26.1409 37.5682 27.762L39.1464 26.1839C39.4614 25.8689 39.9999 26.092 39.9999 26.5374V32.936C39.9999 33.2121 39.7761 33.436 39.4999 33.436H33.1014C32.6559 33.436 32.4328 32.8974 32.7478 32.5825L35.5418 29.7885C34.5286 28.9779 33.3128 28.37 31.8943 28.37C29.0573 28.37 26.8282 30.599 26.8282 33.436C26.8282 36.273 29.0573 38.5021 31.8943 38.5021C33.3549 38.5021 34.6511 37.844 35.6345 36.8244C35.8406 36.6107 36.1187 36.4756 36.4155 36.4756H38.6535C39.0072 36.4756 39.2477 36.833 39.0881 37.1487C37.7427 39.8107 35.0781 41.5417 31.8943 41.5417C27.4361 41.5417 23.7886 37.8941 23.7886 33.436C23.7886 28.9779 27.4361 25.3303 31.8943 25.3303Z"
        />
        <path d="M18.7226 33.436C18.7226 31.3572 19.2513 29.4548 19.9799 27.7285C20.0541 27.5529 19.9264 27.3567 19.7358 27.3567C15.8856 27.3567 12.6433 24.1144 12.6433 20.2642C12.6433 16.414 15.8856 13.1717 19.7358 13.1717C23.586 13.1717 26.8283 16.414 26.8283 20.2642C26.8283 20.5105 27.3897 21.0054 27.6246 20.9313C28.9274 20.5206 30.2827 20.2642 31.8943 20.2642C32.775 20.2642 33.6557 20.4173 34.5364 20.5905C34.7422 20.6309 34.9339 20.4739 34.9339 20.2642C34.9339 19.8699 34.9339 19.3904 34.8787 18.9362C34.827 18.5117 34.9599 18.0636 35.3001 17.8045L38.9868 14.9955C39.3921 14.5902 39.3921 14.1849 39.1894 13.7797L35.1857 6.77316C35.153 6.71599 35.1272 6.65499 35.1021 6.59411C34.9143 6.13895 34.5848 6.08618 34.1135 6.08007C33.9863 6.07841 33.86 6.10354 33.7419 6.15079L29.3957 7.88927C29.0613 8.02302 28.6829 7.96367 28.3887 7.75599C27.6155 7.21023 26.7521 6.75466 25.8752 6.31262C25.5838 6.16573 25.3813 5.88702 25.3335 5.56423L24.6729 1.10574C24.6265 0.792572 24.6613 0.389935 24.3993 0.212245C24.2235 0.0930361 23.9828 0 23.7886 0H15.6829C15.3021 0 14.7424 0.35783 14.6762 0.73726C14.6678 0.785579 14.6661 0.834927 14.6589 0.883445L13.9492 5.67408C13.894 6.04692 13.6313 6.35205 13.2873 6.50604C12.4439 6.88359 11.673 7.42345 10.8193 7.89265C10.5647 8.03264 10.26 8.04143 9.99178 7.92966L5.73545 6.15619C5.61358 6.10541 5.48273 6.07832 5.35072 6.08016C4.8506 6.08715 4.49147 6.1485 4.13234 6.68719L0.0794975 13.7797C-0.123145 14.1849 0.0794976 14.5902 0.484782 14.9955L4.34631 17.9376C4.59456 18.1268 4.74261 18.4216 4.7079 18.7317C4.65068 19.243 4.53762 19.8101 4.53762 20.2642C4.53762 20.6648 4.53762 21.1534 4.59561 21.614C4.64767 22.0276 4.52563 22.4644 4.20164 22.7267L0.484782 25.7355C0.0794976 26.1408 0.0794978 26.5461 0.28214 26.9514L4.33498 34.0439C4.5154 34.4047 4.85644 34.4443 5.35811 34.4486C5.48532 34.4497 5.61152 34.4249 5.72964 34.3776L10.0758 32.6392C10.4102 32.5054 10.7887 32.5648 11.0829 32.7724C11.8561 33.3182 12.7195 33.7738 13.5964 34.2158C13.8878 34.3627 14.0903 34.3667 14.0903 34.3667C14.0903 34.3667 17.997 34.1518 18.7226 33.436Z" />
      </svg>
    ),
    imageSrc: "/images/stages/01.png",
    imageAlt:
      "CREDITspective deal analysis view for opportunity discovery and portfolio fit assessment.",
  },
];

const homeIcons: Record<number, React.ReactNode> = {
  1: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="stroke-current"
      fill="none"
    >
      <rect x="6" y="6" width="28" height="28" rx="6" strokeWidth="2.5" />
      <path d="M12 14H28" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 20H24" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 26H20" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  2: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="stroke-current"
      fill="none"
    >
      <path d="M8 10H32V30H8V10Z" strokeWidth="2.5" />
      <path
        d="M14 18L18 22L26 14"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 26H26" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  3: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="stroke-current"
      fill="none"
    >
      <path
        d="M8 28L15 21L20 24L30 14"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M27 14H30V17" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 32H32" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  4: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="stroke-current"
      fill="none"
    >
      <circle cx="13" cy="14" r="3" strokeWidth="2.5" />
      <circle cx="27" cy="14" r="3" strokeWidth="2.5" />
      <circle cx="20" cy="27" r="3" strokeWidth="2.5" />
      <path d="M16 15.5L18.2 19.8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 15.5L21.8 19.8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18.2 24.2L16.2 22" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M21.8 24.2L23.8 22" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
};

const HomeWorkflowFeatures = () => {
  const [activeFeatureId, setActiveFeatureId] = useState(
    featuresData[0]?.id ?? 1,
  );

  const activeFeature = useMemo(
    () =>
      featuresData.find((feature) => feature.id === activeFeatureId) ??
      featuresData[0],
    [activeFeatureId],
  );

  useEffect(() => {
    const setActiveFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const matchedFeature = featuresData.find(
        (feature) => feature.anchor === hash,
      );
      if (matchedFeature) {
        setActiveFeatureId(matchedFeature.id);
      }
    };

    setActiveFromHash();
    window.addEventListener("hashchange", setActiveFromHash);
    return () => window.removeEventListener("hashchange", setActiveFromHash);
  }, []);

  return (
    <section id="home-workflow-features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          eyebrow="Platform"
          title={"Built for the work credit teams actually do."}
          paragraph="A closer look at what CREDITspective produces at each stage of the workflow — and how every output traces back to your firm's own experience."
          center
          width="900px"
          titleClassName="text-2xl sm:text-3xl md:text-4xl"
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(480px,1.15fr)] lg:items-start">
          <div className="flex flex-col gap-4">
            {featuresData.map((feature) => {
              const isActive = feature.id === activeFeatureId;

              return (
                <div
                  id={feature.anchor}
                  key={feature.id}
                  className="scroll-mt-28"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFeatureId(feature.id)}
                    className={`group shadow-three hover:shadow-two dark:bg-gray-dark dark:shadow-two w-full rounded-md border bg-white p-6 text-left transition-all duration-300 ease-in-out hover:-translate-y-0.5 sm:p-7 ${
                      isActive
                        ? "border-primary/30 ring-primary/20 ring-1"
                        : "border-transparent"
                    }`}
                    aria-expanded={isActive}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-md transition-transform duration-300 group-hover:scale-105 [&_svg]:h-6 [&_svg]:w-6">
                        {homeIcons[feature.id] ?? feature.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="mb-2 block text-xs font-semibold tracking-[0.18em] text-[#42bb9d] uppercase">
                          {feature.eyebrow}
                        </span>

                        <h3 className="group-hover:text-primary mb-2 text-base font-bold text-black transition-colors duration-300 sm:text-lg lg:text-base xl:text-lg dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium">
                          {feature.summary}
                        </p>

                        <div
                          className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                            isActive
                              ? "mt-5 grid-rows-[1fr] opacity-100"
                              : "mt-0 grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="min-h-0">
                            <p className="text-body-color-dark text-body-color mb-4 text-sm leading-relaxed">
                              {feature.details}
                            </p>
                            <ul className="text-body-color dark:text-body-color-dark space-y-2 text-sm leading-relaxed">
                              {feature.bullets.map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex items-start gap-3"
                                >
                                  <span className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="border-stroke shadow-three dark:bg-gray-dark dark:shadow-two overflow-hidden rounded-md border bg-white transition-all duration-300 dark:border-white/10">
              <div className="border-stroke border-b px-6 py-4 sm:px-8 dark:border-white/10">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#42bb9d] uppercase">
                  {activeFeature?.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-black dark:text-white">
                  {activeFeature?.title}
                </h3>
              </div>

              <div className="grid gap-0 lg:grid-rows-[auto_1fr]">
                <div className="bg-gray-light relative min-h-[280px] sm:min-h-[340px] dark:bg-black/20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(74,108,247,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(74,108,247,0.12),_transparent_40%)]" />
                  {activeFeature?.imageSrc ? (
                    <Image
                      src={activeFeature.imageSrc}
                      alt={activeFeature.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center transition-all duration-500 ease-in-out"
                    />
                  ) : null}
                </div>

                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    {activeFeature?.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWorkflowFeatures;
