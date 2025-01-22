import { useState, useEffect } from "react";

const ImageDisplayer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="relative flex justify-start items-start w-full  h-full ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }
          `}
        >
          <img
            src={image.src}
            alt={`Slide ${index + 1}`}
            className=" h-4/5 object-cover w-full rounded-md shadow-lg "
          />
          <h4 className="text-white text-end mt-4 text-xl fontstyle-1">
            {image.Foundername}
          </h4>
          <h5 className="text-white text-end text-sm fontstyle-1">
            {image.Degree}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ImageDisplayer;
