import Layout from "../Component/Layout";
import FounderText from "../Component/FounderText";
import OurMission from "../Component/OurMission";

const AboutUsPage = () => {
  return (
    <Layout>
      {/* Text from our founder */}
      <FounderText />

      {/*Our Misson */}
      <OurMission />
    </Layout>
  );
};

export default AboutUsPage;
