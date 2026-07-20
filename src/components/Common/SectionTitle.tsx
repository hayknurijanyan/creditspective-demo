const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  titleClassName = "text-3xl sm:text-4xl md:text-[45px]",
}: {
  title: string;
  paragraph: string;
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
        <h2
          className={`mb-4 leading-tight! font-bold whitespace-pre-line text-black dark:text-white ${titleClassName}`}
        >
          {title}
        </h2>
        <p className="text-body-color text-base leading-relaxed! md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
