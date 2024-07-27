const Section = ({ children }) => {
  return (
    <section className="m-auto mt-[12rem] flex flex-col items-center gap-14 font-open-sans text-light tablet:w-[800px]">
      {children}
    </section>
  );
};

export default Section;
