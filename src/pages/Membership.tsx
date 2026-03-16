import { UserPlus, CreditCard, Mail, Gift, ShieldCheck, Heart } from 'lucide-react';
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

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl mb-6 text-beer-brown">Membership</h1>
          <p className="text-xl text-beer-brown/70 leading-relaxed">
            Join the Mid-Atlantic's premier homebrewing community. Whether you're a seasoned pro or just thinking about your first batch, there's a place for you in BURP.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-beer-brown/5 border-t-4 border-t-beer-blue">
              <h2 className="text-3xl font-bold mb-8 text-beer-brown">Why Join BURP?</h2>
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

            <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-beer-brown/5 border-t-4 border-t-beer-red">
              <h2 className="text-3xl font-bold mb-8 text-beer-brown">Membership Tiers</h2>
              <div className="space-y-6">
                <div className="p-6 bg-beer-cream/20 rounded-2xl border border-beer-brown/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-beer-brown mb-1">Standard Individual Membership</h3>
                    <p className="text-beer-brown/60 text-sm">Full access to all club benefits for one person.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-beer-blue">$20</span>
                    <span className="text-beer-brown/50 text-sm font-medium"> / year</span>
                  </div>
                </div>
                
                <div className="p-6 bg-beer-blue/5 rounded-2xl border border-beer-blue/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-beer-blue text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-bl-xl">Best Value</div>
                  <div>
                    <h3 className="text-xl font-bold text-beer-brown mb-1">Family Membership</h3>
                    <p className="text-beer-brown/60 text-sm">Full access for two people residing at the same address.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-beer-blue">$30</span>
                    <span className="text-beer-brown/50 text-sm font-medium"> / year</span>
                  </div>
                </div>

                <div className="p-6 bg-beer-amber/10 rounded-2xl border border-beer-amber/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-beer-brown mb-1">Lifetime Honorary</h3>
                    <p className="text-beer-brown/60 text-sm">Awarded by the Board for exceptional service to the club.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-beer-amber uppercase tracking-widest">Honorary</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-beer-blue text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="h-6 w-6" />
                  Join Now
                </h3>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  Ready to join the BURP family? We use a secure online portal for membership registration and dues payment.
                </p>
                <a href="#" className="block w-full py-4 bg-beer-amber text-beer-brown rounded-xl font-bold hover:scale-105 transition text-center shadow-lg uppercase tracking-widest text-sm mb-4">
                  Pay with PayPal/Credit Card
                </a>
                <p className="text-xs text-center text-white/50 italic">
                  Membership runs from January to December.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-beer-brown/5 shadow-sm">
              <h3 className="font-bold text-beer-brown mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-beer-red" />
                Support the Club
              </h3>
              <p className="text-beer-brown/70 text-sm leading-relaxed mb-6">
                Not a brewer but want to support our mission? You can subscribe to our newsletter as a non-voting member.
              </p>
              <button className="text-beer-blue font-bold text-sm hover:underline">
                Subscribe to Newsletter →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
