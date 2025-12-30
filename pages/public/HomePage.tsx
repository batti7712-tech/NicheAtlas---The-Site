
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import PostCard from '../../components/PostCard';

const HomePage: React.FC = () => {
  const { posts, categories, settings } = useAppContext();
  
  useEffect(() => {
    document.title = `${settings.siteName} - Home`;
  }, [settings.siteName]);

  const latestPosts = posts.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-deep-navy tracking-tight">
            Explore Your Niche. Expand Your World.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-gray-600">
            Welcome to {settings.siteName}, your curated source for insights across tech, lifestyle, finance, and more.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-slate-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-gray-900 mb-8">Trending Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center"
              >
                <h3 className="font-semibold text-slate-gray-800">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-gray-900 mb-12">Latest Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
