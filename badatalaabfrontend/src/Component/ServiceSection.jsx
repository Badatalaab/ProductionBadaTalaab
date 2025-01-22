import ServiceBox from "./ServiceBox";

const ServiceSection = () => {
  let c = [
    {
      image: "./Images/ServiceLogoImage/Logo Health Insurance new.jpg",
      title: "Mutual Funds",
      discription:
        "A mutual fund is an investment vehicle that pools money from multiple investors to invest in stocks, bonds, or other securities, managed by professional fund managers.",
    },
    {
      image: "./Images/ServiceLogoImage/Logo MFs.jpg",
      title: "PMS & AFI",
      discription:
        "PMS is a professional investment service where an experienced portfolio manager manages  portfolio. AIFs include private equity, hedge funds, venture capital, real estate, infrastructure, and other unconventional asset classes.",
    },
    {
      image: "./Images/ServiceLogoImage/Logo Portfolio.jpg",
      title: "Health Insurance",
      discription:
        "Health insurance is a financial product that covers medical expenses incurred due to illness, injury, or hospitalization. It helps protect individuals and families from high healthcare costs, providing access to quality treatment without depleting savings.",
    },
  ];
  return (
    <div className="w-full flex max-md:justify-center max-md:p-8 bg-white flex-wrap justify-between items-center px-32 py-4">
      {c.map((e) => {
        return (
          <ServiceBox
            image={e.image}
            title={e.title}
            discription={e.discription}
          />
        );
      })}
    </div>
  );
};

export default ServiceSection;
