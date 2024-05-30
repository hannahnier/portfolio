import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import StartSection from "./StartSection";
import WorkSection from "./WorkSection";
import Footer from "../layout/Footer";

const OnePage = () => {
  return (
    <div>
      <StartSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default OnePage;
