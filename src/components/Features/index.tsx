"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import featuresData from "./featuresData";

const Features = () => {
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
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            eyebrow="Workflow Features"
            title={"One thread runs through \n  every stage of the workflow."}
            paragraph="Every deal you screen, underwrite, monitor, and exit becomes durable, searchable institutional memory — reusable by the next analyst, on the next deal, in the next cycle. Discovery, underwriting, monitoring, and portfolio management aren't four tools bolted together; they compound on the same foundation."
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
                          {feature.icon}
                        </div>

                        <div className="min-w-0 flex-1">
                          <span className="text-primary/80 mb-2 block text-xs font-semibold tracking-[0.18em] uppercase">
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
                  <p className="text-primary/80 text-xs font-semibold tracking-[0.18em] uppercase">
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
    </>
  );
};

export default Features;
