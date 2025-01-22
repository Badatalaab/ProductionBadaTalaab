import ImageDisplayer from "./ImageDisplayer";

const FounderText = () => {
  const images = [
    {
      src: "Images/Founders/Mr. Omnath Sharma.JPG",
      Foundername: "CMA Omnath Sharma",
      Degree: "M.Com, LLB, ACMA",
    },
    {
      src: "./Images/Founders/Dr. Swati Tiwari.jpeg",
      Foundername: "Dr. Swati Tiwari",
      Degree: "PhD, MBE Finance, MA Clinical Psychology",
    },
  ];

  return (
    <div
      className=" flex pt-20 h-[100vh] max-md:h-[155vh] max-lg:pt-28 pb-4 px-10 max-lg:px-2  text-white fontstyle-1 font-semibold text-xl "
      id="Aboutus"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="w-9/12 max-lg:w-full h-full flex flex-col px-10 justify-start items-start">
        <h1
          className="font-semibold text-5xl mb-5 md:mt-10 fontstyle-1"
          style={{ color: "#64CCC5" }}
        >
          Text From our Founder
        </h1>
        <div className="h-[55vh]  md:hidden md:mt-10 max-lg:w-full flex items-start justify-start flex-row">
          <ImageDisplayer images={images} />
        </div>
        <p
          className="leading-8 fontstyle-2 font-normal text-xl pra p-2 pr-40 max-md:pr-0"
          style={{ color: "#F4F4F4" }}
        >
          Welcome to Bada Talaab Investments Private Limited, your partner in
          building wealth and achieving financial freedom. At Bada Talab, we
          believe financial freedom is the foundation of a fulfilling life. We
          specialize in providing smart investment solutions and wealth
          management strategies through ethical financial practices that empower
          our clients to make informed decisions.
          <br />
          What sets us apart? It’s our dedication to providing solutions that
          aren’t just effective but also deeply personalized. Whether you're
          planning for your family's future, growing your business, or achieving
          financial independence, we’re here at every step.
        </p>
      </div>
      <div className="h-full w-3/12 max-lg:hidden md:mt-10 max-lg:w-full flex items-start justify-start flex-row">
        <ImageDisplayer images={images} />
      </div>
    </div>
  );
};

export default FounderText;
