import { Shield, Users, Scale, Landmark, PenTool, Award, Book, Globe, Facebook, Library, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OfficerDuties = () => {
  const electedMinisters = [
    {
      title: "Fearless Leader",
      role: "Chief Executive Officer & Chairman",
      icon: <Shield className="h-6 w-6 text-beer-blue" />,
      duties: [
        "Chief Executive Officer of the Corporation and Chairman of the Board.",
        "Oversee all club activities and act as chief spokesperson/liaison.",
        "Call and preside over all General Membership and Board meetings.",
        "Approve work group chairs and member appointments.",
        "Sign all contracts and agreements in accordance with established policy.",
        "Perform or delegate all duties not explicitly granted to other Ministers."
      ]
    },
    {
      title: "Minister of Prosperity",
      role: "Treasurer",
      icon: <Landmark className="h-6 w-6 text-beer-blue" />,
      duties: [
        "Overall responsibility for care and custody of all club funds and securities.",
        "Act as the check and balance for all BURP financial transactions.",
        "Maintain correct books of account and prepare complete financial reports.",
        "Exhibit books and accounts to any member(s) upon reasonable request.",
        "Advise the Board on methods for improving financial management.",
        "Perform all other duties normally pertaining to the Office of Treasurer."
      ]
    },
    {
      title: "Minister of Propaganda",
      role: "Secretary",
      icon: <PenTool className="h-6 w-6 text-beer-blue" />,
      duties: [
        "Serve as Secretary and maintain accurate records of bylaws and resolutions.",
        "Keep written minutes of all Board meetings and distribute them promptly.",
        "Ensure the corporation maintains good legal standing.",
        "Coordinate club communications and chair the Propaganda work group.",
        "Oversee content for the newsletter, BURP.org, and social media."
      ]
    },
    {
      title: "Minister of Enlightenment",
      role: "Education Director",
      icon: <Book className="h-6 w-6 text-beer-blue" />,
      duties: [
        "Evaluate the educational needs and desires of the Members.",
        "Coordinate training efforts with other Ministers and work groups.",
        "Oversee the planning and implementation of all club education efforts.",
        "Identify topics and speakers for technical presentations."
      ]
    },
    {
      title: "Minister of Membeersip",
      role: "Membership Director",
      icon: <Users className="h-6 w-6 text-beer-blue" />,
      duties: [
        "Maintain accurate records of members and collect membership dues.",
        "Develop and implement activities to recruit potential new members.",
        "Coordinate information materials provided to new members.",
        "Recommend members to fill non-elected positions and work groups."
      ]
    },
    {
      title: "Minister of Culture",
      role: "Competitions Director",
      icon: <Award className="h-6 w-6 text-beer-blue" />,
      duties: [
        "Plan and coordinate the club's monthly homebrew competitions.",
        "Oversee the tasks required for a successful Spirit of Free Beer (SoFB).",
        "Coordinate with Propaganda to promote SoFB and other competitions.",
        "Encourage BURP's entry into other club and national competitions."
      ]
    }
  ];

  const auxiliaryRoles = [
    {
      title: "Newsletter Editor",
      icon: <Mail className="h-5 w-5 text-beer-amber" />,
      description: "Solicits material, formats, edits, and publishes the monthly BURP News."
    },
    {
      title: "Web Master",
      icon: <Globe className="h-5 w-5 text-beer-amber" />,
      description: "Responsible for operations, security, and feature development of BURP.org."
    },
    {
      title: "Facebook Editor",
      icon: <Facebook className="h-5 w-5 text-beer-amber" />,
      description: "Manages operations, security, and engagement on the club's Facebook page."
    },
    {
      title: "Libeerian",
      icon: <Library className="h-5 w-5 text-beer-amber" />,
      description: "Maintains the club's physical and digital library materials and checkout records."
    }
  ];

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <nav className="mb-8">
          <Link to="/about" className="text-beer-blue font-bold hover:underline flex items-center gap-2">
            <span>←</span> Back to About
          </Link>
        </nav>

        {/* Header */}
        <div className="bg-beer-blue text-white rounded-3xl p-8 md:p-16 mb-16 shadow-xl relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Scale className="h-64 w-64" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Officer Duties</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              BURP is powered by a dedicated team of volunteers. Our leadership is divided into the elected Board of Ministers and appointed auxiliary roles.
            </p>
          </div>
        </div>

        {/* Elected Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-beer-brown uppercase tracking-tight">Elected Board of Ministers</h2>
            <div className="h-px bg-beer-brown/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {electedMinisters.map((minister, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-beer-brown/5 flex flex-col hover:shadow-md transition">
                <div className="bg-beer-blue/10 p-4 rounded-2xl w-fit mb-6">
                  {minister.icon}
                </div>
                <h3 className="text-2xl font-bold text-beer-brown mb-1">{minister.title}</h3>
                <p className="text-beer-blue font-bold text-sm mb-6 uppercase tracking-wider">{minister.role}</p>
                <ul className="space-y-3 flex-grow">
                  {minister.duties.map((duty, j) => (
                    <li key={j} className="flex gap-2 text-sm text-beer-brown/70 leading-relaxed">
                      <ChevronRight className="h-4 w-4 text-beer-blue shrink-0 mt-0.5" />
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Auxiliary Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-beer-brown uppercase tracking-tight">Auxiliary & Support Roles</h2>
            <div className="h-px bg-beer-brown/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {auxiliaryRoles.map((role, i) => (
              <div key={i} className="bg-beer-brown text-beer-cream p-8 rounded-3xl shadow-lg border border-white/5">
                <div className="bg-white/10 p-3 rounded-xl w-fit mb-6 text-beer-amber">
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{role.title}</h3>
                <p className="text-beer-cream/70 text-sm leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Link */}
        <div className="mt-24 pt-12 border-t border-beer-brown/10 flex flex-col items-center">
          <p className="text-beer-brown/60 mb-8 text-center max-w-2xl">
            Interested in helping the club? Most Ministers lead work groups and are always looking for volunteers to help with specific tasks.
          </p>
          <Link to="/about/bylaws" className="px-8 py-4 bg-beer-blue text-white font-bold rounded-xl hover:scale-105 transition shadow-lg uppercase tracking-widest text-sm">
            Read Governing Bylaws
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfficerDuties;
