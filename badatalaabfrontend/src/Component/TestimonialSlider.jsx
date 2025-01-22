import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "An investment in knowledge pays the best interest",
    author: "Benjamin Franklin",
    image: "./Images/AuthorImage/Benjamin Franklin.jpg",
  },
  {
    text: "It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for",
    author: "Robert Kiyosaki",
    image: "./Images/AuthorImage/Robert Kiyosaki.png",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300); // Match the duration of the animation
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300); // Match the duration of the animation
  };

  const { text, author, image } = testimonials[currentIndex];

  return (
    <div
      className="flex flex-col items-center justify-center m-2 my-10 p-4 text-center max-w-5xl mx-auto"
      style={{ backgroundColor: "#F4F4F4" }}
    >
      {/* Smooth Transition Wrapper */}
      <div
        className={`transition-all duration-300 ease-in-out flex justify-center items-center flex-col ${
          isAnimating ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0"
        }`}
      >
        <img
          src={image}
          alt={author}
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
        <p className="text-xl font-medium text-gray-800 italic">"{text}"</p>
        <h3 className="mt-4 text-lg font-bold">{author}</h3>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="p-2 w-10 bg-gray-200 hover:bg-gray-300 focus:outline-none"
          style={{ borderRadius: "50%" }}
        >
          <i className="fa-solid fa-arrow-right fa-flip-horizontal"></i>
        </button>
        <button
          onClick={handleNext}
          className="p-2 w-10 bg-gray-200 hover:bg-gray-300 focus:outline-none"
          style={{ borderRadius: "50%" }}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
