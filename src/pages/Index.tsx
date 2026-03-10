import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FarmCertifications from "@/components/FarmCertifications";
import GrassFedDifference from "@/components/GrassFedDifference";
import ProductRange from "@/components/ProductRange";
import PurityMetrics from "@/components/PurityMetrics";
import EthicalFarming from "@/components/EthicalFarming";
import ModernDairyTech from "@/components/ModernDairyTech";
import PastureImage from "@/components/PastureImage";
import LitersCounter from "@/components/LitersCounter";
import BlogSection from "@/components/BlogSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import ReviewsSection from "@/components/ReviewsSection";
import FooterCTA from "@/components/FooterCTA";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <FarmCertifications />
      <GrassFedDifference />
      <ProductRange />
      <PurityMetrics />
      <EthicalFarming />
      <ModernDairyTech />
      <PastureImage />
      <LitersCounter />
      <BlogSection />
      <SubscriptionSection />
      <ReviewsSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
