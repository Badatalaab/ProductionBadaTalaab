const ProcessBoxComponent = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center w-64 text-center p-8 cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full mb-4">
        <img src={icon} alt="Process_Logo" width="25px" />
      </div>
      {/* Title */}
      <h3 className="text-xl fontstyle-1 font-semibold mb-2">{title}</h3>
      {/* Description */}
      <p className="text-gray-600 fontstyle-2 font-normal">{description}</p>
    </div>
  );
};

export default ProcessBoxComponent;
