import { Target, Eye, History, Award } from "lucide-react";

const aboutCards = [
  {
    icon: History,
    title: "Our History",
    description:
      "Established in 1996, TRSMA emerged as a collective voice for private unaided schools in Telangana. Over decades, we have represented thousands of schools in policy dialogues, legal matters, and regulatory frameworks.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To protect the interests of recognised schools, ensure quality education, facilitate compliance with government regulations, and create a supportive ecosystem for school managements across Telangana.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted and effective apex body representing private schools, driving educational excellence, policy reforms, and sustainable growth in Telangana's education sector.",
  },
  {
    icon: Award,
    title: "Our Impact",
    description:
      "TRSMA has been instrumental in shaping education policies, resolving regulatory challenges, and ensuring fair treatment of schools in fee regulation, infrastructure norms, and teacher welfare.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold font-body mb-4">
            About TRSMA
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Building Stronger{" "}
            <span className="text-gradient">Educational Foundations</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            TRSMA is the apex body representing thousands of private unaided and budget schools
            across all 33 districts of Telangana, serving as a bridge between school managements
            and the government.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              className="group relative bg-card rounded-xl border border-border p-8 shadow-card card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <card.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {card.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rotate-45" />
              </div>
            </div>
          ))}
        </div>

        {/* Why TRSMA */}
        <div className="mt-16 bg-gradient-to-br from-primary to-navy-dark rounded-2xl p-8 lg:p-12 text-primary-foreground">
          <div className="max-w-3xl">
            <h3 className="font-display font-bold text-2xl lg:text-3xl mb-4">
              Why TRSMA Was Formed
            </h3>
            <p className="text-primary-foreground/80 font-body leading-relaxed mb-6">
              The formation of TRSMA was driven by the need for a unified platform where school
              managements could collectively address challenges in education policy, fee
              regulations, infrastructure requirements, and legal compliance. Individual schools
              often lack the resources and influence to navigate complex regulatory landscapes.
            </p>
            <p className="text-primary-foreground/80 font-body leading-relaxed">
              TRSMA provides that collective strength, representing member schools in government
              discussions, court proceedings, and policy formulations. We ensure that the voice
              of private education reaches the corridors of power effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
