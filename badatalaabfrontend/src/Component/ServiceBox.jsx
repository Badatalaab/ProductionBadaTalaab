const ServiceBox = (props) => {
  return (
    <div className="group max-md:mt-8 w-80 max-md:w-96 max-md:rounded-xl p-6 h-80 cursor-pointer bg-white rounded-lg shadow-lg transition duration-300 hover:bg-black">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center overflow-hidden justify-center rounded-full group-hover:border-white group-hover:border-2 group-hover:bg-white transition duration-300">
        <img src={props.image} alt="Logo" className="" />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold fontstyle-1 text-black group-hover:text-white transition duration-300">
        {props.title}
      </h3>

      {/* Description */}
      <p className="mt-2 fontstyle-2 text-sm text-gray-600 group-hover:text-gray-300 transition duration-300">
        {props.discription}
      </p>
    </div>
  );
};

export default ServiceBox;
