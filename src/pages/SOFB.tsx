import { Award, Calendar, MapPin, CheckCircle, Info, Trophy, Users, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';

const SOFB = () => {
  const bjcpCategories = [
    { code: '12C', name: 'English IPA' },
    { code: '21A', name: 'American IPA' },
    { code: '21B', name: 'Specialty IPA' },
    { code: '22A', name: 'Double IPA' },
    { code: '3', name: 'Czech Lagers' },
    { code: '4-10', name: 'German Beer Styles' },
    { code: '9C', name: 'Baltic Porter' },
    { code: '13C', name: 'English Porter' },
    { code: '20A', name: 'American Porter' },
  ];

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative bg-beer-blue text-white rounded-3xl p-8 md:p-20 overflow-hidden shadow-2xl mb-16">
          <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
            <Trophy className="h-96 w-96" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-beer-amber text-beer-brown rounded-full text-sm font-bold mb-8">
              <Award className="h-4 w-4" />
              32nd Annual Competition
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 text-white leading-tight">
              Spirit of Free Beer <span className="text-beer-amber">2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
              The Mid-Atlantic's premier homebrewing competition. Celebrating 45 years of fermentation expertise, hosted by BURP since 1981.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://brewingcompetitions.com/sofb/" target="_blank" rel="noopener noreferrer" className="bg-beer-amber text-beer-brown text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-opacity-90 transition transform hover:-translate-y-1 text-center">
                Register Your Entries
              </a>
              <Link to="/sofb/registration" className="bg-transparent border-2 border-beer-amber text-beer-amber text-lg font-bold px-8 py-4 rounded-xl hover:bg-beer-amber hover:text-beer-brown transition transform hover:-translate-y-1 text-center">
                Volunteer to Judge
              </Link>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white rounded-3xl p-10 border border-beer-brown/5 shadow-sm">
              <h2 className="text-3xl mb-8 flex items-center gap-3">
                <Calendar className="text-beer-amber h-8 w-8" />
                Key Dates & Locations
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start p-6 bg-beer-cream/30 rounded-2xl border-l-4 border-l-beer-red">
                  <div className="bg-beer-red text-white px-4 py-2 rounded-xl text-center min-w-[100px] shadow-sm">
                    <span className="block text-sm uppercase font-bold">April</span>
                    <span className="block text-3xl font-bold">12</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Main Competition Judging</h3>
                    <p className="text-beer-brown/70 flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-beer-red" /> Silver Branch Rockville Beerworks
                    </p>
                    <p className="text-beer-brown/70 text-sm">Official BJCP evaluation sessions (Morning, Afternoon, and BOS).</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start p-6 bg-beer-cream/30 rounded-2xl border-2 border-beer-amber/20 border-l-4 border-l-beer-blue">
                  <div className="bg-beer-blue text-white px-4 py-2 rounded-xl text-center min-w-[100px] shadow-sm">
                    <span className="block text-sm uppercase font-bold">April</span>
                    <span className="block text-3xl font-bold">19</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">SOFB "Afters" Meeting</h3>
                    <p className="text-beer-brown/70 flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-beer-blue" /> Rockville, MD
                    </p>
                    <p className="text-beer-brown/70 text-sm">Awards ceremony and social gathering. Sample the leftovers and celebrate the winners.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-3xl p-10 border border-beer-brown/5 shadow-sm">
              <h2 className="text-3xl mb-8 flex items-center gap-3">
                <Beaker className="text-beer-red h-8 w-8" />
                Featured Categories
              </h2>
              <p className="text-lg text-beer-brown/70 mb-8 leading-relaxed">
                SOFB accepts entries across all current BJCP style categories. This year, we are placing special emphasis on the following styles:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {bjcpCategories.map((cat, i) => (
                  <div key={i} className="px-4 py-3 bg-beer-blue/5 border border-beer-blue/10 rounded-xl flex items-center gap-3">
                    <span className="bg-beer-blue text-white text-xs font-bold px-2 py-1 rounded">
                      {cat.code}
                    </span>
                    <span className="text-sm font-bold text-beer-brown/80">{cat.name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-beer-brown/50 italic">
                * All entries must include two 10-12oz bottles or cans and comply with standard BJCP registration requirements.
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-beer-brown text-beer-cream rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl text-beer-amber mb-6 font-bold uppercase tracking-tight">Competition Rules</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Entry fee: $10 per entry.',
                    'Two 10-12oz bottles or cans per entry.',
                    'No labels or brewery logos on bottles/cans.',
                    'Attach labels with rubber bands only.',
                    'Shipping window: Feb 1 - April 3.',
                  ].map((rule, i) => (
                    <li key={i} className="flex gap-3 text-beer-cream/80 text-sm font-medium">
                      <CheckCircle className="h-5 w-5 text-beer-amber shrink-0" />
                      {rule}
                    </li>
                  ))}
                </ul>
                <Link to="/sofb/rules" className="block w-full py-4 bg-beer-amber text-beer-brown rounded-xl font-bold hover:bg-opacity-90 transition text-center shadow-lg">
                  Full Competition Rules
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-beer-brown/5 shadow-sm">
              <div className="flex items-center gap-2 text-beer-amber mb-4">
                <Award className="h-5 w-5" />
                <h3 className="font-bold uppercase tracking-widest text-xs text-beer-brown/40">Sponsorship</h3>
              </div>
              <p className="text-beer-brown/70 text-sm leading-relaxed mb-6">
                Support the Mid-Atlantic's longest-running competition! We offer exposure to hundreds of local brewers and enthusiasts.
              </p>
              <Link to="/sofb/sponsorship" className="text-beer-amber font-bold text-sm hover:underline">
                View Sponsorship Info →
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-beer-brown/5 shadow-sm">
              <div className="flex items-center gap-2 text-beer-amber mb-4">
                <Users className="h-5 w-5" />
                <h3 className="font-bold uppercase tracking-widest text-xs text-beer-brown/40">Judge Portal</h3>
              </div>
              <p className="text-beer-brown/70 text-sm leading-relaxed mb-6">
                Certified BJCP judge or interested in stewarding? Register through our portal to join the 2026 judging staff.
              </p>
              <Link to="/sofb/registration" className="text-beer-amber font-bold text-sm hover:underline">
                Register as a Volunteer →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOFB;
