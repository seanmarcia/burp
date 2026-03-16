export interface ArticleContent {
  slug: string;
  title: string;
  category: string;
  author: string;
  date?: string;
  content: string[];
}

export const articlesData: Record<string, ArticleContent> = {
  'no-butter-in-my-beer': {
    slug: 'no-butter-in-my-beer',
    title: 'No Butter in my Beer Please!',
    category: 'Brewing Tips',
    author: 'BURP Technical Committee',
    content: [
      'Diacetyl. You know it when you taste it. Many describe it as slickness on the tongue and a buttery or butterscotch flavor. Some people have a lower threshold for it than others, but at high concentrations it is easily detectable. Diacetyl is a normal product of fermentation. Most judges recognize it as a fault. But some people don’t find it objectionable. They believe that a little Diacetyl provides a greater depth of flavor and “roundness” to the beer.',
      'In a description of mild on the CAMRA website it says: “Slight Diacetyl (toffee/butterscotch) flavors are not inappropriate.” And the BJCP style guidelines say this for Ordinary Bitters: “Generally no Diacetyl, although very low levels are allowed.” Reading between the lines, with English style Real Ales you can have a little detectable diacetyl. But if you want the beer to be a champion, its best to have none.',
      'Diacetyl can also be produced by unwanted bacteria, especially pediococcus. The biggest source of diacetyl is brewers’ yeast. Yeast cells create a diacetyl precursor called α-acetolacate. When the α-acetolacate exits the cell, it undergoes a chemical reaction and forms diacetyl. The reaction is relatively slow, but higher temperatures and low pH causes it to accelerate. Luckily, the yeast that produced the diacetyl in the first place, can absorb diacetyl and convert it into flavorless compounds.',
      '**Causes of diacetyl formation:**',
      '* Certain yeast strains are known to produce diacetyl;',
      '* Highly flocculent yeast strains may settle out before it has had a chance to take in the diacetyl;',
      '* Not enough oxygen during the initial fermentation stage;',
      '* Too much oxygen during the middle and end of fermentation;',
      '* Too low of a yeast pitching rate; and',
      '* A higher than optimal fermentation temperature.',
      '**Prevention and Mitigation:**',
      'The easiest way to help yeast scrub out diacetyl is a "diacetyl rest." Holding a beer at a temperature around 65–70 °F (18–21 °C) at the end of fermentation for one to two days will give the yeast time to take in the diacetyl. Diacetyl rests should be started when the specific gravity of a beer is between 1.002-1.005. Since Real Ales usually ferment at these temperatures, raising the temperature is not necessary, but the beer needs to sit for two to three days after fermentation appears to be complete. Racking the beer or crashing the temperature too quickly will increase the possibility of diacetyl remaining.',
      '**Summary for Competition-Ready Beer:**',
      '* Choose low diacetyl yeast strains that are not super flocculent.',
      '* Maintain strict sanitation.',
      '* Pitch enough yeast.',
      '* Do not under or over aerate.',
      '* Allow the beer to sit at 65–70 °F (18–21 °C) for a couple of days following the end of fermentation.'
    ]
  },
  'dry-hopping-101': {
    slug: 'dry-hopping-101',
    title: 'Dry Hopping 101',
    category: 'Brewing Tips',
    author: 'Mike Reintz',
    content: [
      'Dry-hopping is a great way to get a bright hop aroma in your beer along with a bit of flavor without adding additional bitterness (though a highly dry-hopped beer may have some perceived bitterness). You can dry-hop any beer, but generally it is reserved for more hop-forward styles (Pale Ale, IPA, Pilsner, some Stouts, California Common, etc.).',
      'Dry-hop after fermentation is complete to avoid stripping out hop volatiles by carbon dioxide that is gassing off. Some brewers choose to dry-hop directly in the primary after fermentation is complete or you can transfer to a secondary to do your dry-hopping. It all depends on how confident you are in the health of your yeast and how long you plan to dry-hop for post-fermentation.',
      'If using hop pellets, there is no need to put the hops in a hop bag. Simply put them in the top of the fermentor, and they will settle to the bottom (sometimes crash cooling will expedite this process). If using whole hops, a muslin or nylon hop bag is recommended. The bag of whole hops will naturally float, so you can use glass marbles or stainless steel ball bearings to help weigh the bag down (be sure to sanitize them first!).',
      'Hops have some natural anti-microbial qualities, and properly fermented beer should hinder the growth of any unsavory organisms. Therefore, there’s no need to worry about adding new hops to the beer post-fermentation.',
      'Most brewers choose to dry-hop for 3-7 days. There is some anecdotal evidence that prolonged dry-hopping will lend a grassy, vegetal character to the beer. I’ve had success with even dry-hopping in the keg when I know a beer is going to be consumed quickly. I use a metal tea ball stuffed with hops to prevent the dip tube from clogging.',
      '**NERD ALERT!**',
      'Hop oils are made up of hydrocarbons and oxygenated compounds. The former includes such compounds as humulene (herbal/spicy), myrcene (citrus/pine), & caryophyllene (herbal/spicy as well), which are very volatile, and most are driven off during the boil as well as fermentation. Oxygenated compounds like geraniol and linalool (both floral-like characteristics) are less volatile. Dry-hopping allows you to “replenish” those oils that were driven off.'
    ]
  }
};
