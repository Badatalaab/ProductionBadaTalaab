const HeroSection = () => {
  const handleClick = () => {
    const section = document.getElementById("letstalk");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className=" w-full flex justify-center items-start flex-row h-screen max-md:h-[80vh]"
      style={{
        backgroundColor: "#0C0C0C",
      }}
    >
      <img
        src="./Images/Startrectangle.png"
        className="absolute -left-8 top-20 max-md:top-24"
        alt=""
        width="120px"
        height="120px"
        srcset=""
      />

      <div className="w-8/12 h-full flex flex-col justify-center  items-start max-md:items-start px-40 max-md:px-12 max-md:pt-20 max-md:w-full">
        <h1 className="text-5xl max-md:text-3xl md:leading-tight text-white fontstyle-1 font-semibold   max-md:leading-relaxed">
          Building Wealth{" "}
          <span
            style={{
              color: "#64CCC5",
            }}
          >
            Through Knowledge
          </span>
        </h1>
        <p className="fontstyle-2 font-normal text-[#FBFBFB] text-[15px] mt-2 pra">
          Building wealth through knowledge is key to making informed investment
          decisions. As your mutual fund distributor, we are here to guide you
          with insights, which will help you to choose the right funds that
          align with your financial goals and risk tolerance. Empower yourself
          with understanding, and watch your investments grow strategically.
        </p>

        <button
          onClick={handleClick}
          className="flex items-center mt-6 max-md:mt-6 gap-2 px-6 py-3 text-white bg-white/90 hover:bg-white rounded-full shadow-md hover:shadow-lg transition duration-500 transform hover:-translate-y-1 hover:scale-105 group"
        >
          <span className="text-black text-lg font-medium">
            Let's Start Your Journey
          </span>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white transition-transform transform duration-1000 group-hover:ml-2">
            &rarr;
          </div>
        </button>
      </div>
      <div className=" w-4/12 md:h-full flex justify-center items-center max-md:hidden">
        <img
          src="Images/Hero-section.png"
          className="w-full filter brightness-90  transition duration-500 hover:brightness-110 hover:drop-shadow[0_0_80px_10px_rgba(255,255,255,0.6)]"
          alt="Stock image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
