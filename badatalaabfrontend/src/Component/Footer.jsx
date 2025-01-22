const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center items-center flex-col">
          <img
            src="Images/Logo/Bada_talablogo.png"
            className="w-52 h-28"
            alt="LOGO"
          />
          <h1 className="text-2xl text-center fontstyle-1">
            Bada Talaab Investments Private Limited
          </h1>
          <h2 className="text-xl text-center my-2 fontstyle-1">
            Registered Mutual Fund Distributor
          </h2>
          <h2 className="text-base text-gray-400 text-center fontstyle-2">
            AMFI Reg Number: 294807 (Date of initial Registration: 15/05/2024;
            Current validity of ARN: 14/05 /2027)
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4  md:pl-20 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold fontstyle-1">Head Office</h3>
            <p className="mb-2 fontstyle-2 text-sm">
              232, Sector 2, Shakti Nagar, Habibganj Bhopal (M.P), 462024
            </p>
            <h3 className="text-lg font-semibold fontstyle-1">
              Contact Number
            </h3>
            <p className="mb-2 fontstyle-2 text-sm">0755-4864345</p>
            <h3 className="text-lg font-semibold fontstyle-1">Email</h3>
            <a
              href="mailto:info@badatalaabinvestments.com"
              className="mb-2 text-sm fontstyle-2 hover:text-blue-100 max-md:hidden"
            >
              info@badatalaabinvestments.com{" "}
            </a>
            <a
              href="mailto:info@badatalaabinvestments.com"
              className="mb-2 text-sm fontstyle-2 hover:text-blue-100 md:hidden"
            >
              info@badatalaabinvestments .com
            </a>
            <h3 className="text-lg font-semibold fontstyle-1">Social Media</h3>
            <div className="flex space-x-6 mt-2 ">
              <a
                href="https://www.facebook.com/share/ZEhinW7xbkd847bq/?mibextid=wwXIfr"
                className="hover:text-gray-400"
              >
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/badatalaab_investments?igsh=MXU4aTA3dXVqdzVndA==&utm_source=ig_contact_invite"
                className="hover:text-gray-400"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://x.com/BadaTalaab?t=_2OBL8Djg_kFv3Lsr1k9Sg&s=08"
                className="hover:text-gray-400"
              >
                <i class="fa-brands fa-x-twitter fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="md:px-10 md:ml-10">
            <h3 className="text-lg font-semibold mb-1 fontstyle-1">
              Useful Links:
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="http://www.amfiindia.com/"
                  className="hover:underline text-sm fontstyle-2"
                >
                  AMFI
                </a>
              </li>
              <li>
                <a
                  href="http://www.sebi.gov.in/"
                  className="hover:underline text-sm fontstyle-2"
                >
                  SEBI
                </a>
              </li>
              <li>
                <a
                  href="http://www.rbi.org.in/"
                  className="hover:underline text-sm fontstyle-2"
                >
                  RBI 
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-1 fontstyle-1">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/terms&conditon"
                  className="hover:underline text-sm fontstyle-2"
                >
                  Terms And Conditions
                </a>
              </li>
              <li>
                <a
                  href="/disclaimer"
                  className="hover:underline text-sm fontstyle-2"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="/privacy&policy"
                  className="hover:underline text-sm fontstyle-2"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-1 fontstyle-1">Pages</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline text-sm fontstyle-2">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:underline text-sm fontstyle-2"
                >
                  About US
                </a>
              </li>
              <li>
                <a href="faq" className="hover:underline text-sm fontstyle-2">
                  FAQ'S
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
