import { useParams, Link, useNavigate } from 'react-router-dom';
import { articlesData } from '../data/articles';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';
import { useEffect } from 'react';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? articlesData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl mb-8">Article Not Found</h1>
        <p className="text-xl text-beer-brown/60 mb-12">The article you are looking for does not exist or has been moved.</p>
        <Link to="/enlightenment" className="text-beer-amber font-bold hover:underline">
          Back to Enlightenment
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-beer-amber font-bold mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>

        <article className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-beer-brown/5">
          <div className="flex flex-wrap items-center gap-6 mb-10 text-sm font-bold uppercase tracking-widest text-beer-brown/40">
            <span className="flex items-center gap-2 bg-beer-amber/10 text-beer-amber px-3 py-1 rounded-full">
              <Tag className="h-4 w-4" />
              {article.category}
            </span>
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              5 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl mb-12 leading-tight text-beer-brown">
            {article.title}
          </h1>

          <div className="prose prose-beer max-w-none">
            {article.content.map((paragraph, index) => {
              if (paragraph.startsWith('**') || paragraph.startsWith('*')) {
                // Basic markdown handling for bold and lists
                return (
                  <p key={index} className="text-lg leading-relaxed text-beer-brown/80 mb-6 font-medium">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              }
              return (
                <p key={index} className="text-lg leading-relaxed text-beer-brown/80 mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-20 pt-10 border-t border-beer-brown/10 text-center">
            <h3 className="text-xl mb-6">Was this article helpful?</h3>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-2 bg-beer-amber text-beer-brown rounded-full font-bold hover:scale-105 transition">Yes, thanks!</button>
              <button className="px-6 py-2 border border-beer-brown/20 text-beer-brown/60 rounded-full font-bold hover:bg-beer-brown/5 transition">I have questions</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
