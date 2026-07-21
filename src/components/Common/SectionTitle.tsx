const SectionTitle = ({
  eyebrow,
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  titleClassName = "text-3xl sm:text-4xl md:text-[45px]",
}: {
  eyebrow?: string;
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
  titleClassName?: string;
}) => {
  return (
    <>
      <div
        data-reveal="up"
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        {!!eyebrow && (
          <p className="text-primary mb-3 text-sm font-semibold tracking-wider uppercase">
            {eyebrow}
          </p>
        )}
        <h2
          className={`mb-4 leading-tight! font-bold whitespace-pre-line text-black dark:text-white ${titleClassName}`}
        >
          {title}
        </h2>
        {paragraph ? (
          <p className="text-body-color text-base leading-relaxed! md:text-lg">
            {paragraph}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default SectionTitle;
