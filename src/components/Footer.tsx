import { Beer, Facebook, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-beer-brown text-beer-cream pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Beer className="h-6 w-6 text-beer-amber" />
              <span className="text-xl font-bold tracking-tight">BURP</span>
            </Link>
            <p className="text-sm text-beer-cream/70 mb-4">
              Brewers United for Real Potables. Homebrewing in the DC/MD/VA area since 1981.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-beer-amber transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-beer-amber transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="mailto:info@burp.org" className="hover:text-beer-amber transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-beer-amber mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-beer-cream/70">
              <li><Link to="/newsletter" className="hover:text-beer-cream transition-colors">BURP News</Link></li>
              <li><Link to="/enlightenment" className="hover:text-beer-cream transition-colors">Brewing Techniques</Link></li>
              <li><Link to="/enlightenment" className="hover:text-beer-cream transition-colors">Recipes</Link></li>
              <li><Link to="/competitions" className="hover:text-beer-cream transition-colors">Competition Guidelines</Link></li>
              <li><Link to="/about/bylaws" className="hover:text-beer-cream transition-colors">Bylaws</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-beer-amber mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-beer-cream/70">
              <li><Link to="/events" className="hover:text-beer-cream transition-colors">Meetings</Link></li>
              <li><Link to="/membership" className="hover:text-beer-cream transition-colors">Join BURP</Link></li>
              <li><Link to="/about" className="hover:text-beer-cream transition-colors">Officers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-beer-amber mb-4">Contact</h3>
            <p className="text-sm text-beer-cream/70">
              Have questions about brewing or joining the club?<br />
              <a href="mailto:info@burp.org" className="text-beer-amber hover:underline mt-2 inline-block">info@burp.org</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-beer-amber/20 pt-8 text-center text-xs text-beer-cream/50">
          <p>© {new Date().getFullYear()} Brewers United for Real Potables (BURP). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
