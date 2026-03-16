import { BookOpen, Search, Utensils, Beaker } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Article {
  slug: string;
  title: string;
  category: 'Technique' | 'Recipe' | 'Ingredient' | 'Technical' | 'Resource';
  excerpt: string;
  author: string;
  type: 'Beer' | 'Food' | 'Technical' | 'General';
}

const Enlightenment = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const articles: Article[] = [
    {
      slug: 'no-butter-in-my-beer',
      title: 'No Butter in my Beer',
      category: 'Technical',
      excerpt: 'A technical guide on identifying and preventing diacetyl (the "buttery" off-flavor) in homebrew. Covers yeast health, temperature control, and the "diacetyl rest".',
      author: 'BURP Technical Committee',
      type: 'Technical',
    },
    {
      slug: 'dry-hopping-101',
      title: 'Dry Hopping 101',
      category: 'Technique',
      excerpt: 'Explains the process of adding hops to the fermenter to enhance aroma without increasing bitterness. Includes tips on hop varieties, timing, and techniques.',
      author: 'BURP Education',
      type: 'Technical',
    },
    {
      slug: 'spicing-up-your-beer',
      title: 'Spicing Up your Beer',
      category: 'Technique',
      excerpt: 'A guide to using non-traditional ingredients like coriander, orange peel, and ginger. Advice on when to add spices to avoid overpowering the base beer.',
      author: 'BURP Recipes',
      type: 'Technical',
    },
    {
      slug: 'bottle-sanitation',
      title: 'Bottle Sanitation',
      category: 'Technique',
      excerpt: 'Focuses on the critical importance of cleanliness during the packaging phase. Reviews various sanitizers and best practices for infection-free bottles.',
      author: 'Quality Control',
      type: 'Technical',
    },
    {
      slug: 'a-better-way-to-chill-wort',
      title: 'A Better Way to Chill Wort',
      category: 'Technique',
      excerpt: 'Compares different cooling methods, such as immersion chillers and counter-flow chillers. Emphasizes the importance of a "cold break" for clarity.',
      author: 'Engineering Dept',
      type: 'Technical',
    },
    {
      slug: 'crystal-vs-caramel-malt',
      title: 'Crystal vs. Caramel Malt',
      category: 'Ingredient',
      excerpt: 'Clarifies the often-confusing terminology between these two malt types. Explains the kilning process and how they contribute body and color.',
      author: 'Malt Master',
      type: 'Technical',
    },
    {
      slug: 'an-introduction-to-carbonating-beers',
      title: 'An Introduction to Carbonating Beers',
      category: 'Technique',
      excerpt: 'Covers the basics of both natural bottle conditioning (using priming sugar) and forced carbonation in kegs. Breakdown of CO2 volumes by style.',
      author: 'Carbonation Expert',
      type: 'Technical',
    },
    {
      slug: 'brewing-pale-lager',
      title: 'Brewing Pale Lager',
      category: 'Technique',
      excerpt: 'A deep dive into the challenges of brewing clean, crisp lagers. Focuses on water chemistry, cold fermentation, and the extended lagering period.',
      author: 'Lager Specialist',
      type: 'Technical',
    },
    {
      slug: 'dark-mild',
      title: 'Dark Mild',
      category: 'Recipe',
      excerpt: 'A recipe for a classic English session ale. Emphasizes a complex malt bill to provide rich flavor at a low alcohol content (typically 3-4% ABV).',
      author: 'English Ale Fan',
      type: 'Beer',
    },
    {
      slug: 'dusseldorf-alt',
      title: 'Dusseldorf Alt',
      category: 'Recipe',
      excerpt: 'A traditional German amber ale recipe. Details the "hybrid" brewing process—fermenting with ale yeast at cooler temperatures and then lagering.',
      author: 'German Heritage',
      type: 'Beer',
    },
    {
      slug: 'rye-american-amber-ale',
      title: 'Rye American Amber Ale',
      category: 'Recipe',
      excerpt: 'A modern twist on the American Amber, using rye malt to add a spicy, grainy complexity that complements citrusy American hops.',
      author: 'Hop Head',
      type: 'Beer',
    },
    {
      slug: 'american-stout-black-scoter',
      title: 'American Stout (Black Scoter)',
      category: 'Recipe',
      excerpt: 'A robust stout recipe featuring heavy roasted notes of coffee and chocolate, balanced by a significant hop presence.',
      author: 'Stout Enthusiast',
      type: 'Beer',
    },
    {
      slug: 'food-and-beer-pairing',
      title: 'Food and Beer Pairing',
      category: 'Technical',
      excerpt: 'Educational piece on the "Three Cs" of pairing: Complement, Contrast, and Cut. Provides specific examples like sharp cheddar with IPA.',
      author: 'BURP Cicerone',
      type: 'Food',
    },
    {
      slug: 'homebrew-supply-shops',
      title: 'Homebrew Supply Shops',
      category: 'Resource',
      excerpt: 'A curated directory of local (DC/MD/VA) and online resources for sourcing grains, hops, yeast, and brewing hardware.',
      author: 'Community Hub',
      type: 'General',
    },
    {
      slug: 'water-chemistry-for-brewers',
      title: 'Water Chemistry for Brewers',
      category: 'Technical',
      excerpt: 'Overview of how mineral content affects mash pH and the final flavor perception of the beer. Essential for advanced brewing.',
      author: 'Water Lab',
      type: 'Technical',
    },
    {
      slug: 'yeast-starters-and-health',
      title: 'Yeast Starters and Health',
      category: 'Technical',
      excerpt: 'Explains how to calculate pitch rates and create a yeast starter to ensure a vigorous fermentation, especially for high-gravity beers.',
      author: 'Yeast Scientist',
      type: 'Technical',
    },
    {
      slug: 'understanding-bjcp-styles',
      title: 'Understanding BJCP Styles',
      category: 'Technical',
      excerpt: 'A guide for entering competitions, explaining how the BJCP categorizes beers based on aroma, appearance, flavor, and mouthfeel.',
      author: 'BJCP Judge',
      type: 'General',
    },
  ];

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl mb-4">Enlightenment</h1>
            <p className="text-xl text-beer-brown/70 leading-relaxed">
              Explore our vast archive of brewing techniques, award-winning recipes, and technical deep-dives to master the craft.
            </p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-beer-brown/40" />
            <input 
              type="text" 
              placeholder="Search articles & recipes..."
              className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-beer-brown/10 focus:outline-none focus:ring-2 focus:ring-beer-amber/50 transition shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-beer-brown/5 shadow-sm hover:shadow-md transition flex flex-col h-full group">
              <div className="flex items-center gap-2 mb-6">
                <span className={`p-2 rounded-lg transition-colors ${
                  article.type === 'Food' ? 'bg-orange-100 text-orange-600' : 
                  article.type === 'Technical' ? 'bg-blue-100 text-blue-600' :
                  'bg-beer-amber/10 text-beer-amber'
                }`}>
                  {article.type === 'Food' ? <Utensils className="h-5 w-5" /> : 
                   article.type === 'Technical' ? <Beaker className="h-5 w-5" /> :
                   <BookOpen className="h-5 w-5" />}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-beer-brown/50">
                  {article.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-beer-amber transition-colors">
                {article.title}
              </h3>
              
              <p className="text-beer-brown/70 mb-8 leading-relaxed flex-grow">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-beer-brown/5">
                <span className="text-sm font-medium text-beer-brown/60 italic">
                  By {article.author}
                </span>
                <Link 
                  to={`/enlightenment/${article.slug}`}
                  className="text-beer-amber font-bold text-sm hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-beer-brown/40 italic">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Enlightenment;
