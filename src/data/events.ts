export interface EventContent {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'Meeting' | 'Competition' | 'Social';
  description: string[];
}

export const eventsData: Record<string, EventContent> = {
  'april-afters-2026': {
    slug: 'april-afters-2026',
    title: 'APRIL BURP MEETING (SOFB AFTERS)',
    date: '19 Apr 2026',
    time: '1:00 PM - 5:00 PM',
    location: 'Rockville, MD',
    type: 'Meeting',
    description: [
      "April's BURP Meeting will not have its own competition as it will be right on the heels of SOFB. We are likely to have plenty of SOFB leftovers -- please bring food to go with (and homebrew if you don't trust the SOFB leftovers!).",
      "This month's meeting is hosted at the Rozmans. This is a great opportunity to relax after the intensity of our biggest annual competition, hear the final results, and enjoy the camaraderie of fellow brewers.",
      "Please remember to bring your own tasting glass and any food pairings you'd like to share with the group."
    ]
  },
  'may-chili-cookoff-2026': {
    slug: 'may-chili-cookoff-2026',
    title: 'MAY 2026 COMPETITION (Best Beer with Chili)',
    date: '9 May 2026',
    time: '1:00 PM – 3:30 PM',
    location: 'Fairfax, VA',
    type: 'Competition',
    description: [
      "Best Beer with Chili—this will be a popular vote competition, so be sure to bring enough beer to share. Any style goes!",
      "Accompanying the beer competition is our annual Chili Cook-off. Bring a pot of your best chili (meat or veggie) to compete for the title of BURP Chili Master.",
      "The combination of spicy chili and expertly crafted homebrew makes this one of our most popular and flavorful meetings of the year."
    ]
  },
  'june-ipa-competition-2026': {
    slug: 'june-ipa-competition-2026',
    title: 'JUNE MEETING & IPA COMPETITION',
    date: '6 Jun 2026',
    time: '1:00 PM - 5:00 PM',
    location: 'Silver Spring, MD',
    type: 'Competition',
    description: [
      "The June meeting features our highly anticipated IPA Competition. We will be judging BJCP categories 12C (English IPA), 21 (American IPA), and 22A (Double IPA).",
      "This is a BJCP-judged competition, so please bring two 12oz bottles for evaluation. Feedback will be provided by certified judges.",
      "Even if you aren't entering, come to sample some of the best hoppy beers in the region and learn about the latest hop varieties and techniques."
    ]
  },
  'july-pool-party-2026': {
    slug: 'july-pool-party-2026',
    title: 'JULY POOL PARTY & CZECH LAGER COMPETITION',
    date: '18 Jul 2026',
    time: '12:00 PM - 6:00 PM',
    location: 'Silver Spring, MD',
    type: 'Social',
    description: [
      "Celebrate the height of summer with our annual pool party! This year we are featuring a popular vote competition for Czech Lagers (BJCP Category 3).",
      "Nothing beats a crisp, clean lager by the poolside. Bring your best Bohemian-style pilsners and other Czech specialties.",
      "Swimwear is encouraged, and don't forget your sunscreen and a tasting glass!"
    ]
  },
  'september-oktoberfest-2026': {
    slug: 'september-oktoberfest-2026',
    title: 'OKTOBERFEST AT SENECA CREEK',
    date: '19 Sep 2026',
    time: '11:00 AM - 4:00 PM',
    location: 'Gaithersburg, MD',
    type: 'Social',
    description: [
      "Join us at Seneca Creek State Park for our traditional Oktoberfest celebration. We'll be pouring German-style beers (BJCP categories 4-10) and enjoying traditional fare.",
      "This is a family-friendly event in a beautiful park setting. Expect plenty of Märzen, Festbier, and Hefeweizen.",
      "We will have a reserved pavilion. Please check the forum for specific directions and parking information."
    ]
  }
};
