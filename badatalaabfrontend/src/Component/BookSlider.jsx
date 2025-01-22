import { useState } from "react";

const BookSlider = () => {
  const images = [
    "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/Book-Inner-Pages-with-break.jpg?auto=format&q=60&fit=max&w=930",
    "https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg",
    "https://visme.co/blog/wp-content/uploads/2021/06/fiction-book-cover-template-visme.jpg",
    "https://via.placeholder.com/600x800.png?text=Image+4",
  ];

  const [activeImage, setActiveImage] = useState(0);

  const handlePrev = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Image */}
      <div
        style={{ borderRadius: "17px" }}
        className="w-80 h-96 overflow-hidden rounded-lg"
      >
        <img
          src={images[activeImage]}
          alt="Main"
          style={{ borderRadius: "17px" }}
          className="w-full h-full object-fill "
        />
      </div>

      {/* Thumbnails */}
      <div className="relative flex mt-2 items-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 transform -translate-x-full bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70"
        >
          &#10094;
        </button>

        <div className="flex ">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`w-16 h-16 mx-1 overflow-hidden rounded-lg cursor-pointer ${
                activeImage === idx ? "border-2 border-white" : ""
              }`}
              onClick={() => setActiveImage(idx)}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 transform translate-x-full bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-70"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default BookSlider;
