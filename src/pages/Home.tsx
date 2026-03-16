import { Calendar, GraduationCap, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import meetingPhoto from '../assets/meeting-hop-talk.jpg';
import logo from '../assets/burp-logo.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-beer-brown text-beer-cream py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-beer-amber rounded-full filter blur-3xl"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-beer-amber rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="max-w-3xl lg:w-2/3">
              <h1 className="text-5xl md:text-7xl mb-6 text-beer-cream leading-tight">
                Brewing Better Beer <span className="text-beer-amber">Together.</span>
              </h1>
              <p className="text-xl md:text-2xl text-beer-cream/80 mb-10 leading-relaxed">
                Join the DC area's premier homebrewing club. From beginners to master brewers, we explore the craft of real potables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/membership" className="bg-beer-amber text-beer-brown text-lg font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition transform hover:-translate-y-1 text-center">
                  Join the Club
                </Link>
                <Link to="/sofb" className="bg-beer-brown border-2 border-beer-amber text-beer-amber text-lg font-bold px-8 py-4 rounded-lg hover:bg-beer-amber hover:text-beer-brown transition transform hover:-translate-y-1 text-center">
                  Spirit of Free Beer 2026
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-beer-amber/20 rounded-full blur-2xl animate-pulse"></div>
                <img src={logo} alt="BURP Logo" className="relative h-64 w-64 md:h-80 md:w-80 object-contain drop-shadow-2xl transform hover:rotate-3 transition duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-beer-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-beer-brown/5 hover:shadow-md transition">
              <Calendar className="h-10 w-10 text-beer-amber mb-6" />
              <h3 className="text-xl font-bold mb-3">Monthly Meetings</h3>
              <p className="text-beer-brown/70">Join us for beer tastings, technical discussions, and social networking with fellow brewers.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-beer-brown/5 hover:shadow-md transition">
              <Trophy className="h-10 w-10 text-beer-amber mb-6" />
              <h3 className="text-xl font-bold mb-3">Competitions</h3>
              <p className="text-beer-brown/70">Participate in BJCP sanctioned competitions like "Spirit of Free Beer" and internal club challenges.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-beer-brown/5 hover:shadow-md transition">
              <GraduationCap className="h-10 w-10 text-beer-amber mb-6" />
              <h3 className="text-xl font-bold mb-3">Enlightenment</h3>
              <p className="text-beer-brown/70">Access our archive of brewing techniques, recipes, and expert advice to improve your craft.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-beer-brown/5 hover:shadow-md transition">
              <Users className="h-10 w-10 text-beer-amber mb-6" />
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-beer-brown/70">Be part of a legendary community that has been shaping the local craft beer scene since 1981.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-beer-amber/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src={meetingPhoto} 
                  alt="BURP Meeting - Hop Talk" 
                  className="relative h-[400px] w-full object-cover rounded-2xl shadow-xl border-4 border-white"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl mb-8">What is BURP?</h2>
              <p className="text-lg text-beer-brown/80 mb-6 leading-relaxed">
                Brewers United for Real Potables (BURP) is a homebrewing club based in the Washington, D.C. area. Founded in 1981, we are one of the oldest and most active homebrewing clubs in the United States.
              </p>
              <p className="text-lg text-beer-brown/80 mb-10 leading-relaxed">
                Our mission is to promote the art of brewing high-quality beer, cider, and mead, and to foster a community where brewers of all levels can share knowledge and enjoy great beverages together.
              </p>
              <Link to="/about" className="text-beer-amber font-bold text-lg hover:underline flex items-center gap-2">
                Learn more about our history & bylaws <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-beer-amber">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl text-beer-brown mb-8 leading-tight">Ready to Brew Something Great?</h2>
          <p className="text-xl text-beer-brown/80 mb-10 max-w-2xl mx-auto">
            Join 300+ local homebrewers and take your brewing to the next level. Membership includes meeting access, newsletters, and more.
          </p>
          <button className="bg-beer-brown text-beer-cream text-xl font-bold px-12 py-5 rounded-full shadow-xl hover:scale-105 transition transform">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
