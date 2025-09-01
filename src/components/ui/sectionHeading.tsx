export const SectionHeading = ({
  label,
  isDark
}: {
  label: string;
  isDark: boolean;
}) => {
  return (
    <h2
      className={`wwd-text -translate-y-1/2 left-10 font-headline font-[900] text-[20vw] leading-none tracking-tight ${
        isDark ? "text-white/60" : "text-primary/10"
      }`}
    >
      {label}
    </h2>
  );
};
