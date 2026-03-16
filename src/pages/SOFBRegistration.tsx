import { ArrowLeft, UserPlus, ClipboardCheck, Info, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SOFBRegistration = () => {
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-beer-amber font-bold mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to SOFB Overview
        </button>

        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-beer-brown/5">
          <h1 className="text-4xl md:text-5xl mb-8 text-beer-brown">Judge & Steward Registration</h1>
          <p className="text-xl text-beer-brown/60 mb-12 leading-relaxed">
            The Spirit of Free Beer is only possible through the dedication of our volunteer judges and stewards. Join us for a day of evaluation, education, and excellent beer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-beer-brown/5 border border-beer-brown/10 rounded-3xl">
              <UserPlus className="h-10 w-10 text-beer-amber mb-6" />
              <h3 className="text-2xl font-bold mb-4">Register to Volunteer</h3>
              <p className="text-beer-brown/70 mb-6 text-sm leading-relaxed">
                Volunteers must register an account on the competition website. If already registered, simply log in and select **"Edit Account"** from the **"My Account"** menu to indicate your willingness to judge or steward.
              </p>
              <button className="w-full py-4 bg-beer-amber text-beer-brown rounded-xl font-bold shadow-sm hover:bg-opacity-90 transition">
                Go to Registration Portal
              </button>
            </div>

            <div className="p-8 bg-beer-brown/5 border border-beer-brown/10 rounded-3xl">
              <ClipboardCheck className="h-10 w-10 text-beer-amber mb-6" />
              <h3 className="text-2xl font-bold mb-4">Judging Schedule</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-beer-brown/5">
                  <span className="text-sm font-bold">Morning Session</span>
                  <span className="text-xs bg-beer-brown text-beer-cream px-2 py-1 rounded">9:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-beer-brown/5">
                  <span className="text-sm font-bold">Afternoon Session</span>
                  <span className="text-xs bg-beer-brown text-beer-cream px-2 py-1 rounded">1:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-bold">Best of Show</span>
                  <span className="text-xs bg-beer-amber text-beer-brown px-2 py-1 rounded">5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-beer-brown">
                <MapPin className="text-beer-amber h-6 w-6" />
                Location Information
              </h2>
              <div className="p-6 bg-beer-brown text-beer-cream rounded-2xl shadow-lg inline-block">
                <p className="font-bold">Silver Branch Rockville Beerworks</p>
                <p>7301 Calhoun Pl #600</p>
                <p>Rockville, MD 20855</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-beer-brown">
                <Info className="text-beer-amber h-6 w-6" />
                Important Notes
              </h2>
              <ul className="space-y-4 text-beer-brown/80 leading-relaxed text-sm">
                <li className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-beer-amber mt-1.5 shrink-0" />
                  Judging is performed by BJCP-sanctioned judges. Non-BJCP brewers are encouraged to steward.
                </li>
                <li className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-beer-amber mt-1.5 shrink-0" />
                  Lunch and refreshments will be provided for all full-day volunteers.
                </li>
                <li className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-beer-amber mt-1.5 shrink-0" />
                  Judging sessions are educational and great for those working toward BJCP certification.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOFBRegistration;
