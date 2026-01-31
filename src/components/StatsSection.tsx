import { useEffect, useState, useRef } from "react";
import { School, MapPin, FileCheck, GraduationCap, Users } from "lucide-react";

const stats = [
  { icon: School, value: 10000, suffix: "+", label: "Schools Represented" },
  { icon: MapPin, value: 33, suffix: "", label: "Districts Covered" },
  { icon: FileCheck, value: 100, suffix: "+", label: "Policy Representations" },
  { icon: GraduationCap, value: 500, suffix: "+", label: "Training Programs" },
  { icon: Users, value: 50000, suffix: "+", label: "Teachers Impacted" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="font-display font-bold text-4xl lg:text-5xl text-primary-foreground">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-primary-foreground/70 text-lg font-body max-w-2xl mx-auto">
            Decades of service, thousands of schools, and countless contributions to Telangana's education ecosystem
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary-foreground group-hover:text-navy-dark transition-colors" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/70 text-sm mt-2 font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
