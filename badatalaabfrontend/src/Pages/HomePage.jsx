import { useEffect, useState } from "react";
import Layout from "../Component/Layout";
import Achievementcard from "../Component/Achievementcard";
import ServiceSection from "../Component/ServiceSection";
import ClientFeedbacksection from "../Component/ClientFeedbacksection";
import TestimonialSlider from "../Component/TestimonialSlider";
import AboutSection from "../Component/AboutSection";
import LetsTalkSection from "../Component/LetsTalkSection";
import ProcessComponent from "../Component/ProcessComponent";
import BookAppointment from "../Component/BookAppointment";
import HeroSection from "../Component/HeroSection";

const HomePage = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Show for 1 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showWelcome && (
        <div className="welcome-screen">
          <h2 className="text-white text-4xl p-36 fontstyle-1 font-bold netflix-animation">
            Welcome to Bada Talaab
          </h2>
        </div>
      )}
      {!showWelcome && (
        <Layout>
          {/* HeroSection */}

          <HeroSection />

          {/* Achievementcard */}

          <Achievementcard />

          {/*Service section */}
          <ServiceSection />

          {/*Procces component*/}
          <ProcessComponent />

          {/*About us section */}
          <AboutSection />

          {/*Hear from Client Section */}
          <ClientFeedbacksection />

          {/* How we can help you: */}

          <BookAppointment />

          {/*testmonials */}
          <TestimonialSlider />

          {/*Lets Talk Section */}
          <LetsTalkSection />
        </Layout>
      )}
    </>
  );
};

export default HomePage;
