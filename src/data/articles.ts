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
    category: 'Technical',
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
    category: 'Technique',
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
  },
  'spicing-up-your-beer': {
    slug: 'spicing-up-your-beer',
    title: 'Spicing Up your Beer',
    category: 'Technique',
    author: 'Steve Marler',
    content: [
      'Balance is critical when brewing herb and spice beers. The goal is to maintain the base beer character while adding a mysterious blending of flavors where individual ingredients don’t jump out. It should be a harmonious addition, not an overpowering one.',
      'BURP member Polly Goldman recommends a "Rule of Three": use no more than three individual herbs or spices to avoid overcomplicating and unbalancing the flavor profile. This helps keep the focus on the quality of the ingredients and the base beer style.',
      'It is incredibly easy to overdose a beer with spice. To avoid this, consider making a "spice potion" (a concentrated tea of your spices) and adding it in measured amounts to small samples of your beer. Once you find the perfect ratio, scale up to the full batch.',
      'Timing is also key. If you are brewing for holiday gatherings in November or December, start your spiced batches early enough to allow the flavors to meld and the beer to properly condition. Many spices, like cinnamon or clove, can be harsh when fresh and benefit from a few weeks of aging.'
    ]
  },
  'bottle-sanitation': {
    slug: 'bottle-sanitation',
    title: 'Bottle Sanitation',
    category: 'Technique',
    author: 'Quality Control',
    content: [
      'Proper bottle sanitation is the final, critical step in the brewing process. If your bottles aren\'t clean, all the hard work you put into the brew can be ruined by infection or off-flavors.',
      '**Step 1: The Soak.** Mix one scoop of OxyClean with 5 gallons of water. Fully submerge your bottles and let them sit for at least one week. This long soak dissolves label glue and loosens any yeast or "gunk" inside the bottles.',
      '**Step 2: The Rinse.** Use a brass jet bottle washer attached to your sink to flush the insides with hot water. Three quick blasts are usually enough to clear any residue left from the soak.',
      '**Step 3: Sanitizing.** On bottling day, use a no-rinse sanitizer like Star San. Use a bottle pump or sulfiter to spray the sanitizer inside, then place the bottles on a bottle tree to drain.',
      'By the time you have primed your beer and are ready to bottle, the bottles will be mostly dry and sanitized, ready for filling. Always rinse the outside of the bottles after capping to remove any spills.'
    ]
  },
  'a-better-way-to-chill-wort': {
    slug: 'a-better-way-to-chill-wort',
    title: 'A Better Way to Chill Wort',
    category: 'Technique',
    author: 'Engineering Dept',
    content: [
      'Getting your wort from boiling to pitching temperature as quickly as possible is vital for beer quality. A rapid chill produces a better "cold break," which results in a clearer final product and helps prevent the production of DMS (Dimethyl Sulfide).',
      '**Immersion Chillers:** These are copper coils placed directly into the boiling wort. Cold water runs through the coils, pulling heat away. They are easy to sanitize and use, but can be slow if the ground water is warm.',
      '**Counter-Flow Chillers:** These use a tube-within-a-tube design. Hot wort runs one way, cold water runs the other. They are highly efficient but require more careful cleaning and sanitation after use.',
      '**Plate Chillers:** Extremely compact and efficient, these use a series of plates to transfer heat. Like counter-flow chillers, they are prone to clogging if you have a lot of hop material or trub in the kettle.',
      'Whichever method you choose, aim for a chill that takes less than 20 minutes to reach pitching temperature for optimal results.'
    ]
  },
  'crystal-vs-caramel-malt': {
    slug: 'crystal-vs-caramel-malt',
    title: 'Crystal vs. Caramel Malt',
    category: 'Ingredient',
    author: 'Malt Master',
    content: [
      'The terms "Crystal" and "Caramel" are often used interchangeably, but there are subtle differences in how they are produced and how they affect your beer.',
      '**Crystal Malts:** These are typically produced from green malt that is "stewed" in the kiln to convert starches to sugars, then kilned at higher temperatures to caramelize those sugars. This process results in a glassy, crystalline structure inside the grain.',
      '**Caramel Malts:** While similar, some maltsters use the term "Caramel" for malts that are produced in a drum roaster rather than a kiln. This can lead to a more intense, uniform caramelization and a different flavor profile, often described as more toffee-like.',
      'In general, these malts provide body, head retention, and a range of flavors from light honey and caramel to dark fruit and raisin, depending on their color (Lovibond rating). Light crystal (10-20L) adds sweetness and body, while dark crystal (80-120L) adds deep color and complex fruit notes.'
    ]
  },
  'water-chemistry-for-brewers': {
    slug: 'water-chemistry-for-brewers',
    title: 'Water Chemistry for Brewers',
    category: 'Technical',
    author: 'Water Lab',
    content: [
      'Water makes up over 90% of your beer, so its mineral content is highly significant. Understanding your local water profile is the first step toward advanced brewing.',
      '**Calcium:** The most important mineral for brewers. It aids in enzyme activity during the mash, helps yeast flocculation, and improves clarity. Aim for 50-150 ppm.',
      '**Magnesium:** Essential for yeast health, but too much (over 50 ppm) can lead to a laxative effect and a metallic bitterness.',
      '**Sulfate vs. Chloride:** This ratio defines the beer\'s balance. A high sulfate-to-chloride ratio (e.g., 3:1) accentuates hop bitterness, making it "crisp." A high chloride-to-sulfate ratio favors the malt, making the beer "full" and "round."',
      '**pH Control:** The minerals in your water interact with the malt to determine the mash pH. For most beers, a mash pH of 5.2-5.4 is ideal for enzyme efficiency and flavor extraction.'
    ]
  },
  'yeast-starters-and-health': {
    slug: 'yeast-starters-and-health',
    title: 'Yeast Starters and Health',
    category: 'Technical',
    author: 'Yeast Scientist',
    content: [
      'Pitching the correct amount of healthy yeast is one of the biggest improvements a homebrewer can make. A yeast starter ensures that your yeast are awake, healthy, and numerous enough to handle the job.',
      '**When to make a starter:** Always for lagers, always for high-gravity beers (above 1.060), and whenever your liquid yeast package is near its expiration date.',
      '**How to make one:** Use Dry Malt Extract (DME) to create a small batch of wort with a gravity of about 1.030-1.040. Boil, cool, and add your yeast. Using a stir plate will significantly increase the yeast cell count by providing constant aeration.',
      '**Pitching:** Allow the starter to ferment out (usually 24-48 hours). You can either pitch the entire starter or "cold crash" it in the fridge, pour off the spent beer (decant), and pitch only the concentrated yeast slurry.'
    ]
  }
};
