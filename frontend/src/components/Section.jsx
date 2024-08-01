const Section = ({ children }) => {
  return (
    <section className="m-auto mt-[12rem] flex flex-col items-center font-titillium-web text-light tablet:w-[800px]">
      {children}
    </section>
  );
};

export default Section;
