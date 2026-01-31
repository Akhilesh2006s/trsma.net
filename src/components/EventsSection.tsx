import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Annual General Meeting 2025",
    date: "February 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "HICC, Hyderabad",
    type: "Conference",
    featured: true,
  },
  {
    title: "Teacher Training Workshop - Digital Pedagogy",
    date: "February 22, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual Event",
    type: "Workshop",
    featured: false,
  },
  {
    title: "District-Level Meeting - Rangareddy",
    date: "March 1, 2025",
    time: "11:00 AM - 2:00 PM",
    location: "Shamshabad",
    type: "Meeting",
    featured: false,
  },
  {
    title: "Education Leadership Summit",
    date: "March 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "JNTU Auditorium, Hyderabad",
    type: "Summit",
    featured: false,
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-semibold font-body mb-4">
            Events & Conferences
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Upcoming <span className="text-secondary">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Join us at our conferences, workshops, and meetings designed for school leaders and educators.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl border overflow-hidden shadow-card card-hover ${
                event.featured ? "border-gold lg:col-span-2" : "border-border"
              }`}
            >
              <div className={`p-6 lg:p-8 ${event.featured ? "lg:flex lg:items-center lg:gap-8" : ""}`}>
                {/* Date Badge */}
                <div className={`${event.featured ? "lg:w-48 flex-shrink-0" : ""} mb-4 lg:mb-0`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium font-body ${
                    event.featured
                      ? "bg-gold/20 text-gold"
                      : "bg-primary/10 text-primary"
                  }`}>
                    {event.type}
                  </div>
                  {event.featured && (
                    <div className="mt-4 hidden lg:block">
                      <span className="text-3xl font-display font-bold text-foreground block">
                        {event.date.split(" ")[1].replace(",", "")}
                      </span>
                      <span className="text-muted-foreground font-body">
                        {event.date.split(" ")[0]} {event.date.split(" ")[2]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`font-display font-bold text-foreground group-hover:text-primary transition-colors ${
                    event.featured ? "text-2xl lg:text-3xl" : "text-xl"
                  }`}>
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mt-4 text-muted-foreground text-sm font-body">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>

                  {event.featured && (
                    <div className="mt-6">
                      <Button variant="gold" size="lg">
                        <span>Register Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
