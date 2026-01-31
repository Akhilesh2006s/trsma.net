import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import UpdatesSection from "@/components/UpdatesSection";
import EventsSection from "@/components/EventsSection";
import LeadershipSection from "@/components/LeadershipSection";
import MembershipSection from "@/components/MembershipSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <UpdatesSection />
        <EventsSection />
        <LeadershipSection />
        <MembershipSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
