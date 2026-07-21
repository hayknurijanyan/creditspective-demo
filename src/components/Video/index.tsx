"use client";

export default function Video() {
  return (
    <>
      <section className="relative z-10 py-10 lg:py-14">
        <div className="container">
          <div className="mx-auto mb-8 max-w-[720px] text-center">
            <p className="text-primary mb-3 text-sm font-semibold tracking-wider uppercase">
              Platform Walkthrough
            </p>
            <h2 className="mb-4 text-3xl leading-tight font-bold text-black sm:text-4xl md:text-[45px] dark:text-white">
              Experience the Platform
            </h2>
            <p className="text-body-color text-base leading-relaxed md:text-lg">
              See how CREDITspective transforms leveraged credit operations with
              AI-powered intelligence.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[920px] overflow-hidden rounded-md">
                <video
                  className="aspect-77/40 w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/videos/finance.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat">
            {/* <div className="absolute bottom-0 left-0 right-0 z-[-1] "> */}
            {/* <img src="/images/video/shape.svg" alt="shape" className="w-full" /> */}
          </div>
        </div>
        <div className="container mt-8 lg:mt-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="shadow-three dark:bg-gray-dark dark:shadow-two rounded-xs bg-white p-6">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Process
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Track deals from discovery through closing with customizable
                stages.
              </p>
            </div>
            <div className="shadow-three dark:bg-gray-dark dark:shadow-two rounded-xs bg-white p-6">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Analysis
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Monitor deal status, key dates, and sector classifications in
                real time.
              </p>
            </div>
            <div className="shadow-three dark:bg-gray-dark dark:shadow-two rounded-xs bg-white p-6">
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                Insights
              </h3>
              <p className="text-body-color dark:text-body-color-dark">
                Quickly surface relevant information tied directly to your deal
                flow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
