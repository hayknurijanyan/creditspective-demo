const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div data-reveal="zoom" className="relative overflow-hidden rounded-xs bg-gray-light px-8 py-10 text-center dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[52px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              <div className="absolute inset-0 z-0 opacity-60 dark:opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(74,108,247,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(74,108,247,0.14),_transparent_30%)]" />
                <svg
                  className="absolute left-0 top-0 h-full w-full"
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
                  <circle cx="430" cy="142" r="10" className="fill-primary/25" />
                  <circle cx="710" cy="142" r="10" className="fill-primary/20" />
                  <circle cx="820" cy="94" r="8" className="fill-primary/25" />
                  <circle cx="1048" cy="94" r="8" className="fill-primary/20" />
                  <circle cx="168" cy="226" r="8" className="fill-primary/20" />
                  <circle cx="470" cy="226" r="8" className="fill-primary/25" />
                  <circle cx="585" cy="170" r="10" className="fill-primary/25" />
                  <circle cx="824" cy="170" r="10" className="fill-primary/20" />
                  <circle cx="944" cy="226" r="8" className="fill-primary/25" />
                  <circle cx="1080" cy="226" r="8" className="fill-primary/20" />
                </svg>
                <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-primary/15" />
                <div className="absolute bottom-8 right-10 h-32 w-32 rounded-full border border-primary/10" />
              </div>

              <div className="relative z-10">
                <p className="text-primary mb-4 text-sm font-semibold tracking-wider uppercase">
                  A Product of Global Economics Group
                </p>
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Built for Institutional Credit Teams
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-sm dark:bg-black/30 dark:text-white">
                    Agentic AI
                  </span>
                  <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-sm dark:bg-black/30 dark:text-white">
                    Generative AI
                  </span>
                  <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-sm dark:bg-black/30 dark:text-white">
                    Credit Domain Expertise
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
