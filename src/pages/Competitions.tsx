import { Award, CheckCircle, Info, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import sofbLogo from '../assets/sofb-logo.jpg';

const Competitions = () => {
  const competitionSchedule = [
    { month: 'May', style: 'Best Beer with Chili', format: 'Popular Vote' },
    { month: 'June', style: 'IPAs (BJCP 12C, 21, 22A)', format: 'BJCP Judged' },
    { month: 'July', style: 'Czech Lagers (BJCP Category 3)', format: 'Popular Vote' },
    { month: 'September', style: 'German Beer (BJCP 4-10)', format: 'BJCP Judged' },
    { month: 'October', style: 'Porters (BJCP 9C, 13C, 20A, 27G, 32A)', format: 'Popular Vote' },
  ];

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl mb-4 text-beer-brown">Competitions</h1>
          <p className="text-xl text-beer-brown/70 max-w-2xl leading-relaxed">
            From casual popular vote tastings to formal BJCP-sanctioned events, BURP offers competitive opportunities for every brewer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-3xl p-6 md:p-10 border border-beer-brown/5 shadow-sm border-t-4 border-t-beer-blue">
              <h2 className="text-2xl md:text-3xl mb-8 flex items-center gap-3">
                <Trophy className="text-beer-blue h-8 w-8" />
                2026 Competition Schedule
              </h2>
              <div className="overflow-x-auto rounded-xl border border-beer-brown/10">
                <table className="w-full text-left min-w-[500px]">
                  <thead className="bg-beer-blue text-white uppercase text-[10px] md:text-xs font-bold tracking-widest">
                    <tr>
                      <th className="px-4 md:px-6 py-4">Month</th>
                      <th className="px-4 md:px-6 py-4">Style / Category</th>
                      <th className="px-4 md:px-6 py-4">Format</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-beer-brown/10">
                    {competitionSchedule.map((comp, index) => (
                      <tr key={index} className="hover:bg-beer-blue/5 transition-colors">
                        <td className="px-4 md:px-6 py-4 font-bold text-sm md:text-base">{comp.month}</td>
                        <td className="px-4 md:px-6 py-4 text-beer-brown/80 text-sm md:text-base">{comp.style}</td>
                        <td className="px-4 md:px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold whitespace-nowrap shadow-sm ${
                            comp.format === 'BJCP Judged' ? 'bg-beer-red text-white' : 'bg-beer-amber text-beer-brown'
                          }`}>
                            {comp.format}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-white rounded-3xl p-10 border border-beer-brown/5 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <img src={sofbLogo} alt="SOFB Logo" className="w-32 h-auto rounded-lg shadow-md border border-beer-brown/10" />
                <div>
                  <h2 className="text-3xl mb-4 flex items-center gap-3">
                    <Award className="text-beer-amber h-8 w-8" />
                    Spirit of Free Beer (SOFB)
                  </h2>
                  <p className="text-lg text-beer-brown/70 leading-relaxed mb-6">
                    Our flagship annual competition is a cornerstone of the regional homebrewing scene. Attracting hundreds of entries, SOFB is a full BJCP-sanctioned competition.
                  </p>
                  <Link to="/sofb" className="text-beer-amber font-bold hover:underline inline-flex items-center gap-2">
                    View Competition Details →
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-beer-cream/30 p-6 rounded-2xl flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-beer-amber shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">BJCP Sanctioned</h4>
                    <p className="text-sm text-beer-brown/60">Fully compliant with Beer Judge Certification Program standards.</p>
                  </div>
                </div>
                <div className="bg-beer-cream/30 p-6 rounded-2xl flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-beer-amber shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Expert Feedback</h4>
                    <p className="text-sm text-beer-brown/60">Receive detailed score sheets from certified judges to improve your craft.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-beer-brown text-beer-cream rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl text-beer-amber mb-6 font-bold uppercase tracking-tight">How to Enter</h3>
                <ul className="space-y-4 text-beer-cream/80 mb-8 font-medium">
                  <li className="flex gap-3">
                    <span className="h-6 w-6 rounded-full bg-beer-amber text-beer-brown flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">1</span>
                    Check the monthly style requirement.
                  </li>
                  <li className="flex gap-3">
                    <span className="h-6 w-6 rounded-full bg-beer-amber text-beer-brown flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">2</span>
                    Bring two 12oz bottles (for BJCP) or a growler/keg (for Popular Vote).
                  </li>
                  <li className="flex gap-3">
                    <span className="h-6 w-6 rounded-full bg-beer-amber text-beer-brown flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">3</span>
                    Register your entry at the meeting check-in desk.
                  </li>
                </ul>
                <button className="w-full py-4 bg-beer-amber text-beer-brown rounded-xl font-bold hover:bg-opacity-90 transition shadow-lg uppercase tracking-widest text-sm">
                  Full Rulebook
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-beer-brown/5 shadow-sm">
              <div className="flex items-center gap-2 text-beer-amber mb-4">
                <Info className="h-5 w-5" />
                <h3 className="font-bold uppercase tracking-widest text-xs text-beer-brown/40">Sponsorship</h3>
              </div>
              <p className="text-beer-brown/70 text-sm leading-relaxed mb-6">
                Help support the longest-running homebrew competition in the region! We offer various sponsorship tiers for local businesses and breweries.
              </p>
              <button className="text-beer-amber font-bold text-sm hover:underline">
                Sponsor SOFB 2026 →
              </button>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-beer-brown/5 shadow-sm">
              <div className="flex items-center gap-2 text-beer-amber mb-4">
                <Info className="h-5 w-5" />
                <h3 className="font-bold uppercase tracking-widest text-xs text-beer-brown/40">Judge Program</h3>
              </div>
              <p className="text-beer-brown/70 text-sm leading-relaxed mb-6">
                Interested in becoming a BJCP judge? BURP hosts study groups and sensory training sessions to help you earn your certification.
              </p>
              <button className="text-beer-amber font-bold text-sm hover:underline">
                View Training Schedule →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
