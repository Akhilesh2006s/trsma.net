import { ArrowRight, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/Bg.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center 15%'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-body font-medium">
              Apex Body for Recognised Schools in Telangana
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
            United Voice of{" "}
            <span className="text-gold">Recognised Schools</span>{" "}
            in Telangana
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-body animate-fade-in-up animation-delay-400">
            Empowering School Managements. Protecting Education. Building the Future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Button variant="hero" size="xl">
              <span>Become a Member</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <FileText className="w-5 h-5" />
              <span>Latest Circulars</span>
            </Button>
            <Button variant="heroOutline" size="xl">
              <Phone className="w-5 h-5" />
              <span>Contact TRSMA</span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 text-sm mb-4 font-body">Trusted by schools across Telangana</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/40">
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary-foreground">33</span>
                <span className="text-xs">Districts</span>
              </div>
              <div className="w-px h-8 bg-primary-foreground/20" />
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary-foreground">10,000+</span>
                <span className="text-xs">Schools</span>
              </div>
              <div className="w-px h-8 bg-primary-foreground/20" />
              <div className="text-center">
                <span className="block text-2xl font-bold text-primary-foreground">Since</span>
                <span className="text-xs">2003</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
