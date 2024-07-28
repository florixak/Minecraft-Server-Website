const Section = ({ children }) => {
  return (
    <section className="font-titillium-web m-auto mt-[12rem] flex flex-col items-center text-light tablet:w-[800px]">
      {children}
    </section>
  );
};

export default Section;
