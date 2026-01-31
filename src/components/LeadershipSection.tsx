import { User } from "lucide-react";

const leaders = [
  {
    name: "Sri. Ramesh Kumar",
    position: "President",
    description: "Leading TRSMA with vision and dedication for over a decade",
    featured: true,
  },
  {
    name: "Sri. Venkat Reddy",
    position: "General Secretary",
    description: "Managing day-to-day operations and member relations",
    featured: true,
  },
  {
    name: "Sri. Suresh Babu",
    position: "Treasurer",
    description: "Overseeing financial management and accountability",
    featured: true,
  },
];

const executiveMembers = [
  "Sri. Narasimha Rao - Vice President",
  "Smt. Lakshmi Devi - Joint Secretary",
  "Sri. Rajendra Prasad - Executive Member",
  "Sri. Mahesh Kumar - Executive Member",
  "Smt. Padmavathi - Executive Member",
  "Sri. Srinivas Reddy - Executive Member",
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold font-body mb-4">
            Our Team
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Meet Our <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Dedicated leaders committed to advancing the interests of schools across Telangana.
          </p>
        </div>

        {/* Featured Leaders */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className="group text-center bg-card rounded-xl border border-border p-8 shadow-card card-hover"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <User className="w-12 h-12 text-primary-foreground" />
              </div>

              {/* Info */}
              <h3 className="font-display font-bold text-xl text-foreground mb-1">
                {leader.name}
              </h3>
              <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-sm font-semibold rounded-full font-body mb-3">
                {leader.position}
              </span>
              <p className="text-muted-foreground text-sm font-body">
                {leader.description}
              </p>
            </div>
          ))}
        </div>

        {/* Executive Committee */}
        <div className="bg-muted rounded-xl p-8 lg:p-10">
          <h3 className="font-display font-bold text-2xl text-foreground mb-6 text-center">
            Executive Committee
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {executiveMembers.map((member, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-background rounded-lg p-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-body text-sm">{member}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
