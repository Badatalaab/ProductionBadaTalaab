import Bookappointmentbutton from "./Bookappointmentbutton";

const BookAppointment = () => {
  return (
    <div
      className="min-h-80 flex flex-col justify-center items-center  py-6"
      style={{ backgroundColor: "#F4F4F4" }}
      id="Products"
    >
      <h1 className="font-bold fontstyle-1 text-4xl max-md:text-3xl">
        How we can help you
      </h1>
      <div className="flex w-full">
        <img
          src="Images/One on one meeting.png"
          className="w-2/4 rounded-md max-md:hidden"
          alt="slot book png"
        />
        <div className="w-2/4  max-md:w-full fontstyle-1 flex justify-center items-center flex-col px-24 max-md:px-16">
          <p className="text-2xl font-semibold mt-8 mb-4">
            To start your investment book a 15 min one on one session with our
            expert :-
          </p>

          <Bookappointmentbutton />
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
