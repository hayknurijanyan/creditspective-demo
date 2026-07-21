import Link from "next/link";

const HomeHero = () => {
  return (
    <section
      id="home"
      className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-[108px] pb-12 md:pt-[136px] md:pb-[88px] xl:pt-[164px] xl:pb-[124px] 2xl:pt-[192px] 2xl:pb-[156px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[980px] text-center"
              data-reveal="zoom"
            >
              <p className="text-primary mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
                Built by credit experts, for credit experts
              </p>

              <h1 className="mb-6 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
                Institutional Memory:
                <br />
                Your Untapped Alpha Generating Superpower.
              </h1>

              <p className="text-body-color dark:text-body-color-dark mx-auto mb-12 max-w-[900px] text-base leading-relaxed sm:text-lg md:text-xl">
                The only AI application built for the full credit lifecycle,
                grounded in institutional memory - from a team whose founders
                have managed more than $15 billion in credit exposure.
              </p>

              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link
                  href="/product"
                  className="bg-primary hover:bg-primary/80 rounded-xs px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out"
                >
                  Explore Product
                </Link>
                <Link
                  href="/#contact"
                  className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="277" cy="63" r="225" fill="url(#homeHeroPaint0)" />
          <circle cx="17.9997" cy="182" r="18" fill="url(#homeHeroPaint1)" />
          <circle cx="76.9997" cy="288" r="34" fill="url(#homeHeroPaint2)" />
          <defs>
            <linearGradient
              id="homeHeroPaint0"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="homeHeroPaint1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient
              id="homeHeroPaint2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HomeHero;
