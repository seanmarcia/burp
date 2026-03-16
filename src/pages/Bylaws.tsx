import { Shield, Users, Scale, Landmark, PenTool, Award, Book, ScrollText, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Bylaws = () => {
  const [openSection, setOpenSection] = useState<string | null>('art1');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const Section = ({ id, title, icon: Icon, children }: { id: string, title: string, icon: any, children: React.ReactNode }) => (
    <div className="border-b border-beer-brown/10 last:border-0">
      <button 
        onClick={() => toggleSection(id)}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-beer-blue/5 transition-colors px-4 rounded-xl"
      >
        <div className="flex items-center gap-4">
          <div className="bg-beer-blue/10 p-2 rounded-lg text-beer-blue">
            <Icon className="h-6 w-6" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-beer-brown uppercase tracking-tight">{title}</h2>
        </div>
        {openSection === id ? <ChevronUp className="h-5 w-5 text-beer-brown/40" /> : <ChevronDown className="h-5 w-5 text-beer-brown/40" />}
      </button>
      {openSection === id && (
        <div className="px-4 pb-8 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="prose prose-beer max-w-none text-beer-brown/80 leading-relaxed space-y-6">
            {children}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <nav className="mb-8">
          <Link to="/about" className="text-beer-blue font-bold hover:underline flex items-center gap-2">
            <span>←</span> Back to About
          </Link>
        </nav>

        {/* Header */}
        <div className="bg-beer-blue text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Shield className="h-48 w-48" />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Official Club Bylaws</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Brewers United for Real Potables (BURP). A Virginia Non-Stock Corporation.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-white/60">
              <span>Adopted Aug 2000</span>
              <span className="w-1 h-1 bg-white/30 rounded-full my-auto"></span>
              <span>Amended Mar 2010</span>
              <span className="w-1 h-1 bg-white/30 rounded-full my-auto"></span>
              <span>Amended Sep 2010</span>
              <span className="w-1 h-1 bg-white/30 rounded-full my-auto"></span>
              <span>Amended Dec 2014</span>
            </div>
          </div>
        </div>

        {/* Accordion Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-beer-brown/5 overflow-hidden">
          
          <Section id="art1" title="Article I: Offices" icon={Landmark}>
            <p><strong>Section 1. Registered Office.</strong> The address of the registered office of the Corporation is 2106 Twin Mill Lane, Oakton, VA 22124. The registered office need not be identical with the principal office of the Corporation and may be changed from time to time by the Board of Directors.</p>
            <p><strong>Section 2. Other Offices.</strong> The Corporation’s principal office shall be at 2106 Twin Mill Lane, Oakton, VA 22124 or at such other place within or without Virginia as the Board of Directors may from time to time determine. The Corporation may have its principal office and other offices at such other places within and without Virginia as the Board of Directors may from time to time determine or the business of the Corporation requires.</p>
            <p><strong>Section 3. Registered Agents.</strong> The Corporation shall maintain a registered agent and registered office at each jurisdiction in which it conducts business.</p>
            <p><strong>Section 4. Trade Name.</strong> The Corporation is incorporating the Members and assets of Brewers United for Real Potables, an unincorporated association established in 1981. The Corporation shall conduct the majority of its business under the name of “Brewers United for Real Potables” and shall register “Brewers United for Real Potables” as its trade name in accordance with the laws of Virginia.</p>
          </Section>

          <Section id="art2" title="Article II: Meetings of Members" icon={Users}>
            <p><strong>Section 1. Definitions.</strong> The Corporation shall have one or more classes of Members as set forth in these Bylaws, in accordance with its Articles of Incorporation. New classes of Members may be created by the Board of Directors, or classes may be abolished by the Board of Directors by amending these Bylaws.</p>
            <p><strong>Section 2. Voting Members.</strong> Voting Members are the only Members who have the right to vote for the election of Directors. Voting Members are natural persons who have either paid their Membership dues to the Corporation or been designated as lifetime honorary Members and who have not been expelled.</p>
            <p><strong>Section 3. Non-Voting Members.</strong> Non-voting Members shall be natural persons and other entities who have not been designated as lifetime honorary Members and who have not paid their dues to the Corporation, but who, for any reason determined by the Minister of Membeersip, receive the Corporation’s newsletter. Non-voting Members shall have no right to vote on any matter, including, but not limited to, election of Directors, amendment of Articles of Incorporation, amendment of these bylaws, or dissolution of the Corporation.</p>
            <div className="bg-beer-red/5 p-6 rounded-2xl border border-beer-red/10 my-4">
              <h4 className="text-beer-red font-bold mb-2">Section 4. Expulsion of Members</h4>
              <p className="text-sm">Members shall have their status as Members terminated for failure to pay dues. In addition, Members may have their Membership status terminated for conduct which interferes with the Corporation’s ability to conduct meetings in an orderly or law-abiding fashion. Examples include: physical attacks, sexual harassment, verbal abuse, or physical destruction of facilities.</p>
              <p className="text-sm mt-2 font-medium italic">A unanimous vote of all disinterested Directors present shall be required for expulsion.</p>
            </div>
            <p><strong>Section 6. Annual Meetings.</strong> Annual meetings of the Members shall be held during the month of December. At such meetings, they shall hear an annual report by the Board of Directors, and the voting Members shall elect Directors. If there are no contested offices, the election shall be conducted by way of a simple voice vote.</p>
            <p><strong>Section 12. Quorum.</strong> Ten percent of the voting Members shall constitute a quorum for all meetings of the Members for the transaction of business.</p>
            <p><strong>Section 16. Other Meetings.</strong> Notwithstanding the above, the Corporation may have other meetings of the Members which are conducted for social and educational purposes. Such meetings shall not be considered formal meetings.</p>
          </Section>

          <Section id="art3" title="Article III: Directors" icon={Scale}>
            <p><strong>Section 1. Number; Term of Office.</strong> The terms Director, Officer and Minister refer to different responsibilities for the same elected positions. The number of classes of Directors which shall constitute the whole board shall be six.</p>
            <div className="grid md:grid-cols-2 gap-4 my-4">
              {[
                "1. Fearless Leader", "2. Minister of Propaganda", 
                "3. Minister of Prosperity", "4. Minister of Culture",
                "5. Minister of Enlightenment", "6. Minister of Membeersip"
              ].map(minister => (
                <div key={minister} className="px-4 py-2 bg-beer-blue/5 border border-beer-blue/10 rounded-lg text-sm font-bold text-beer-blue">
                  {minister}
                </div>
              ))}
            </div>
            <p><strong>Section 3. Powers.</strong> The business and affairs of the Corporation shall be managed by its Board of Directors which may exercise all such powers as are not required to be exercised or done by the Members.</p>
            <p><strong>Section 9. Quorum.</strong> At all meetings of the board a majority of the Directors in office shall constitute a quorum.</p>
            <p><strong>Section 13. Conflicts of Interest.</strong> Directors and, in the case of a tie, the Fearless Leader, shall abstain from voting on matters in which they have a conflict of interest.</p>
            <p><strong>Section 17. Removal.</strong> At any special meeting of the Members, the voting Members may, by a majority vote, remove a director from office, either with or without cause.</p>
          </Section>

          <Section id="art4" title="Article IV: Notices" icon={Book}>
            <p><strong>Section 1. Form.</strong> Notice may be given in writing, by mail, addressed to such director or member at his address as it appears on the records of the Corporation. Notice may also be given in person, by express mail, electronic mail, telephone, telegram, facsimile, or by similar means.</p>
            <p><strong>Section 2. Waiver.</strong> Whenever any notice is required to be given, a waiver thereof in writing, signed by the person entitled to said notice, shall be deemed equivalent to notice.</p>
          </Section>

          <Section id="art5" title="Article V: Officers" icon={Award}>
            <p><strong>Section 1. Titles.</strong> The elected officers of the Corporation shall be a Fearless Leader, Minister of Propaganda, Minister of Prosperity, Minister of Culture, Minister of Enlightenment, and Minister of Membeersip.</p>
            <p><strong>Section 5. Powers and Duties of the Fearless Leader.</strong> The Fearless Leader shall be the Chief Executive Officer of the Corporation and shall preside at all meetings of the Members and shall attend and chair meetings of the Board of Directors.</p>
            <p><strong>Section 7. Powers and Duties of the Minister of Propaganda.</strong> The Minister of Propaganda shall serve as Secretary of the Corporation and shall attend all meetings and record all the proceedings. He or she shall also be responsible for all corporate communications, including editing and publishing the corporate newsletter.</p>
            <p><strong>Section 9. Powers and Duties of the Minister of Prosperity.</strong> The Minister of Prosperity shall serve as Treasurer of the Corporation and shall have the custody of the corporate funds and securities and shall keep full and accurate accounts.</p>
          </Section>

          <Section id="art6" title="Article VI: Contracts & Finance" icon={FileText}>
            <p><strong>Section 1. Contracts.</strong> The Board of Directors may authorize any officer or agent to enter into any contract in the name of and on behalf of the Corporation.</p>
            <p><strong>Section 3. Checks.</strong> All checks, drafts or other orders for the payment of money shall be signed by the Minister of Prosperity or Assistant Minister of Prosperity.</p>
          </Section>

          <Section id="art7" title="Article VII: General Provisions" icon={ScrollText}>
            <p><strong>Section 1. Indemnification.</strong> The Corporation shall indemnify and limit the liability of its Directors and officers as set forth in its Articles of Incorporation.</p>
            <p><strong>Section 2. Fiscal Year.</strong> The fiscal year of the Corporation shall end on December 31.</p>
            <p><strong>Section 3. Corporate Seal.</strong> The corporate seal, if one is ordered, shall have inscribed thereon the name of the Corporation, the year of its organization and the words “Corporate Seal, Virginia”.</p>
          </Section>

          <Section id="art8" title="Article VIII: Amendments" icon={PenTool}>
            <p>These bylaws may be altered, amended or repealed or new bylaws may be adopted by the Board of Directors at any regular meeting of the Board of Directors, or at any special meeting if notice is contained in the notice of such special meeting.</p>
          </Section>

        </div>

        {/* Documentation Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-beer-brown/5">
          <h2 className="text-3xl font-bold mb-8 text-beer-brown flex items-center gap-3">
            <Book className="text-beer-amber h-8 w-8" />
            Related Documentation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="#" className="p-6 bg-beer-cream/20 rounded-2xl border border-beer-brown/10 hover:border-beer-blue transition group">
              <h4 className="font-bold text-beer-brown group-hover:text-beer-blue transition-colors mb-2 uppercase tracking-wide text-sm">Articles of Incorporation</h4>
              <p className="text-xs text-beer-brown/60 leading-relaxed">The foundational legal document filed with the Commonwealth of Virginia.</p>
            </a>
            <a href="#" className="p-6 bg-beer-cream/20 rounded-2xl border border-beer-brown/10 hover:border-beer-blue transition group">
              <h4 className="font-bold text-beer-brown group-hover:text-beer-blue transition-colors mb-2 uppercase tracking-wide text-sm">Officer Duties & Policies</h4>
              <p className="text-xs text-beer-brown/60 leading-relaxed">Detailed operational responsibilities for each Minister and Assistant Minister.</p>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-beer-brown/10 text-center">
          <p className="text-sm text-beer-brown/50 italic">
            This page contains the exhaustive and unabridged transcription of the official BURP Bylaws as of the last amendment in December 2014.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bylaws;
