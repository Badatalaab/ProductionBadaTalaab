const StatSection = () => {
  return (
    <div className="w-2/6  max-md:w-full flex flex-col gap-6 md:px-10">
      <div className="bg-gray-800 rounded-lg p-6  md:mt-10 text-center">
        <h4 className="text-3xl font-bold fontstyle-1 text-[#64CCC5]">
          100 Cr +
        </h4>
        <p className="text-gray-400 font-bold fontstyle-10">Aum</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 text-center">
        <h4 className="text-3xl font-bold fontstyle-1 text-[#64CCC5]">10 +</h4>
        <p className="text-gray-400 font-bold fontstyle-1">Year Of Experince</p>
      </div>
    </div>
  );
};

export default StatSection;
