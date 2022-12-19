function Section({ children }) {
  return (
    <section className="border-y border-x border-accent bg-black/80 px-4 pb-4 md:mx-[10%]">
      {children}
    </section>
  );
}
export default Section;
