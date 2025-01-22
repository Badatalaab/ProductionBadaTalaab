import ClientFeedbackCard from "./ClientFeedbackCard";

const ClientFeedbackSection = () => {
  const client1 = [
    {
      image: "Images/Testimonials/CA Navneet Garg.jpeg",
      title: "CA Navneet Garg",
      Discription:
        "Their honesty and integrity shine through in every conversation. They never push unnecessary products and always prioritize what’s best for me. I feel safe and secure, knowing they genuinely care about my financial well-being and always act in my best interest.",
    },
    {
      image: "Images/Testimonials/Mamta.jpg",
      title: "Mamta Chavan (Product Analyst)",
      Discription:
        "In a world where financial uncertainty is common, this company has been a beacon of stability for me. Their dedication to trust and transparency ensures I always know where my money is and how it’s performing. Their guidance feels more like a partnership than a transaction, and that gives me an incredible sense of safety. ",
    },
    {
      image: "Images/Testimonials/Dr. Shomi Toppo.jpeg",
      title: "Dr. Shomi Toppo",
      Discription:
        "They walk me through every detail, ensuring I feel comfortable and confident in my choices. Their open communication and commitment to earning my trust have given me unparalleled peace of mind. I know my future is secure with them managing my investments",
    },
  ];

  return (
    <section className="py-4 bg-white text-center">
      {/* Section Heading */}
      <h2
        className="text-3xl fontstyle-1 font-semibold  mb-8"
        style={{ color: "#000000" }}
      >
        Here from our Clients.
      </h2>

      {/* Grid Layout */}
      <div className=" flex w-full ">
        <div className="w-full h-full flex max-md:flex-col md:flex-row gap-10  items-center  justify-center">
          {client1.map((client, index) => (
            <ClientFeedbackCard
              image={client.image}
              title={client.title}
              Discription={client.Discription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbackSection;
