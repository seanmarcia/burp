import { ArrowLeft, History, Search, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';

interface OfficerTerm {
  year: string;
  leader: string;
  ministers: string;
  others?: string;
}

const PreviousOfficers = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedDecade, setExpandedDecade] = useState<string | null>('2020s');

  useEffect(() => window.scrollTo(0, 0), []);

  const allOfficers: OfficerTerm[] = [
    // 2020s
    { year: "2025", leader: "Dan Rozman & Greg Leifer", ministers: "Wendy Aaronson (Enlightenment), Mike Reinitz & Keir Soderberg (Culture), Calleen White (Prosperity), Rich Sizemore (Membeersip), Janine Dade (Propaganda)", others: "Emily Michelsen (Newsletter Editor)" },
    { year: "2024", leader: "Matt Peppe", ministers: "Wendy Aaronson (Enlightenment), Daniel Warehime & Keir Soderberg (Culture), Calleen White (Prosperity), Greg Leifer (Membeersip), Emily Michelsen (Propaganda)", others: "Emily Michelsen (Newsletter Editor)" },
    { year: "2023", leader: "Matt Peppe", ministers: "Wendy Aaronson (Enlightenment), Daniel Warehime (Culture), Calleen White (Prosperity), Andrew Fowler (Membeership), James Wisnieski (Propaganda)" },
    { year: "2022", leader: "Chuck Hughes", ministers: "Matt Peppe & Greg Leifer (Enlightenment), Matt Scholfield & Daniel Warehime (Culture), Pam Leifer (Prosperity), Andrew Fowler (Membeersip), James Wisnieski (Propaganda)" },
    { year: "2021", leader: "Chuck Hughes", ministers: "Matt Peppe & Greg Leifer (Enlightenment), Matt Scholfield & Daniel Warehime (Culture), Pam Leifer (Prosperity), Andrew Fowler (Membeersip), James Wisnieski (Propaganda)", others: "Manu Ortiz (Webmaster)" },
    { year: "2020", leader: "Mike Reinitz", ministers: "Chuck Hughes & Matt Peppe (Enlightenment), Jeanne Burns & Matt Scholfield (Culture), Pam Leifer (Prosperity), Dan Rozman (Membeersip), James Wisnieki (Propaganda)", others: "Lon Holland (Webmaster)" },
    // 2010s
    { year: "2019", leader: "Mike Reinitz", ministers: "Matt Peppe & Chuck Hughes (Enlightenment), Rich Sampson & Jeanne Burns (Culture), Pam Leifer (Prosperity), Dan Rozman (Mem-Beer-Sip), Keiron Greenhalgh (Propaganda)", others: "Lon Holland (Webmaster), Bob Rouse (Email), Dave White (Merch)" },
    { year: "2018", leader: "Dave White", ministers: "Wendy Aaronson (Enlightenment), Matt Pyle (Culture), Thomas Sords (Prosperity), Dan Rozman (Mem-Beer-Sip), Keiron Greenhalgh (Propaganda)", others: "Sean McIlvain (Webmaster), Bob Rouse (Email), Larry Koch (Raffles)" },
    { year: "2017", leader: "Dave White", ministers: "Wendy Aaronson & Lon Holland (Enlightenment), Greg Leifer & Matt Pyle (Culture), Thomas Sords (Prosperity), Dan Rozman (Mem-Beer-Sip), Bob Rouse (Propaganda)", others: "Sean McIlvain (Webmaster), Keiron Greenhalgh (Social Networking)" },
    { year: "2016", leader: "Emily Michelsen", ministers: "Mike Reintz & Wendy Aaronson (Enlightenment), Dave White & Greg Leifer (Culture), Thomas Sords (Prosperity), Dan Rozman (Membeership), Bill Ridgely/Robert Stevens/Andrea Albersheim (Propaganda)", others: "Bill Ridgely (Secretary)" },
    { year: "2015", leader: "Emily Michelsen", ministers: "Mike Reintz & Wendy Aaronson (Enlightenment), Dan Bremer & Bob Rouse (Culture), Thomas Sords (Prosperity), Dan Rozman (Membeership), Bill Ridgely/Robert Stevens/Rich Sampson (Propaganda)", others: "Rich Sampson (Newsletter Editor), Bill Ridgely (Secretary)" },
    { year: "2014", leader: "Tom Cannon", ministers: "Mike Reintz & Thomas Sords (Enlightenment), Wendy Aaronson & Nick Griner (Culture), Bob Sholtes (Prosperity), Dan Rozman (Membeership), Bill Ridgely & Howard Michelsen (Propaganda)", others: "Rich Sampson (Newsletter Editor), Bill Ridgely (Secretary)" },
    { year: "2013", leader: "Tom Cannon", ministers: "Steven Marler/Robert Stevens/Joe Federico (Enlightenment), Wendy Aaronson & Nick Griner (Culture), Bob Sholtes (Prosperity), Howard Michelsen (Membeership), Bill Ridgely & Matthew Pyle (Propaganda)", others: "Rich Sampson (Newsletter Editor), Bill Ridgely (Secretary)" },
    { year: "2012", leader: "Mel Thompson", ministers: "Steven Marler & Robert Stevens (Enlightenment), Justin Housenger & Mike Reinitz (Culture), Mark Hogenmiller (Prosperity), Howard Michelsen (Membeership), Bill Ridgely & Matthew Pyle (Propaganda)", others: "Rich Sampson (Newsletter Editor), Bill Ridgely (Secretary)" },
    { year: "2011", leader: "Mel Thompson", ministers: "Tim Artz (Enlightenment), Wendy Aaronson & Mike Evans (Culture), Mark Hogenmiller (Prosperity), Howard Michelsen (Membeership), Bill Ridgely & Matthew Pyle (Propaganda)", others: "Larry Koch (Newsletter Editor), Bill Ridgely (Libeerian/Secretary)" },
    { year: "2010", leader: "Robert Stevens", ministers: "Tim Artz (Enlightenment), Colleen Cannon & Wendy Aaronson (Culture), Mark Hogenmiller (Prosperity), Jamie Langlie (Membeership)", others: "Larry Koch (Newsletter Editor), Bill Ridgely (Libeerian/Secretary)" },
    // 2000s
    { year: "2009", leader: "Andy Anderson", ministers: "Tim Artz (Enlightenment), Christine Johnbrier & A.J. Delange (Culture), Robert Stevens (Finance), Jamie Langlie (Propaganda), Beth Madden (Truth)", others: "Bill Ridgley (Libeerian), Paul Langlie (Web)" },
    { year: "2008", leader: "Jamie Langlie & Alan Hew", ministers: "Wendy Aaronson & Tom Cannon (Enlightenment), Wendy Schmidt & Bruce Bennett (Culture), Larry Koch (Finance), Christine Johnbrier (Propaganda), Beth Madden (Truth)", others: "Bill Ridgely (Libeerian), Paul & Stein Langlie (Web)" },
    { year: "2007", leader: "Kathy Koch", ministers: "Wendy Aaronson & Tom Cannon (Enlightenment), Jamie Langlie & Jeamie Osburn (Culture), Larry Koch (Finance), Christine Johnbrier (Propaganda), Beth Madden (Truth)", others: "Mel Thompson (Libeerian), Paul & Stein Langlie (Web)" },
    { year: "2006", leader: "Steve Marler", ministers: "Wendy Aaronson & Tom Cannon (Enlightenment), Jamie Langlie & Bud Hensgen (Culture), Larry Koch (Finance), Jim & Linda Rorick (Propaganda), Bill Ridgely (Truth)", others: "Mel Thompson (Libeerian), Paul & Stein Langlie (Web)" },
    { year: "2005", leader: "Colleen Cannon", ministers: "Wendy Aaronson (Enlightenment), Mark Hogenmiller & Bud Hengen (Culture), Dan Fapp (Prosperity), Jim & Linda Rorick (Propaganda), Bill Ridgely (Truth)", others: "Pat & Janet Crowe (Libeerian/Secretary), Paul & Jamie Langlie (Web)" },
    { year: "2004", leader: "Rick Garvin", ministers: "Wendy Aaronson (Enlightenment), Dave Pyle & Mel Thompson (Culture), Kathy Koch (Finance), Jim & Linda Rorick (Propaganda), Bill Ridgely (Truth)", others: "Pat & Janet Crowe (Libeerian), Paul & Jamie Langlie (Web)" },
    { year: "2003", leader: "Rick Garvin", ministers: "Wendy Aaronson (Enlightenment), Tom Cannon & Betsy Kepler (Culture), Kathy Koch (Finance), Bob Kepler (Propaganda), Christine Lewis (Truth)", others: "Pat & Janet Crowe (Libeerian), Paul & Jamie Langlie (Web)" },
    { year: "2002", leader: "Bill Ridgely", ministers: "Wendy Aaronson (Enlightenment), Steve Marler & Robert Stevens (Culture), Kathy Koch (Finance), Bob Kepler (Propaganda), Christine Lewis (Truth)", others: "Wendy Schmidt (Libeerian), Paul & Jamie Langlie (Web)" },
    { year: "2001", leader: "Bill Ridgely", ministers: "Wendy Aaronson (Education), Alison Skeel (Culture), Ralph Bucca (Finance), Bob Kepler (Propaganda), Jamie & Paul Langlie (Truth)", others: "Wendy Schmidt (History), Lynn Ashley (Web)" },
    { year: "2000", leader: "John Dittmann", ministers: "Wendy Aaronson (Enlightenment), Bruce Bennett (Culture), Ralph Bucca (Finance), Bill Ridgely (Propaganda), Jamie & Paul Langlie (Truth)", others: "Wendy Schmidt (Libeerian), Lynn Ashley (Web)" },
    // 1990s
    { year: "1999", leader: "Steve Marler", ministers: "Wendy Aaronson (Enlightenment), Andy Anderson (Culture), Christine Newman (Finance), Bill Ridgely (Propaganda), Delano DuGarm (Truth)", others: "Bill Newman (Libeerian), Lynn Ashley (Web)" },
    { year: "1998", leader: "Tom Cannon", ministers: "Wendy Aaronson (Education), Jay Adams (Culture), Steve Marler (Finance), Bill Ridgely (Propaganda), Dan Brown (Truth)", others: "Bob Cooke (Libeerian), Lynn Ashley (Web)" },
    { year: "1997", leader: "Tom Cannon", ministers: "Wendy Aaronson (Education), Mark Stevens (Culture), Doug Kruth (Finance), Bill Ridgely (Propaganda), Dan Brown (Truth)", others: "Bob Cooke (Libeerian), Lynn Ashley (Web)" },
    { year: "1996", leader: "Larry Koch", ministers: "Wendy Aaronson (Education), Becky & Dave Pyle (Culture), Doug Kruth (Finance), Bill Ridgely (Propaganda), Polly Goldman & Bruce Feist (Truth)", others: "Bob Cooke (Libeerian)" },
    { year: "1995", leader: "Polly Goldman (President)", ministers: "Wendy Aaronson (Education), Delano DuGarm (Culture), Bob Dawson (Finance), Bill Ridgely (Propaganda), Bruce Feist (Truth)", others: "Katy DuGarm (Libeerian)" },
    { year: "1994", leader: "Tim Artz (President)", ministers: "Wendy Aaronson (Education), Rex White (Culture), Larry Koch (Finance), Bill Ridgely (Propaganda), Polly Goldman & Bruce Feist (Truth)", others: "Katy DuGarm (Libeerian)" },
    { year: "1993", leader: "Wendy Aaronson (President)", ministers: "Rick Garvin (Education), Tim Artz (Culture), Larry Koch (Finance), Bill Ridgely (Propaganda), Polly Goldman & Bruce Feist (Truth)", others: "Dot Steller (Information)" },
    { year: "1992", leader: "Jim Dorsch (President)", ministers: "Rick Garvin (Education), Wendy Aaronson (Culture), Steve Snyder (Finance), Tim Ness (Propaganda), Dan Carter (Truth)", others: "Bert Tagge (Information)" },
    { year: "1991", leader: "Ralph Bucca (President)", ministers: "Wendy Aaronson & Chuck Popenoe (VPs)", others: "Jim Dorsch (Treasurer), Erik Henchal (Secretary), Bill Ridgely (Libeerian), John Gardiner (MemBeerSip)" },
    { year: "1990", leader: "Bill Ridgely (President)", ministers: "Jim Dorsch & Dick Roepke (VPs)", others: "Chuck Popenoe (Treasurer), Erik Henchal (Editor), Ralph Bucca (Libeerian), Bert Tagge (MemBeerShip)" },
    // 1980s
    { year: "1989", leader: "Tom McGonigle (President)", ministers: "Chuck Popenoe & Dick Roepke (VPs)", others: "Bill Ridgely (Treasurer), Andy Beaulieu (Editor), Jim Dorsch (Libeerian), John Gardiner (MemBeerShip)" },
    { year: "1988", leader: "Ralph Bucca (President)", ministers: "Phil Hugill & Rod Rydlun (VPs)", others: "Duane Fraver (Treasurer), Bill Ridgely (Editor), Don Kaliher (Libeerian)" },
    { year: "1987", leader: "Rod Rydlun (President)", ministers: "Ralph Bucca (VP Activities)", others: "Duane Fraver (Treasurer), John Gardiner (Secretary), Katherine Long (Libeerian)" },
    { year: "1986", leader: "Dan McCabe (President)", ministers: "Ralph Semler (VP)", others: "Hank Rupprecht (Treasurer/Librarian), Joel Spencer (Secretary), Ralph Bucca (Membership), Matt Mueller (Activities)" },
    { year: "1985", leader: "Joel Spencer (President)", ministers: "Bob Wright (Exec VP), Dan McCoubrey (Conference VP), Dan McCabe (Activities VP)", others: "Bob Bauer (Treasurer), Hank Rupprecht (Secretary), Ralph Bucca (Membership), Bob Klothe (Librarian/Historian)" },
    { year: "1984", leader: "Dan McCoubrey (President)", ministers: "Phil Angerhofer (Exec VP)", others: "Bobby Bauer (Treasurer), Hank Rupprecht (Secretary), Dan McCabe (Activities VP), Paul Smith (Parliamentarian), Ernie Weissenborn (Humor)" },
    { year: "1983", leader: "Ralph Semler (President)", ministers: "Phil Angerhofer (VP Project), Dave McColloch (VP Program)", others: "George Burgess (Treasurer), Dan McCoubrey (Secretary)" },
    { year: "1982", leader: "Rick Gaskins (President)", ministers: "N/A", others: "George Burgess (Treasurer), Dan McCoubrey (Secretary)" }
  ];

  const filteredOfficers = useMemo(() => {
    return allOfficers.filter(off => 
      off.year.includes(searchTerm) || 
      off.leader.toLowerCase().includes(searchTerm.toLowerCase()) ||
      off.ministers.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const decades = useMemo(() => {
    const grouped: Record<string, OfficerTerm[]> = {};
    filteredOfficers.forEach(off => {
      const decade = off.year.substring(0, 3) + '0s';
      if (!grouped[decade]) grouped[decade] = [];
      grouped[decade].push(off);
    });
    return grouped;
  }, [filteredOfficers]);

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/about')} 
          className="flex items-center gap-2 text-beer-amber font-bold mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to About
        </button>

        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-beer-brown/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-beer-amber/20 p-3 rounded-2xl text-beer-amber">
                <History className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl text-beer-brown">Historical Officers</h1>
            </div>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-beer-brown/40" />
              <input 
                type="text" 
                placeholder="Search by year or name..."
                className="w-full pl-10 pr-4 py-2 bg-beer-cream/20 rounded-full border border-beer-brown/10 focus:outline-none focus:ring-2 focus:ring-beer-amber/50 transition text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <p className="text-lg text-beer-brown/60 mb-16 leading-relaxed">
            Since 1981, BURP has been shaped by the leadership of dedicated volunteers. Below is the full record of our Fearless Leaders and their various Ministers throughout the decades.
          </p>

          <div className="space-y-6">
            {Object.keys(decades).sort((a, b) => b.localeCompare(a)).map(decade => (
              <div key={decade} className="border border-beer-brown/10 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setExpandedDecade(expandedDecade === decade ? null : decade)}
                  className="w-full flex items-center justify-between p-6 bg-beer-brown text-beer-cream hover:bg-beer-brown/95 transition"
                >
                  <span className="text-2xl font-bold tracking-wider">{decade}</span>
                  {expandedDecade === decade ? <ChevronUp /> : <ChevronDown />}
                </button>
                
                {expandedDecade === decade && (
                  <div className="divide-y divide-beer-brown/5 bg-white">
                    {decades[decade].map((term, i) => (
                      <div key={i} className="p-8 hover:bg-beer-cream/5 transition">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-24 shrink-0">
                            <span className="text-3xl font-black text-beer-amber/30">{term.year}</span>
                          </div>
                          <div className="flex-grow space-y-4">
                            <div>
                              <p className="text-xs font-black uppercase tracking-widest text-beer-brown/40 mb-1">Fearless Leader</p>
                              <p className="text-xl font-bold text-beer-brown">{term.leader}</p>
                            </div>
                            <div>
                              <p className="text-xs font-black uppercase tracking-widest text-beer-brown/40 mb-1">Ministers</p>
                              <p className="text-beer-brown/80 leading-relaxed">{term.ministers}</p>
                            </div>
                            {term.others && (
                              <div>
                                <p className="text-xs font-black uppercase tracking-widest text-beer-brown/40 mb-1">Other Staff</p>
                                <p className="text-sm text-beer-brown/60 italic">{term.others}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-beer-brown/10 text-center">
            <Award className="h-12 w-12 text-beer-amber mx-auto mb-6 opacity-20" />
            <p className="text-beer-brown/40 text-sm italic">
              Record maintained by the BURP Libeerian. Updates or corrections? Please contact the Minister of Propaganda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousOfficers;
