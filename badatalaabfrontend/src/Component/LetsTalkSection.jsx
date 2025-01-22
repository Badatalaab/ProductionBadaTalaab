import FormComponent from "./FormComponent";

const LetsTalkSection = () => {
  return (
    <div
      id="letstalk"
      className="bg-white  w-full py-12 px-6 max-md:px-4 lg:px-20 flex flex-col lg:flex-col items-start lg:items-center justify-between gap-12"
    >
      <div className="flex w-11/12  flex-row">
        {/* Contact Info Section */}
        <div className="lg:w-1/3">
          <h2 className="text-5xl font-semibold fontstyle-1 mb-4">
            Let’s talk
          </h2>
          <p className="text-[#0C0C0CE5] text-base leading-5 font-normal fontstyle-2 mb-6">
            We collaborate with thousands of creators, entrepreneurs, and
            complete legends.
          </p>
          <div className="w-full ml-4 mb-4 md:hidden">
            <FormComponent />
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-black">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4 className="font-semibold fontstyle-1 text-base">
                  Our email
                </h4>
                <p className="text-gray-600 font-normal text-sm fontstyle-2">
                  badatalaabinvestments@gmail.com
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-black">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div>
                <h4 className="font-semibold fontstyle-1 text-base">Call us</h4>
                <p className="text-gray-600 font-normal text-sm fontstyle-2">
                  0755-4864345
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-black">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <a
                href="https://maps.app.goo.gl/tM4bQdjnrEzKBXYS8"
                className="cursor-pointer"
              >
                <h4 className="font-semibold fontstyle-1 text-base">Find us</h4>
                <p className="text-gray-600 text-sm font-normal  fontstyle-2">
                  Open Google Maps
                </p>
              </a>
            </li>
          </ul>
          <hr className="mt-4 w-5/6" />
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/share/ZEhinW7xbkd847bq/?mibextid=wwXIfr"
              className="text-gray-600 hover:text-black"
            >
              <i class="fa-brands fa-facebook fa-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/badatalaab_investments?igsh=MXU4aTA3dXVqdzVndA==&utm_source=ig_contact_invite"
              className="text-gray-600 hover:text-black"
            >
              <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
            <a
              href="https://x.com/BadaTalaab?t=_2OBL8Djg_kFv3Lsr1k9Sg&s=08"
              className="text-gray-600 hover:text-black "
            >
              <i class="fa-brands fa-x-twitter fa-xl"></i>
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-2/3 max-md:hidden">
          <FormComponent />
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d545.0598972834555!2d77.45432766187079!3d23.217189230403754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c423114987c67%3A0x7d64bd966f989f2f!2s232%2C%20Sector%201%20Shakti%20Nagar%2C%20Sector%202%2C%20Shakti%20Nagar%2C%20Habib%20Ganj%2C%20Bhopal%2C%20Madhya%20Pradesh%20462024!5e0!3m2!1sen!2sin!4v1736319419556!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className=" brightness-50 border-black rounded-2xl"
        allowFullScreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LetsTalkSection;
