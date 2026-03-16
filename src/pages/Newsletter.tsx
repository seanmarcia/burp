import { FileText, Download, Calendar, Mail, Search } from 'lucide-react';
import { useState } from 'react';

const Newsletter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const issues = [
    { title: "BURP News - March 2026", date: "March 1, 2026", size: "2.4 MB", type: "PDF" },
    { title: "BURP News - February 2026", date: "February 1, 2026", size: "1.8 MB", type: "PDF" },
    { title: "BURP News - January 2026", date: "January 1, 2026", size: "3.1 MB", type: "PDF" },
    { title: "BURP News - December 2025", date: "December 1, 2025", size: "2.2 MB", type: "PDF" },
    { title: "BURP News - November 2025", date: "November 1, 2025", size: "2.0 MB", type: "PDF" },
    { title: "BURP News - October 2025", date: "October 1, 2025", size: "2.5 MB", type: "PDF" },
    { title: "BURP News - September 2025", date: "September 1, 2025", size: "1.9 MB", type: "PDF" },
    { title: "BURP News - August 2025", date: "August 1, 2025", size: "2.1 MB", type: "PDF" },
  ];

  const filteredIssues = issues.filter(issue => 
    issue.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl mb-4 text-beer-brown">BURP News</h1>
            <p className="text-xl text-beer-brown/70 leading-relaxed">
              Our monthly newsletter featuring club announcements, technical articles, recipes, and more.
            </p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-beer-brown/40" />
            <input 
              type="text" 
              placeholder="Search archive..."
              className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-beer-brown/10 focus:outline-none focus:ring-2 focus:ring-beer-blue/50 transition shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredIssues.map((issue, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-beer-brown/5 shadow-sm hover:shadow-md transition group">
              <div className="bg-beer-blue/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-beer-blue group-hover:bg-beer-blue group-hover:text-white transition-colors">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-beer-brown mb-2 leading-tight">{issue.title}</h3>
              <div className="flex items-center gap-2 text-beer-brown/40 text-xs mb-6">
                <Calendar className="h-3 w-3" />
                <span>{issue.date}</span>
                <span className="mx-1">•</span>
                <span>{issue.size}</span>
              </div>
              <button className="flex items-center justify-center gap-2 w-full py-3 bg-beer-cream/30 text-beer-brown rounded-xl font-bold text-sm hover:bg-beer-blue hover:text-white transition">
                <Download className="h-4 w-4" />
                Download PDF
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-beer-blue text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Mail className="h-48 w-48" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">Get BURP News in your inbox</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Stay up to date with the latest club news, competition announcements, and technical articles. Our newsletter is published on the first of every month.
            </p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-grow px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-beer-amber placeholder:text-white/30"
              />
              <button className="px-8 py-4 bg-beer-amber text-beer-brown font-bold rounded-xl hover:scale-105 transition shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
