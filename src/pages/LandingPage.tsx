import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import WhyTeamsSection from "../components/WhyTeamsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import MbFeaturesSection from "../components/MbFeaturesSection";
import FeaturesSection from "../components/FeaturesSection";

export default function Landing() {
  return (
    <div className="bg-white">
      <Navigation />
      <HeroSection />
      <WhyTeamsSection />

      {/* Show FeaturesSection only on lg and up */}
      <div className="hidden lg:block">
        <FeaturesSection />
      </div>

      {/* Show MbFeaturesSection only on below lg */}
      <div className="block lg:hidden">
        <MbFeaturesSection />
      </div>

      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
