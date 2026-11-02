import StarfieldBackground from "@/components/StarfieldBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolarSystemSection from "@/components/SolarSystemSection";
import PlanetsSection from "@/components/PlanetsSection";
import GalaxySection from "@/components/GalaxySection";
import UniverseSection from "@/components/UniverseSection";
import PhenomenaSection from "@/components/PhenomenaSection";
import ApodSection from "@/components/ApodSection";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#01010a] text-white">
      <StarfieldBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SolarSystemSection />
        <PlanetsSection />
        <GalaxySection />
        <UniverseSection />
        <PhenomenaSection />
        <ApodSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
