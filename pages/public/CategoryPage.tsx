
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import PostCard from '../../components/PostCard';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getPostsByCategory, categories, settings } = useAppContext();
  
  const category = categories.find(c => c.slug === slug);
  const posts = slug ? getPostsByCategory(slug) : [];
  
  useEffect(() => {
    if (category) {
      document.title = `${category.name} Posts - ${settings.siteName}`;
    }
  }, [category, settings.siteName]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <Link to="/" className="text-accent-teal-600 hover:underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent-teal-600 uppercase tracking-wider">Category</p>
            <h1 className="text-4xl font-extrabold text-deep-navy mt-2">{category.name}</h1>
        </div>
        
        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-gray-500">No posts found in this category yet.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
