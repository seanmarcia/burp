import { UserPlus, CreditCard, Mail, Gift, ShieldCheck, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership = () => {
  const benefits = [
    {
      icon: <Mail className="h-6 w-6 text-beer-amber" />,
      title: "BURP News",
      description: "Monthly newsletter delivered to your inbox with club news, technical articles, and meeting details."
    },
    {
      icon: <Gift className="h-6 w-6 text-beer-amber" />,
      title: "Monthly Meetings",
      description: "Access to all club meetings, featuring beer tastings, technical talks, and social networking."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-beer-amber" />,
      title: "Competition Access",
      description: "Eligibility to enter all monthly club competitions and discounted entry fees for the Spirit of Free Beer."
    },
    {
      icon: <UserPlus className="h-6 w-6 text-beer-amber" />,
      title: "Education & Mentorship",
      description: "Learn from some of the region's best brewers through workshops, sensory training, and informal mentoring."
    }
  ];

  const membershipLevels: { name: string; description: string; options: { label: string; price: string }[]; highlight?: string }[] = [
    {
      name: "Individual Membership",
      description: "Standard membership for one person.",
      options: [
        { label: "1 Year", price: "$25.00" },
        { label: "2 Years", price: "$47.50" },
        { label: "3 Years", price: "$70.50" },
        { label: "5 Years", price: "$112.50" }
      ]
    },
    {
      name: "Co-Membership",
      description: "Bundle for up to 2 members in the same household.",
      options: [
        { label: "1 Year", price: "$30.00" },
        { label: "2 Years", price: "$57.00" },
        { label: "3 Years", price: "$84.50" },
        { label: "5 Years", price: "$135.00" }
      ]
    }
  ];

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl mb-6 text-beer-brown">Join BURP</h1>
          <p className="text-xl text-beer-brown/70 leading-relaxed">
            Brewers United for Real Potables (BURP) has been the premier homebrewing community in the DC area since 1981. Join us to refine your craft and share your passion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-12">
            
            {/* Benefits Section */}
            <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-beer-brown/5 border-t-4 border-t-beer-blue">
              <h2 className="text-3xl font-bold mb-8 text-beer-brown">Member Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-beer-blue/10 p-3 rounded-xl h-fit">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-beer-brown">{benefit.title}</h3>
                      <p className="text-beer-brown/70 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Membership Tiers Section */}
            <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-beer-brown/5 border-t-4 border-t-beer-amber">
              <h2 className="text-3xl font-bold mb-8 text-beer-brown">Membership Levels</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {membershipLevels.map((level, i) => (
                  <div key={i} className={`p-8 rounded-3xl border-2 flex flex-col h-full ${level.highlight ? 'border-beer-amber bg-beer-amber/5' : 'border-beer-brown/10 bg-white'}`}>
                    {level.highlight && (
                      <span className="bg-beer-amber text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mb-4">
                        {level.highlight}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-beer-brown mb-2">{level.name}</h3>
                    <p className="text-beer-brown/60 text-sm mb-8">{level.description}</p>
                    
                    <div className="space-y-3 mt-auto">
                      {level.options.map((opt, j) => (
                        <div key={j} className="flex justify-between items-center py-2 border-b border-beer-brown/5 last:border-0">
                          <span className="font-bold text-sm">{opt.label}</span>
                          <span className="text-beer-blue font-bold">{opt.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Important Info Section */}
            <section className="bg-beer-brown text-white rounded-3xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-beer-amber" />
                Renewal & Policies
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-sm text-white/80">
                <div className="space-y-4">
                  <p><strong className="text-white">Non-Recurring Payments:</strong> All memberships are non-recurring. You will need to manually renew your subscription through the portal once it expires.</p>
                  <p><strong className="text-white">Manual Renewal:</strong> You can return to this page to renew your membership at any time during the expiration month.</p>
                </div>
                <div className="space-y-4">
                  <p><strong className="text-white">Cookie Requirement:</strong> Browser cookies **must be enabled** on your device to successfully complete the sign-up or login process.</p>
                  <p><strong className="text-white">Data Privacy:</strong> BURP respects your privacy. Membership data is used exclusively for club operations and communications.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-beer-blue text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="h-6 w-6" />
                  Sign Up Today
                </h3>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  Join BURP through our secure Wild Apricot portal. Select your level and complete the registration form to get started.
                </p>
                <a 
                  href="https://burp.org/join-us" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full py-4 bg-beer-amber text-white rounded-xl font-bold hover:scale-105 transition text-center shadow-lg uppercase tracking-widest text-sm mb-4"
                >
                  Go to Registration Form
                </a>
                <p className="text-xs text-center text-white/40 italic">
                  Payments are processed securely via PayPal or Credit Card.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-beer-brown/5 shadow-sm">
              <h3 className="font-bold text-beer-brown mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-beer-red" />
                Honorary Members
              </h3>
              <p className="text-beer-brown/70 text-sm leading-relaxed mb-6">
                Lifetime Honorary memberships are awarded by the Board of Ministers for exceptional service to the club and the homebrewing community.
              </p>
              <Link to="/about/bylaws" className="text-beer-blue font-bold text-sm hover:underline block w-fit">
                View Club Bylaws →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
