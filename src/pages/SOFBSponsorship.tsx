import { ArrowLeft, Mail, Heart, Building2, Handshake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SOFBSponsorship = () => {
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), []);

  const currentSponsors = [
    { name: "DC Brau Brewing", city: "Washington, D.C." },
    { name: "Jay's Brewing", city: "Manassas, VA" },
    { name: "Maryland Homebrew", city: "Columbia, MD" },
    { name: "Silver Branch Brewing Co", city: "Rockville, MD" },
    { name: "The Flying Barrel", city: "Frederick, MD" },
  ];

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-beer-amber font-bold mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to SOFB Overview
        </button>

        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-beer-brown/5 text-center">
          <Heart className="h-16 w-16 text-beer-amber mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl mb-8 text-beer-brown">Support the Spirit of Free Beer</h1>
          <p className="text-xl text-beer-brown/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            As a 100% volunteer-run event, SOFB relies on the generous support of our sponsors to provide high-quality awards, logistics, and feedback for homebrewers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-left">
            <div className="p-8 bg-beer-brown/5 border border-beer-brown/10 rounded-3xl">
              <Building2 className="h-10 w-10 text-beer-amber mb-6" />
              <h3 className="text-2xl font-bold mb-4">Current Partners</h3>
              <ul className="space-y-4">
                {currentSponsors.map((sponsor, i) => (
                  <li key={i} className="flex justify-between items-center py-2 border-b border-beer-brown/5 last:border-0">
                    <span className="font-bold">{sponsor.name}</span>
                    <span className="text-xs text-beer-brown/40">{sponsor.city}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-beer-brown/5 border border-beer-brown/10 rounded-3xl flex flex-col justify-center text-center">
              <Handshake className="h-10 w-10 text-beer-amber mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
              <p className="text-beer-brown/70 mb-8 text-sm leading-relaxed">
                Connect with the vibrant Mid-Atlantic homebrewing community and support the longest-running competition in the region.
              </p>
              <button className="w-full py-4 bg-beer-brown text-beer-cream rounded-xl font-bold hover:scale-105 transition flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Organizer
              </button>
            </div>
          </div>

          <div className="bg-beer-amber/10 p-10 rounded-3xl border-2 border-beer-amber/20">
            <h2 className="text-2xl font-bold mb-4">Sponsorship Benefits</h2>
            <p className="text-beer-brown/70 mb-8 max-w-xl mx-auto">
              Sponsors receive exposure across our website, newsletter, and on-site at the judging event and April awards meeting.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Logo on Website', 'Newsletter Feature', 'Awards Presentation Shoutout', 'Program Mention'].map((benefit, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-full text-xs font-bold text-beer-brown shadow-sm border border-beer-brown/5">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOFBSponsorship;
