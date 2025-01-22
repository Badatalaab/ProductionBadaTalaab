import ProcessBoxComponent from "./ProcessBoxComponent";

const ProcessComponent = () => {
  const steps = [
    {
      icon: "./Images/ProcessLogoImage/Bulb.png", // Replace with a relevant icon component if needed
      title: "Purpose",
      description: "Understanding the objective of investment",
    },
    {
      icon: "./Images/ProcessLogoImage/Circulartick.png",
      title: "Research",
      description: "Timeframe for investment and understanding risk appetite ",
    },
    {
      icon: "./Images/ProcessLogoImage/Envolp.png",
      title: "Selection",
      description: "Selecting quality investments",
    },
    {
      icon: "./Images/ProcessLogoImage/Setting.png",
      title: "Monitor",
      description: "Reviewing investment periodically",
    },
  ];
  return (
    <div className="py-12 px-12 lg:px-40 bg-gray-50">
      <h2 className="text-center text-[#0C0C0C] fontstyle-1 font-semibold text-4xl  mb-12">
        Process that moves things forward
      </h2>

      {/* Steps Section */}
      <div className="grid max-md:place-items-center max-md:gap-5 max-md:grid-cols-1 grid-cols-4 gap-20">
        {steps.map((step, index) => (
          <ProcessBoxComponent
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessComponent;
