import { useParams, Link, useNavigate } from 'react-router-dom';
import { eventsData } from '../data/events';
import { ArrowLeft, Calendar, Clock, MapPin, Info } from 'lucide-react';
import { useEffect } from 'react';

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const event = slug ? eventsData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl mb-8">Event Not Found</h1>
        <p className="text-xl text-beer-brown/60 mb-12">The event you are looking for does not exist or has been moved.</p>
        <Link to="/events" className="text-beer-amber font-bold hover:underline">
          Back to Events
        </Link>
      </div>
    );
  }

  const typeColors = {
    Meeting: 'bg-beer-amber/10 text-beer-amber border-beer-amber/20',
    Competition: 'bg-beer-brown/10 text-beer-brown border-beer-brown/20',
    Social: 'bg-green-100 text-green-800 border-green-200',
  };

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-beer-amber font-bold mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Calendar
        </button>

        <article className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-beer-brown/5">
          <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
            <span className={`px-4 py-1.5 rounded-full text-sm font-bold border ${typeColors[event.type]}`}>
              {event.type}
            </span>
            <div className="flex gap-4">
               <button className="bg-beer-amber text-beer-brown px-6 py-2 rounded-xl font-bold text-sm hover:scale-105 transition">Register to Attend</button>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl mb-10 leading-tight text-beer-brown">
            {event.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-beer-cream/20 p-6 rounded-2xl flex items-start gap-4">
              <Calendar className="h-6 w-6 text-beer-amber shrink-0" />
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-beer-brown/40 mb-1">When</p>
                <p className="text-beer-brown font-bold">{event.date}</p>
                <p className="text-sm text-beer-brown/60 flex items-center gap-1 mt-1">
                  <Clock className="h-3 w-3" /> {event.time}
                </p>
              </div>
            </div>
            
            <div className="bg-beer-cream/20 p-6 rounded-2xl flex items-start gap-4 md:col-span-2">
              <MapPin className="h-6 w-6 text-beer-amber shrink-0" />
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-beer-brown/40 mb-1">Where</p>
                <p className="text-beer-brown font-bold">{event.location}</p>
                <p className="text-sm text-beer-brown/60 mt-1">Full address provided to registered attendees.</p>
              </div>
            </div>
          </div>

          <div className="prose prose-beer max-w-none mb-12">
            {event.description.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-beer-brown/80 mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="bg-beer-brown/5 p-8 rounded-2xl border border-beer-brown/10">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-beer-amber" />
              About BURP Events
            </h3>
            <p className="text-sm text-beer-brown/70 leading-relaxed">
              BURP meetings are typically held at the private residences of our members. For privacy reasons, the exact address is only shared with active members or those who have registered for the event. Please remember to bring a tasting glass and, if the meeting includes a potluck, a dish to share.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default EventDetail;
