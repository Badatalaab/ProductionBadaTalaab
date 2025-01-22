const ClientFeedbackCard = ({ image, title, Discription }) => {
  return (
    <div className="flip-card w-[65vh] max-md:w-4/5 max-md:h-[40vh] h-[80vh] my-8">
      <div className="flip-card-inner relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="flip-card-front flex flex-col absolute w-full h-full bg-gray-100 shadow-lg rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-[100%] h-[80%] object-cover object-top "
          />
          <div className="p-4">
            <h3 className="text-lg max-md:text-sm fontstyle-1 font-bold text-gray-800">
              {title}
            </h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back absolute w-full h-full  text-black rounded-lg shadow-lg flex items-center justify-center">
          <h1 className="font-bold text-3xl">Client Feedback</h1>
          <p className="text-center text-lg px-4 mt-10">{Discription}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedbackCard;
