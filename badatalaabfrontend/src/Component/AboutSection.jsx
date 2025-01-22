import { useEffect, useState } from "react";

const images = [
  "https://cdn.pixabay.com/photo/2024/04/29/15/37/transparency-8728255_1280.jpg", // Replace with actual image URLs
  "https://images.pexels.com/photos/10815211/pexels-photo-10815211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://media.istockphoto.com/id/983223866/photo/wooden-house-model-and-step-of-coins-stacks-with-tree-growing-on-top-nature-background-money.jpg?s=612x612&w=0&k=20&c=r80lfq2YYpitUWn7xnaqKRS3VmgSEko1zXnqdyD4pRo=",
];

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    const section = document.getElementById("letstalk");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
      {/* Image Section */}
      <div className="relative w-full max-md:hidden lg:w-1/2 h-64 max-md:h-[45vh] lg:h-96">
        {images.map((image, index) => {
          const isCurrent = index === currentIndex;
          const isNext = index === (currentIndex + 1) % images.length;
          const isPrevious =
            index === (currentIndex - 1 + images.length) % images.length;

          return (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full max-md:h-[45vh] object-cover rounded-lg transition-all duration-1000 ${
                isCurrent
                  ? "z-30 opacity-100 scale-100"
                  : isNext
                  ? "z-20 opacity-60 scale-95"
                  : isPrevious
                  ? "z-10 opacity-30 scale-90"
                  : "opacity-0 scale-90"
              }`}
              style={{
                top: isCurrent ? "0" : isNext ? "10px" : "20px",
                right: isCurrent ? "0" : isNext ? "30px" : "60px",
              }}
            />
          );
        })}
      </div>

      {/* Text Section */}
      <div className="mt-2 lg:mt-0 lg:ml-12 lg:w-1/2">
        <h3 className="text-lg max-md:text-3xl fontstyle-1 font-semibold text-[#64CCC5] uppercase">
          Core Values
        </h3>
        <h2 className="text-4xl fontstyle-1 max-md:hidden font-semibold mt-2">
          The core values behind all our work
        </h2>
        <ul className="text-gray-400 fontstyle-2 font-normal mt-4 list-disc list-inside">
          <li>Integrity</li>
          <li>Trust</li>
          <li>Client-Centric</li>
          <li>Transparency</li>
          <li>Empowerment</li>
        </ul>

        {/* Stats Section */}
        <div className="flex items-center mt-6 space-x-8">
          <div>
            <h4 className="text-3xl fontstyle-1 font-semibold text-[#64CCC5]">
              10+
            </h4>
            <p className="text-gray-400 fontstyle-2 font-semibold">
              Years of exp
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleClick}
          className="flex items-center fontstyle-2 font-normal mt-6 max-md:mt-6 gap-2 px-6 py-3 text-white bg-white/90 hover:bg-white rounded-full shadow-md hover:shadow-lg transition duration-500 transform hover:-translate-y-1 hover:scale-105 group"
        >
          <span className="text-black text-lg font-medium">
            Let's Start Your Journey
          </span>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white transition-transform transform duration-1000 group-hover:ml-2">
            &rarr;
          </div>
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
