import {
  Landmark,
  Scale,
  Shield,
  BookOpen,
  Users,
  Award,
  AlertCircle,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Government Liaison",
    description:
      "Direct representation with Education Department, Collectors, and State Government on behalf of member schools.",
  },
  {
    icon: Scale,
    title: "Fee Regulation Support",
    description:
      "Guidance on fee structure compliance, parent committee formation, and regulatory adherence.",
  },
  {
    icon: Shield,
    title: "Legal Advisory",
    description:
      "Access to legal experts for court matters, compliance disputes, and regulatory challenges.",
  },
  {
    icon: FileText,
    title: "School Compliance",
    description:
      "Support for recognition renewals, NOC processes, infrastructure audits, and documentation.",
  },
  {
    icon: BookOpen,
    title: "Teacher Training",
    description:
      "Professional development programs, workshops, and certification courses for educators.",
  },
  {
    icon: Award,
    title: "Leadership Programs",
    description:
      "Management training for principals, correspondents, and school administrators.",
  },
  {
    icon: AlertCircle,
    title: "Emergency Support",
    description:
      "Rapid response team for urgent representation in raids, inspections, or crisis situations.",
  },
  {
    icon: Users,
    title: "Networking",
    description:
      "Connect with fellow school managements, share best practices, and build community.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-semibold font-body mb-4">
            Services & Support
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            How TRSMA <span className="text-secondary">Supports</span> You
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Comprehensive support services designed to help school managements navigate
            the complex education landscape in Telangana.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl border border-border p-6 shadow-card card-hover text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
