import { FileText, Bell, Newspaper, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const updates = [
  {
    type: "Government Order",
    icon: FileText,
    title: "G.O. on Fee Structure Guidelines 2024-25",
    date: "January 28, 2025",
    description: "New guidelines issued by Education Department regarding fee structure and parent committee formation.",
    badge: "New",
    badgeColor: "bg-destructive",
  },
  {
    type: "TRSMA Notice",
    icon: Bell,
    title: "Annual General Meeting - February 2025",
    date: "January 25, 2025",
    description: "All members are invited to attend the Annual General Meeting scheduled for February 15, 2025 at Hyderabad.",
    badge: "Important",
    badgeColor: "bg-gold",
  },
  {
    type: "Circular",
    icon: FileText,
    title: "Recognition Renewal Process Update",
    date: "January 20, 2025",
    description: "Updated procedure for school recognition renewal with simplified documentation requirements.",
    badge: null,
    badgeColor: null,
  },
  {
    type: "Press Release",
    icon: Newspaper,
    title: "TRSMA Meets Education Minister",
    date: "January 18, 2025",
    description: "Delegation led by TRSMA President met with Hon'ble Education Minister to discuss budget school concerns.",
    badge: null,
    badgeColor: null,
  },
];

const UpdatesSection = () => {
  return (
    <section id="updates" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - Header */}
          <div className="lg:w-1/3">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold font-body mb-4">
              Stay Informed
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">
              Latest Updates & <span className="text-gradient">Circulars</span>
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Stay updated with the latest government orders, education department circulars,
              TRSMA notices, and important announcements.
            </p>
            <Button variant="outline" size="lg">
              <span>View All Updates</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Side - Updates List */}
          <div className="lg:w-2/3 space-y-4">
            {updates.map((update, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl border border-border p-6 shadow-card card-hover cursor-pointer"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <update.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <span className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                          {update.type}
                        </span>
                        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {update.title}
                        </h3>
                      </div>
                      {update.badge && (
                        <span className={`${update.badgeColor} text-primary-foreground text-xs font-semibold px-2 py-1 rounded font-body`}>
                          {update.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm font-body line-clamp-2 mb-2">
                      {update.description}
                    </p>
                    <span className="text-xs text-muted-foreground font-body">{update.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
