import { Beer, History, Shield, Users, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import meetingPhoto from '../assets/meeting-czech-talk.jpg';

const About = () => {
  const currentOfficers = [
    { title: "Fearless Leaders", name: "Dan Rozman & Greg Leifer" },
    { title: "Minister of Enlightenment", name: "Wendy Aaronson" },
    { title: "Ministers of Culture", name: "Mike Reinitz & Keir Soderberg" },
    { title: "Minister of Prosperity", name: "Calleen White" },
    { title: "Minister of Membership", name: "Rich Sizemore" },
    { title: "Minister of Propaganda", name: "Janine Dade" },
    { title: "Newsletter Editor", name: "Emily Michelsen" },
  ];

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl mb-6 text-beer-brown">Brewers United for Real Potables</h1>
          <p className="text-2xl text-beer-brown/60 italic">Established 1981 • Washington, D.C.</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-beer-amber/20 p-3 rounded-2xl text-beer-amber">
                  <History className="h-8 w-8" />
                </div>
                <h2 className="text-3xl">Our Story</h2>
              </div>
              <p className="text-lg text-beer-brown/70 leading-relaxed mb-6">
                Founded in 1981 by a group of enthusiasts in the Maryland, Virginia, and D.C. area, BURP is one of the oldest and most respected homebrewing organizations in the United States.
              </p>
              <p className="text-lg text-beer-brown/70 leading-relaxed">
                What started as a small gathering of beer lovers has grown into a vibrant community of over 300 members, ranging from those brewing their very first batch to professional brewmasters and BJCP judges.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-beer-amber/20 p-3 rounded-2xl text-beer-amber">
                  <Shield className="h-8 w-8" />
                </div>
                <h2 className="text-3xl">Our Mission</h2>
              </div>
              <p className="text-lg text-beer-brown/70 leading-relaxed italic">
                "To promote the art and science of homebrewing, foster social camaraderie, and provide a forum for the appreciation of real potables."
              </p>
            </section>

            <section className="bg-beer-brown text-beer-cream p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl text-beer-amber mb-6">Membership Benefits</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Monthly Meeting Access',
                  'Exclusive Forum Access',
                  'Competition Entry',
                  'Sensory Training',
                  'Monthly Newsletter',
                  'Discounts at Local Shops',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-beer-cream/80">
                    <Beer className="h-4 w-4 text-beer-amber" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-beer-brown">
              <img 
                src={meetingPhoto} 
                alt="BURP Legacy Meeting" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-beer-brown/80 to-transparent flex items-end p-6">
                <p className="text-beer-cream text-lg font-bold italic">Members sharing techniques since 1981</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-beer-brown/5 shadow-sm">
              <h3 className="text-2xl mb-6 flex items-center gap-3 text-beer-brown">
                <Landmark className="text-beer-amber h-6 w-6" />
                Club Governance
              </h3>
              <p className="text-beer-brown/70 mb-8 leading-relaxed text-sm">
                BURP is a non-profit organization governed by a set of formal bylaws and a board of dedicated volunteer officers.
              </p>
              <div className="space-y-4">
                {currentOfficers.map((officer, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-beer-brown/5 last:border-0">
                    <span className="font-bold text-sm text-beer-brown/80 uppercase tracking-wider">{officer.title}</span>
                    <span className="text-beer-brown/60 text-sm">{officer.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-beer-brown/10 flex flex-col gap-4">
                <Link to="/about/previous-officers" className="flex items-center justify-center gap-2 w-full py-3 bg-beer-amber text-beer-brown rounded-xl font-bold text-sm hover:scale-[1.02] transition shadow-md">
                  <History className="h-4 w-4" />
                  View Historical Officers
                </Link>
                <Link to="/about/bylaws" className="flex items-center justify-center gap-2 w-full py-3 bg-beer-cream/50 text-beer-brown rounded-xl font-bold text-sm hover:bg-beer-brown hover:text-white transition">
                  Read the BURP Bylaws
                </Link>
                <Link to="/about/officer-duties" className="flex items-center justify-center gap-2 w-full py-3 border-2 border-beer-brown/10 text-beer-brown rounded-xl font-bold text-sm hover:border-beer-brown transition">
                  View Officer Duties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
