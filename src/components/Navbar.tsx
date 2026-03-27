import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/burp.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-beer-brown text-beer-cream shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-white/90 p-1 rounded-full shadow-sm">
                <img src={logo} alt="BURP Logo" className="h-8 w-8 object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight">BURP</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/events" className="hover:text-beer-amber px-3 py-2 rounded-md text-sm font-medium transition-colors">Events</Link>
              <Link to="/enlightenment" className="hover:text-beer-amber px-3 py-2 rounded-md text-sm font-medium transition-colors">Enlightenment</Link>
              <Link to="/competitions" className="hover:text-beer-amber px-3 py-2 rounded-md text-sm font-medium transition-colors">Competitions</Link>
              <Link to="/newsletter" className="hover:text-beer-amber px-3 py-2 rounded-md text-sm font-medium transition-colors">BURP News</Link>
              <Link to="/about" className="hover:text-beer-amber px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/membership" className="bg-beer-amber text-beer-brown px-4 py-2 rounded-md text-sm font-bold hover:bg-opacity-90 transition shadow-sm">
              Join BURP
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-beer-cream">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-beer-brown border-t border-beer-amber/20 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/events" className="block hover:text-beer-amber px-3 py-2 rounded-md text-base font-medium">Events</Link>
            <Link to="/enlightenment" className="block hover:text-beer-amber px-3 py-2 rounded-md text-base font-medium">Enlightenment</Link>
            <Link to="/competitions" className="block hover:text-beer-amber px-3 py-2 rounded-md text-base font-medium">Competitions</Link>
            <Link to="/newsletter" className="block hover:text-beer-amber px-3 py-2 rounded-md text-base font-medium">BURP News</Link>
            <Link to="/about" className="block hover:text-beer-amber px-3 py-2 rounded-md text-base font-medium">About</Link>
            <div className="pt-4 px-3">
              <Link to="/membership" className="block w-full bg-beer-amber text-beer-brown px-4 py-2 rounded-md text-base font-bold shadow-sm text-center">
                Join BURP
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
