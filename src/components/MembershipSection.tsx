import { Check, ArrowRight, Shield, Users, FileCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Strong collective voice",
  "Legal and policy guidance",
  "Professional networking",
  "Training and development programs",
  "Updates on government regulations",
  "Support during institutional challenges",
];

const membershipTypes = [
  {
    title: "Individual School",
    price: "₹5,000",
    period: "per year",
    description: "For single school institutions",
    features: ["All basic benefits", "District-level representation", "Annual conference pass"],
  },
  {
    title: "Group Membership",
    price: "₹12,000",
    period: "per year",
    description: "For school chains (3-5 branches)",
    features: ["All individual benefits", "Dedicated relationship manager", "Priority legal support"],
    featured: true,
  },
  {
    title: "Institutional",
    price: "₹25,000",
    period: "per year",
    description: "For large educational groups (6+ branches)",
    features: ["All group benefits", "State-level representation", "Exclusive events access"],
  },
];

const MembershipSection = () => {
  return (
    <section id="membership" className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-semibold font-body mb-4">
            Join TRSMA
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Become a <span className="text-gold">Member</span> Today
          </h2>
          <p className="text-primary-foreground/80 text-lg font-body">
            Join thousands of schools who trust TRSMA for representation, support, and advocacy.
          </p>
        </div>

        {/* Why Join */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-primary-foreground mb-6">
              Why Join TRSMA?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-navy-dark" />
                  </div>
                  <span className="text-primary-foreground/90 font-body">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Shield className="w-10 h-10 text-gold mx-auto mb-3" />
              <h4 className="font-display font-bold text-lg text-primary-foreground">Protected</h4>
              <p className="text-primary-foreground/70 text-sm font-body mt-1">Legal coverage</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Users className="w-10 h-10 text-gold mx-auto mb-3" />
              <h4 className="font-display font-bold text-lg text-primary-foreground">Connected</h4>
              <p className="text-primary-foreground/70 text-sm font-body mt-1">Strong network</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <FileCheck className="w-10 h-10 text-gold mx-auto mb-3" />
              <h4 className="font-display font-bold text-lg text-primary-foreground">Compliant</h4>
              <p className="text-primary-foreground/70 text-sm font-body mt-1">Regulatory help</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Phone className="w-10 h-10 text-gold mx-auto mb-3" />
              <h4 className="font-display font-bold text-lg text-primary-foreground">Supported</h4>
              <p className="text-primary-foreground/70 text-sm font-body mt-1">24/7 helpline</p>
            </div>
          </div>
        </div>

        {/* Membership Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {membershipTypes.map((plan, index) => (
            <div
              key={plan.title}
              className={`rounded-xl p-6 lg:p-8 ${
                plan.featured
                  ? "bg-gold text-navy-dark transform lg:-translate-y-4"
                  : "bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground"
              }`}
            >
              {plan.featured && (
                <span className="inline-block px-3 py-1 bg-navy-dark/20 text-navy-dark text-xs font-bold rounded-full mb-4 font-body">
                  Most Popular
                </span>
              )}
              <h3 className="font-display font-bold text-xl mb-2">{plan.title}</h3>
              <p className={`text-sm font-body mb-4 ${plan.featured ? "text-navy-dark/70" : "text-primary-foreground/70"}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="font-display font-bold text-3xl">{plan.price}</span>
                <span className={`text-sm font-body ${plan.featured ? "text-navy-dark/70" : "text-primary-foreground/70"}`}>
                  {" "}{plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-body">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "default" : "heroOutline"}
                className={`w-full ${plan.featured ? "bg-navy-dark text-primary-foreground hover:bg-navy-dark/90" : ""}`}
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Membership Eligibility & Requirements */}
        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-primary-foreground mb-6 text-center">
              Membership Eligibility & Requirements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background/50 rounded-lg p-6">
                <h4 className="font-display font-bold text-lg text-primary-foreground mb-4">Who Can Join</h4>
                <ul className="space-y-2 text-sm font-body text-primary-foreground/90">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span><strong>Unaided Recognised Private Schools</strong> only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Membership starts at <strong>Mandal Level</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Schools must be actively running and recognized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>All educational levels: Pre-Primary to Senior Secondary</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background/50 rounded-lg p-6">
                <h4 className="font-display font-bold text-lg text-primary-foreground mb-4">Important Notes</h4>
                <ul className="space-y-2 text-sm font-body text-primary-foreground/90">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Membership fee: <strong>₹5,000 per year</strong> per institution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Fees must be paid yearly to maintain active membership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Members with arrears <strong>cannot vote or contest</strong> elections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>Membership provides representation at District and State levels</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-destructive/20 border border-destructive/30 rounded-lg p-4">
              <h4 className="font-display font-bold text-sm text-primary-foreground mb-2">Who Cannot Become a Member</h4>
              <ul className="space-y-1 text-sm font-body text-primary-foreground/80">
                <li>• Government or Semi-Government employees</li>
                <li>• Schools that are not running or not recognized</li>
                <li>• Persons convicted of moral turpitude</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
