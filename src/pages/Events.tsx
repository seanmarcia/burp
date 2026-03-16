import { Calendar, MapPin, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventProps {
  slug: string;
  date: string;
  title: string;
  location: string;
  description: string;
  type: 'Meeting' | 'Competition' | 'Social';
}

const EventCard = ({ slug, date, title, location, description, type }: EventProps) => {
  const typeColors = {
    Meeting: 'bg-beer-amber/10 text-beer-amber border-beer-amber/20',
    Competition: 'bg-beer-brown/10 text-beer-brown border-beer-brown/20',
    Social: 'bg-green-100 text-green-800 border-green-200',
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-beer-brown/10 p-6 hover:shadow-md transition group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-sm font-bold text-beer-brown/60">
          <Calendar className="h-4 w-4" />
          {date}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${typeColors[type]}`}>
          {type}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-beer-amber transition-colors">{title}</h3>
      <div className="flex items-center gap-2 text-sm text-beer-brown/70 mb-4">
        <MapPin className="h-4 w-4 text-beer-amber" />
        {location}
      </div>
      <p className="text-beer-brown/80 text-sm leading-relaxed mb-6 line-clamp-2">
        {description}
      </p>
      <Link 
        to={`/events/${slug}`}
        className="block w-full py-2 bg-beer-brown text-beer-cream rounded-lg text-sm font-bold hover:bg-opacity-90 transition text-center"
      >
        View Details
      </Link>
    </div>
  );
};

const Events = () => {
  const upcomingEvents: EventProps[] = [
    {
      slug: 'april-afters-2026',
      date: 'April 19, 2026',
      title: 'April BURP Meeting (SOFB Afters)',
      location: 'Rockville, MD',
      description: 'Post-competition celebration and monthly meeting. Reviewing results from the Spirit of Free Beer.',
      type: 'Meeting',
    },
    {
      slug: 'may-chili-cookoff-2026',
      date: 'May 9, 2026',
      title: 'Chili Cook-Off & Competition',
      location: 'Fairfax, VA',
      description: 'Our annual spicy showdown! Bring your best chili and a matching brew for the popular vote.',
      type: 'Competition',
    },
    {
      slug: 'june-ipa-competition-2026',
      date: 'June 6, 2026',
      title: 'June Meeting & IPA Competition',
      location: 'Silver Spring, MD',
      description: 'BJCP judged competition for all IPA categories (12C, 21, 22A). Hoppy goodness guaranteed.',
      type: 'Competition',
    },
    {
      slug: 'july-pool-party-2026',
      date: 'July 18, 2026',
      title: 'Pool Party & Czech Lager Competition',
      location: 'Silver Spring, MD',
      description: 'Celebrate summer with crisp Czech lagers (BJCP Category 3) and a refreshing dip in the pool.',
      type: 'Social',
    },
    {
      slug: 'september-oktoberfest-2026',
      date: 'September 19, 2026',
      title: 'Oktoberfest at Seneca Creek',
      location: 'Gaithersburg, MD',
      description: 'Prost! Celebrating German heritage with traditional beers and food in the park.',
      type: 'Social',
    },
  ];

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl mb-4 text-beer-brown">Events & Calendar</h1>
          <p className="text-xl text-beer-brown/70 max-w-2xl">
            Join us for monthly meetings, competitions, and social gatherings across the DC, Maryland, and Virginia area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <div className="mt-20 bg-beer-brown text-beer-cream rounded-3xl p-12 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Trophy className="h-64 w-64" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-beer-amber text-3xl mb-6">Annual Highlight: Spirit of Free Beer</h2>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              The Spirit of Free Beer (SOFB) is one of the premier regional homebrew competitions in the Mid-Atlantic. Sanctioned by the BJCP, it attracts hundreds of entries from across the country.
            </p>
            <Link to="/sofb" className="inline-block bg-beer-amber text-beer-brown px-8 py-3 rounded-xl font-bold hover:scale-105 transition transform text-center">
              Learn About SOFB 2026
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
