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
  },
  'an-introduction-to-carbonating-beers': {
    slug: 'an-introduction-to-carbonating-beers',
    title: 'An Introduction to Carbonating Beers',
    category: 'Technique',
    author: 'Carbonation Expert',
    content: [
      'Carbonation is the final touch that brings your beer to life. It affects not only the appearance (the head) but also the mouthfeel and how the flavors are delivered to your palate.',
      'There are two primary ways for homebrewers to carbonate their beer: natural bottle conditioning and forced carbonation.',
      '**Bottle Conditioning:** This involves adding a small, measured amount of "priming sugar" to the fermented beer just before bottling. The remaining yeast in the beer will ferment this sugar, creating CO2 that stays trapped inside the bottle. Typically, this takes 2-3 weeks at room temperature.',
      '**Forced Carbonation:** This is done in kegs by applying CO2 pressure from a tank. The gas dissolves into the cold beer over several days (or more quickly if you use the "burst carbonation" method). It allows for much more precise control over the carbonation level.',
      'Different beer styles require different volumes of CO2. For example, British Bitters are typically low (1.5-2.0 volumes), while Belgian Tripels or Hefeweizens are much higher (3.0-4.5 volumes).'
    ]
  },
  'brewing-pale-lager': {
    slug: 'brewing-pale-lager',
    title: 'Brewing Pale Lager',
    category: 'Technique',
    author: 'Lager Specialist',
    content: [
      'Brewing a clean, crisp pale lager is often considered a "rite of passage" for advanced homebrewers. Unlike ales, lagers have nowhere for off-flavors to hide.',
      '**Temperature Control:** This is the most critical factor. Lager yeast (Saccharomyces pastorianus) works best at 45–55 °F (7–13 °C). Fermenting too warm will produce esters and phenols that are inappropriate for the style.',
      '**The Pitching Rate:** You need significantly more yeast for a lager than for an ale—typically double the cell count. A large yeast starter is essential.',
      '**Lagering:** After fermentation is complete, the beer should be "lagered" (stored cold) at near-freezing temperatures for several weeks. This allows the yeast to clean up, the proteins to settle, and the flavors to mellow into the classic crisp character.',
      '**Water Chemistry:** For a classic Czech or German-style pilsner, starting with very soft water allows the delicate malt and hop characters to shine through without being harsh.'
    ]
  },
  'dark-mild': {
    slug: 'dark-mild',
    title: 'Dark Mild',
    category: 'Recipe',
    author: 'English Ale Fan',
    content: [
      'Dark Mild is a classic English session ale that is unfortunately rare in the United States. It is a beer that provides a huge amount of flavor and complexity at a very low ABV (usually 3.0-3.8%).',
      '**The Malt Bill:** This is where the magic happens. Use a high-quality British Pale Ale malt (like Maris Otter) as the base. Add a mix of Crystal 60L, Crystal 120L, Chocolate malt, and perhaps a touch of Black malt. Some brewers also use flaked maize or invert sugar for authenticity.',
      '**Hops:** Hops should be restrained. Use traditional English varieties like East Kent Goldings or Fuggles. The goal is just enough bitterness to balance the malt sweetness.',
      '**Yeast:** Use a characterful English ale yeast that leaves some residual sweetness and provides those classic fruity esters.',
      '**Serving:** Ideally, Dark Mild should be served at cellar temperature with low carbonation to mimic the experience of a fresh cask ale.'
    ]
  },
  'dusseldorf-alt': {
    slug: 'dusseldorf-alt',
    title: 'Dusseldorf Alt',
    category: 'Recipe',
    author: 'German Heritage',
    content: [
      'Altbier (German for "old beer") is the traditional style of Düsseldorf. It is a "hybrid" style: it is fermented with an ale yeast but then conditioned cold like a lager.',
      '**The Grist:** German Pilsner and Munich malts form the core. A small amount of Carafa Special (de-husked chocolate malt) provides the deep amber-to-copper color without adding roasted or acrid flavors.',
      '**Hops:** This is a firm, bitter style. Use noble German hops like Spalt, Tettnang, or Hallertau. The bitterness should be clean and assertive.',
      '**Fermentation:** Use a dedicated Altbier yeast strain. Ferment cool (around 58–62 °F) to keep the yeast character clean, then lager for 4-6 weeks.',
      'The result should be a brilliantly clear, copper-colored beer with a rich, nutty malt profile and a sharp, clean hop finish.'
    ]
  },
  'rye-american-amber-ale': {
    slug: 'rye-american-amber-ale',
    title: 'Rye American Amber Ale',
    category: 'Recipe',
    author: 'Hop Head',
    content: [
      'This recipe takes the classic American Amber Ale and adds the unique, spicy kick of rye malt.',
      '**Rye Malt:** Aim for about 10-15% of the total grist. Rye adds a wonderful grainy complexity and a slickness to the mouthfeel. Be careful, as too much rye can make the mash "sticky" and lead to a stuck sparge.',
      '**The Hops:** Use bold American varieties like Centennial, Chinook, or Simcoe. The citrusy and piney notes of these hops pair perfectly with the spiciness of the rye.',
      '**The Balance:** Unlike an IPA, an Amber Ale needs a solid malt backbone. Use Crystal 40L or 60L to provide some caramel sweetness and body to support the hops and the rye.',
      '**The Yeast:** A clean American ale yeast (US-05) is the best choice to let the ingredients speak for themselves.'
    ]
  },
  'american-stout-black-scoter': {
    slug: 'american-stout-black-scoter',
    title: 'American Stout (Black Scoter)',
    category: 'Recipe',
    author: 'Stout Enthusiast',
    content: [
      'The "Black Scoter" is a robust American Stout designed for the cold winters of the Mid-Atlantic. It is dark, heavy, and unapologetically hoppy.',
      '**The Roasted Grains:** Use a combination of Roasted Barley and Black Patent malt for that classic coffee and dark chocolate character. About 10% of the grist should be roasted malts.',
      '**American Hop Character:** Unlike English stouts, American stouts feature significant late-addition hops and even dry-hopping. Use high-alpha hops like Columbus or Cascade.',
      '**Body:** This beer should have a full mouthfeel. Don\'t be afraid to mash a bit higher (154–156 °F) to leave some unfermentable sugars for body.',
      'The name comes from the Black Scoter, a sea duck often seen on the Chesapeake Bay during the winter months.'
    ]
  },
  'food-and-beer-pairing': {
    slug: 'food-and-beer-pairing',
    title: 'Food and Beer Pairing',
    category: 'Technical',
    author: 'BURP Cicerone',
    content: [
      'Beer is often a better partner for food than wine because of its wide range of flavors, carbonation, and the presence of hops. The key to a great pairing is the "Three Cs".',
      '**Complement:** Match similar flavors. A rich, chocolatey Imperial Stout pairs beautifully with a dark chocolate cake.',
      '**Contrast:** Use opposing flavors to create balance. The sharp, fruity acidity of a Berliner Weisse can cut through the richness of a fatty dish like fried chicken.',
      '**Cut:** Carbonation and hop bitterness are excellent at "cutting" through heavy fats and cleaning the palate between bites.',
      '**Intensity:** Always match the intensity of the beer with the intensity of the food. A delicate Pilsner will be overwhelmed by a spicy curry, while a Barleywine will crush a light salad.'
    ]
  },
  'homebrew-supply-shops': {
    slug: 'homebrew-supply-shops',
    title: 'Homebrew Supply Shops',
    category: 'Resource',
    author: 'Community Hub',
    content: [
      'Supporting your local homebrew supply shop (LHBS) is vital for the health of the brewing community. Here are some resources for brewers in the DC/MD/VA area.',
      '**Maryland:** Check out Maryland Homebrew in Columbia. They have an extensive selection of grains and a very knowledgeable staff.',
      '**Virginia:** myLHBS in Falls Church is a staple for Northern Virginia brewers, offering everything from basic kits to advanced hardware.',
      '**D.C.:** While there are fewer shops in the District itself, many members participate in group buys for grain and hops through the BURP forum.',
      '**Online:** For specialty items not found locally, shops like Northern Brewer or MoreBeer offer fast shipping to our region.',
      'Always check the BURP forum for current member discounts at these locations!'
    ]
  },
  'understanding-bjcp-styles': {
    slug: 'understanding-bjcp-styles',
    title: 'Understanding BJCP Styles',
    category: 'Technical',
    author: 'BJCP Judge',
    content: [
      'The Beer Judge Certification Program (BJCP) provides the standards used in almost all homebrew competitions. Understanding these guidelines is key to entering and winning.',
      '**The Categories:** The BJCP divides beers into categories based on their history and characteristics. For example, Category 1 covers Standard American Beer, while Category 21 covers IPAs.',
      '**Judging Criteria:** Judges evaluate beer based on four main sections: Aroma, Appearance, Flavor, and Mouthfeel. Each section has a specific point value on the scoresheet.',
      '**Entering a Competition:** When you enter, you must specify the style. It doesn\'t matter what you intended to brew; what matters is what is in the bottle. If your "Amber Ale" tastes exactly like an IPA, you should probably enter it as an IPA.',
      '**The Score:** A perfect score is 50. Most well-made homebrews score in the 30s ("Very Good"), while scores above 40 ("Excellent") are required to reach the Best of Show round.'
    ]
  }
};
