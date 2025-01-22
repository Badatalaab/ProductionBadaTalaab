import { useState, useEffect, useRef } from "react";

const Achievementcard = () => {
  // State to track the animated numbers
  const [aum, setAum] = useState(0);
  const [sipBook, setSipBook] = useState(0);
  const [customers, setCustomers] = useState(0);

  // Refs for each section
  const aumRef = useRef(null);
  const sipBookRef = useRef(null);
  const customersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aumRef.current) {
              // Animate AUM number
              let currentAum = 0;
              const interval = setInterval(() => {
                currentAum += 1;
                setAum(currentAum);
                if (currentAum >= 100) {
                  clearInterval(interval);
                }
              }, 50);
            }

            if (entry.target === sipBookRef.current) {
              // Animate SIP Book number
              let currentSipBook = 0;
              const interval = setInterval(() => {
                currentSipBook += 1;
                setSipBook(currentSipBook);
                if (currentSipBook >= 30) {
                  clearInterval(interval);
                }
              }, 60);
            }

            if (entry.target === customersRef.current) {
              // Animate Customers number
              let currentCustomers = 0;
              const interval = setInterval(() => {
                currentCustomers += 10;
                setCustomers(currentCustomers);
                if (currentCustomers >= 550) {
                  clearInterval(interval);
                }
              }, 50);
            }
          }
        });
      },
      { threshold: 0.7 } // Trigger when 70% of the section is visible
    );

    if (aumRef.current) observer.observe(aumRef.current);
    if (sipBookRef.current) observer.observe(sipBookRef.current);
    if (customersRef.current) observer.observe(customersRef.current);

    return () => {
      if (aumRef.current) observer.unobserve(aumRef.current);
      if (sipBookRef.current) observer.unobserve(sipBookRef.current);
      if (customersRef.current) observer.unobserve(customersRef.current);
    };
  }, []);

  return (
    <div className="flex justify-between max-md:justify-center max-md:flex-wrap items-center px-32 max-md:px-10 bg-white p-10 fontstyle-1 shadow-md w-screen-lg mx-auto">
      {/* AUM Section */}
      <div
        ref={aumRef}
        className="text-center max-md:w-full transform cursor-pointer shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-gray-600 hover:shadow-lg p-10 w-80 h-40 rounded-2xl"
      >
        <h2 className="text-3xl max-md:4xl font-bold">{aum} Cr +</h2>
        <p className="mt-2 text-lg max-md:text-xl font-semibold">AUM</p>
      </div>

      {/* SIP Book Section */}
      <div
        ref={sipBookRef}
        className="text-center p-10 w-80 h-40 max-md:mt-6 rounded-2xl max-md:w-full shadow-md transform cursor-pointer transition-transform duration-300 hover:shadow-gray-600 hover:shadow-lg hover:scale-105 hover:bg-gray-100"
      >
        <h2 className="text-3xl max-md:4xl font-bold">{sipBook} Lakhs</h2>
        <p className="mt-2 text-lg max-md:text-xl font-semibold">Live SIP</p>
      </div>

      {/* Customers Section */}
      <div
        ref={customersRef}
        className="text-center p-10 w-80 h-40 max-md:mt-6 rounded-2xl max-md:w-full shadow-md transform cursor-pointer transition-transform hover:shadow-gray-600 hover:shadow-lg duration-300 hover:scale-105 hover:bg-gray-100 "
      >
        <h2 className="text-3xl max-md:4xl font-bold">{customers}+</h2>
        <p className="mt-2 text-lg max-md:text-xl font-semibold">Clients</p>
      </div>
    </div>
  );
};

export default Achievementcard;
