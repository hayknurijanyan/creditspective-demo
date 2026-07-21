"use client";

import { useState } from "react";
import { NextChevronIcon, PrevChevronIcon } from "./icons";

const quotes = [
  {
    id: 1,
    text: '"Of all the AI credit tools we\'ve looked at, CREDITspective is the only one that works across the end-to-end credit lifecycle."',
    author: "— Global Asset Manager",
  },
  {
    id: 2,
    text: "\"Institutional memory is more than just data retrieval, it's curated contextual analysis of our firms' investment history.\"",
    author: "— Private Credit Senior Analyst",
  },
];

const HomeInstitutionalQuotes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative z-20 -mt-16 pb-5 md:-mt-20 md:pb-7 lg:-mt-24 lg:pb-9">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-6 sm:px-10 lg:px-14">
            <div className="shadow-three dark:bg-gray-dark dark:shadow-two bg-gray-light relative mx-auto max-w-[940px] overflow-hidden rounded-md border border-black/6 px-5 py-3 shadow-[0_-8px_16px_rgba(6,8,15,0.05),0_10px_24px_rgba(6,8,15,0.06)] sm:px-6 sm:py-4 md:px-7 md:py-5 xl:px-8 xl:py-5 2xl:px-10 2xl:py-6 dark:border-white/8 dark:shadow-[0_-8px_16px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.18)]">
              <div className="absolute inset-0 z-0 opacity-60 dark:opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(74,108,247,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(74,108,247,0.14),_transparent_30%)]" />
                <svg
                  className="absolute top-0 left-0 h-full w-full"
                  viewBox="0 0 1200 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M125 82H335L430 142H710L820 94H1048"
                    stroke="currentColor"
                    className="text-primary/20"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                  />
                  <path
                    d="M168 226H470L585 170H824L944 226H1080"
                    stroke="currentColor"
                    className="text-primary/15"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                  />
                  <circle cx="125" cy="82" r="8" className="fill-primary/25" />
                  <circle cx="335" cy="82" r="8" className="fill-primary/20" />
                  <circle
                    cx="430"
                    cy="142"
                    r="10"
                    className="fill-primary/25"
                  />
                  <circle
                    cx="710"
                    cy="142"
                    r="10"
                    className="fill-primary/20"
                  />
                  <circle cx="820" cy="94" r="8" className="fill-primary/25" />
                  <circle cx="1048" cy="94" r="8" className="fill-primary/20" />
                  <circle cx="168" cy="226" r="8" className="fill-primary/20" />
                  <circle cx="470" cy="226" r="8" className="fill-primary/25" />
                  <circle
                    cx="585"
                    cy="170"
                    r="10"
                    className="fill-primary/25"
                  />
                  <circle
                    cx="824"
                    cy="170"
                    r="10"
                    className="fill-primary/20"
                  />
                  <circle cx="944" cy="226" r="8" className="fill-primary/25" />
                  <circle
                    cx="1080"
                    cy="226"
                    r="8"
                    className="fill-primary/20"
                  />
                </svg>
                <div className="border-primary/15 absolute top-8 left-8 h-24 w-24 rounded-full border" />
                <div className="border-primary/10 absolute right-10 bottom-8 h-32 w-32 rounded-full border" />
              </div>

              <div className="relative z-10">
                <div
                  className="bg-primary mb-4 h-[3px] w-14"
                  aria-hidden="true"
                />

                <div className="relative min-h-[108px] sm:min-h-[116px]">
                  {quotes.map((quote, index) => (
                    <figure
                      key={quote.id}
                      className={`absolute inset-0 flex h-full flex-col justify-between transition-all duration-500 ease-in-out ${
                        index === activeIndex
                          ? "translate-x-0 opacity-100"
                          : index < activeIndex
                            ? "-translate-x-4 opacity-0"
                            : "translate-x-4 opacity-0"
                      }`}
                      aria-hidden={index !== activeIndex}
                    >
                      <blockquote className="text-body-color dark:text-body-color-dark text-sm leading-relaxed sm:text-base lg:text-lg">
                        {quote.text}
                      </blockquote>
                      <figcaption className="mt-auto pt-4 pb-1 text-xs font-semibold tracking-wider text-black uppercase sm:text-sm dark:text-white">
                        {quote.author}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mx-auto mt-3 flex max-w-[940px] items-center justify-between px-1 sm:px-2">
              <div className="flex items-center gap-2">
                {quotes.map((quote, index) => (
                  <button
                    key={quote.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show quote ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-6"
                        : "bg-primary/30 w-2"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous quote"
                  className="border-stroke text-body-color hover:text-primary inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border transition-colors duration-300 dark:border-white/10 dark:text-white"
                >
                  <PrevChevronIcon />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next quote"
                  className="border-stroke text-body-color hover:text-primary inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border transition-colors duration-300 dark:border-white/10 dark:text-white"
                >
                  <NextChevronIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInstitutionalQuotes;
