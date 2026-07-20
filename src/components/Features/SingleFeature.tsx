import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, summary, details, bullets, eyebrow } = feature;
  return (
    <div className="h-full w-full">
      <div
        data-reveal="up"
        className="wow fadeInUp shadow-three dark:bg-gray-dark dark:shadow-two flex h-full flex-col rounded-xs bg-white p-6 sm:p-8"
      >
        <p className="text-primary/80 mb-3 text-xs font-semibold tracking-[0.18em] uppercase">
          {eyebrow}
        </p>
        <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {summary}
        </p>
        <p className="text-body-color-dark mt-4 text-sm leading-relaxed">
          {details}
        </p>
        <ul className="text-body-color dark:text-body-color-dark mt-4 space-y-2 text-sm leading-relaxed">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleFeature;
