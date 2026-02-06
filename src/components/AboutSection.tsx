import { Target, Eye, History, Award, Users, Shield, BookOpen, Heart, Lightbulb, CheckCircle2, Building2, Vote, FileText, Scale, Users2, Calendar } from "lucide-react";

const aboutCards = [
  {
    icon: History,
    title: "Our History",
    description:
      "Registered under the Andhra Pradesh Societies Act in the year 2003, Regd. No. 2054/2003, TRSMA emerged as a unified platform representing recognized private school managements across Telangana.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To safeguard the rights and interests of recognized school managements, promote quality education aligned with national and global standards, and support schools in adopting modern teaching methodologies and technologies.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To build a strong, ethical, and future-ready education system where schools are empowered, educators are respected, and students receive world-class learning opportunities rooted in values.",
  },
  {
    icon: Award,
    title: "Our Values",
    description:
      "Integrity, Transparency, Unity, Innovation, and Commitment to student welfare guide everything we do at TRSMA.",
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
            Telangana Recognized School Managements Association (TRSMA) is a unified platform representing recognized private school managements across Telangana. We serve as a bridge between school managements and government authorities, advocating for fair policies, regulatory clarity, and a progressive educational environment.
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

        {/* Mission Details */}
        <div className="mt-16 bg-gradient-to-br from-primary to-navy-dark rounded-2xl p-8 lg:p-12 text-primary-foreground">
          <div className="max-w-4xl">
            <h3 className="font-display font-bold text-2xl lg:text-3xl mb-6">
              Our Mission
            </h3>
            <ul className="space-y-3 font-body text-primary-foreground/90 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>To safeguard the rights and interests of recognized school managements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>To promote quality education aligned with national and global standards</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>To support schools in adopting modern teaching methodologies and technologies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>To provide guidance on educational policies, regulations, and compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>To foster collaboration among school leaders for collective growth</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>To safeguard the interests of teachers working in unaided private schools</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>To work for promoting safe learning environment in schools and safeguard the child rights</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Objectives */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border p-8 shadow-card">
            <h3 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              Our Objectives
            </h3>
            <ul className="space-y-3 font-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Represent private schools before government and educational authorities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Ensure transparent and practical implementation of educational policies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Organize training programs, workshops, and leadership meets to teachers & managements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Promote digital learning, AI, robotics, and 21st-century skills</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Address challenges faced by school managements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Encourage ethical practices and value-based education</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-xl border border-border p-8 shadow-card">
            <h3 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              Who We Represent
            </h3>
            <ul className="space-y-3 font-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Recognized Private Schools</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>School Correspondents & Management Committees</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Educational Institutions from Pre-Primary to Senior Secondary levels</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Teachers working in private schools</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Students pursuing in unaided private schools</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Activities */}
        <div className="mt-12 bg-gradient-to-br from-secondary to-green-telangana rounded-2xl p-8 lg:p-12 text-primary-foreground">
          <div className="max-w-4xl">
            <h3 className="font-display font-bold text-2xl lg:text-3xl mb-6">
              Our Key Activities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">Policy Advocacy</h4>
                  <p className="text-primary-foreground/80 font-body text-sm">
                    Engaging with government departments on education policies, fee regulations, RTE matters, and compliance frameworks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">Training & Capacity Building</h4>
                  <p className="text-primary-foreground/80 font-body text-sm">
                    Workshops for principals, teachers, and administrators on NEP, AI in education, digital classrooms, and leadership.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">Legal & Regulatory Support</h4>
                  <p className="text-primary-foreground/80 font-body text-sm">
                    Guidance on educational acts, government orders, documentation, and institutional compliance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">Educational Conferences</h4>
                  <p className="text-primary-foreground/80 font-body text-sm">
                    State-level & National level conventions, seminars, conferences, Expos and interaction forums with education experts and policymakers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <Lightbulb className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">Technology in Education</h4>
                  <p className="text-primary-foreground/80 font-body text-sm">
                    Encouraging schools to adopt AI, robotics, coding, IoT, and smart learning systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organizational Structure */}
        <div className="mt-12 bg-card rounded-xl border border-border p-8 lg:p-12 shadow-card">
          <div className="max-w-4xl">
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-6 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-primary" />
              Organizational Structure
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-display font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  General Body (SGC)
                </h4>
                <p className="text-muted-foreground font-body text-sm mb-3">
                  The supreme authority of TRSMA, comprising all registered members. Meets at least once a year to approve budgets, elections, audits, and major policy decisions.
                </p>
                <ul className="space-y-2 text-sm font-body text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Approves annual budgets and financial reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Elects State Executive Committee members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Reviews and amends bye-laws</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-display font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  State Executive Committee (SEC)
                </h4>
                <p className="text-muted-foreground font-body text-sm mb-3">
                  The executive body managing day-to-day operations. Comprises President, Vice President, General Secretary, Joint Secretary, Treasurer, and Executive Members.
                </p>
                <ul className="space-y-2 text-sm font-body text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Full administrative control and decision-making</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Manages bank accounts and financial operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Appoints committees and handles legal matters</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-primary/5 rounded-lg p-6">
              <h4 className="font-display font-bold text-lg text-foreground mb-3">Current Membership Statistics</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-primary mb-1">34</div>
                  <div className="text-sm text-muted-foreground font-body">Districts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-primary mb-1">4,368</div>
                  <div className="text-sm text-muted-foreground font-body">Total Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-primary mb-1">2</div>
                  <div className="text-sm text-muted-foreground font-body">Year Tenure</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-primary mb-1">2003</div>
                  <div className="text-sm text-muted-foreground font-body">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Election Procedures */}
        <div className="mt-12 bg-gradient-to-br from-primary to-navy-dark rounded-2xl p-8 lg:p-12 text-primary-foreground">
          <div className="max-w-4xl">
            <h3 className="font-display font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-3">
              <Vote className="w-8 h-8 text-gold" />
              Election Procedures
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-display font-bold text-lg mb-3 text-gold">Election Commission</h4>
                <p className="text-primary-foreground/80 font-body text-sm mb-3">
                  TRSMA Election Commission is a statutory body constituted as per TRSMA Bye-Laws. Once election notification is issued, the entire TRSMA body dissolves and all powers vest with the Election Commission.
                </p>
                <ul className="space-y-2 text-sm font-body text-primary-foreground/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Can conduct Mandal, District & State elections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Issues election notifications and fixes dates, time, place, and procedure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>Appoints Returning Officers for fair and transparent elections</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-3 text-gold">Election Process</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 rounded-lg p-4">
                    <h5 className="font-display font-semibold mb-2">Direct Elections</h5>
                    <p className="text-sm text-primary-foreground/80 font-body">
                      President, General Secretary, and Treasurer are elected directly by the General Body.
                    </p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-4">
                    <h5 className="font-display font-semibold mb-2">Cluster System</h5>
                    <p className="text-sm text-primary-foreground/80 font-body">
                      Executive positions rotate among three clusters: Cluster A (Warangal, Nalgonda, Khammam), Cluster B (Karimnagar, Medak, Nizamabad, Adilabad), and Cluster C (Hyderabad, Rangareddy, Mahabubnagar).
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-3 text-gold">Election Steps</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Election Notification",
                    "Nomination Filing",
                    "Scrutiny",
                    "Withdrawal",
                    "Polling",
                    "Counting",
                    "Declaration",
                    "Oath Taking",
                    "Handover",
                    "Registrar Submission"
                  ].map((step, index) => (
                    <div key={index} className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                      <div className="text-gold font-bold text-sm mb-1">{index + 1}</div>
                      <div className="text-xs text-primary-foreground/90 font-body">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Details */}
        <div className="mt-12 bg-card rounded-xl border border-border p-8 lg:p-12 shadow-card">
          <div className="max-w-4xl">
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-6 flex items-center gap-3">
              <Users2 className="w-8 h-8 text-primary" />
              Membership Details
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-display font-bold text-lg text-foreground mb-4">Eligibility</h4>
                <ul className="space-y-3 font-body text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Only <strong>Unaided Recognised Private Schools</strong> can become members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Membership starts at <strong>Mandal Level</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Schools must be actively running and recognized</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-foreground mb-4">Membership Fees</h4>
                <div className="bg-muted rounded-lg p-4 mb-4">
                  <div className="text-2xl font-display font-bold text-primary mb-1">₹5,000</div>
                  <div className="text-sm text-muted-foreground font-body">Per year per institution (District → State)</div>
                </div>
                <ul className="space-y-2 text-sm font-body text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fees must be paid yearly to maintain active membership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Members with arrears cannot vote or contest elections</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <h4 className="font-display font-bold text-sm text-foreground mb-2">Who Cannot Become a Member</h4>
              <ul className="space-y-1 text-sm font-body text-muted-foreground">
                <li>• Government or Semi-Government employees</li>
                <li>• Schools that are not running</li>
                <li>• Persons convicted of moral turpitude</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Committees */}
        <div className="mt-12 bg-gradient-to-br from-secondary to-green-telangana rounded-2xl p-8 lg:p-12 text-primary-foreground">
          <div className="max-w-4xl">
            <h3 className="font-display font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-gold" />
              Committees
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-display font-bold text-lg mb-3 text-gold">Standing Committees (16)</h4>
                <div className="grid grid-cols-2 gap-2 text-sm font-body text-primary-foreground/90">
                  {[
                    "Membership",
                    "Legal",
                    "Finance",
                    "Ethics",
                    "Welfare",
                    "Media",
                    "IT & EdTech",
                    "Research",
                    "Sports & Culture",
                    "Quality Initiatives"
                  ].map((committee, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{committee}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-3 text-gold">Select Committees</h4>
                <ul className="space-y-2 text-sm font-body text-primary-foreground/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>Fact-Finding Committee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>Disaster Management Committee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>Fund Raising Committee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>Building Committee</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <h4 className="font-display font-bold text-lg mb-2 text-gold">Disciplinary Actions</h4>
              <p className="text-sm text-primary-foreground/80 font-body mb-2">
                Members can be suspended or expelled for actions against the aims of the association. A 15-day notice is mandatory, and ⅔ Executive Committee approval is required. Appeals can be made to the General Body, requiring ¾ majority to overturn.
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Registration */}
        <div className="mt-12 bg-card rounded-xl border border-border p-8 lg:p-12 shadow-card">
          <div className="max-w-4xl">
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-primary" />
              Legal Status & Registration
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-display font-bold text-lg text-foreground mb-3">Registration Details</h4>
                <ul className="space-y-2 text-sm font-body text-muted-foreground">
                  <li><strong>Act:</strong> Andhra Pradesh Societies Act</li>
                  <li><strong>Registration Year:</strong> 2003</li>
                  <li><strong>Registration Number:</strong> 2054/2003</li>
                  <li><strong>Status:</strong> Legally Registered Statutory Association</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-display font-bold text-lg text-foreground mb-3">Governance</h4>
                <ul className="space-y-2 text-sm font-body text-muted-foreground">
                  <li><strong>Bye-Laws:</strong> Updated and Registrar-approved</li>
                  <li><strong>Elections:</strong> Rule-based, transparent, and documented</li>
                  <li><strong>Compliance:</strong> Complete legal compliance maintained</li>
                  <li><strong>Documentation:</strong> All records maintained as per Registration Act 1908</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Message */}
        <div className="mt-12 bg-card rounded-xl border border-border p-8 lg:p-12 shadow-card">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4">
              Message from TRSMA Leadership
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              TRSMA stands for collaboration, not confrontation. Our goal is to work alongside Government authorities, educators, and society to ensure that unaided private schools remain centers of excellence, safety, and character building. Together, we can shape a brighter educational future for Telangana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
