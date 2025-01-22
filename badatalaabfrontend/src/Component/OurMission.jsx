import MissionText from "./MissionText";
import TeamSelection from "./TeamSelection";
import StatSection from "./StatSection";

const OurMission = () => {
  return (
    <div className="  text-white py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-start justify-between gap-8">
      {/* Mission Text */}
      <MissionText />

      {/* Team Section */}
      <TeamSelection />

      {/* Stats Section */}
      <StatSection />
    </div>
  );
};

export default OurMission;
