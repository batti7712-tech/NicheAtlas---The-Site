
import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '../types';
import { useAppContext } from '../context/AppContext';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { categories } = useAppContext();
  const category = categories.find(c => c.slug === post.category);

  return (
    <article className="group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-6">
        {category && (
          <Link
            to={`/category/${category.slug}`}
            className="inline-block text-xs font-semibold text-accent-teal-600 uppercase tracking-wider mb-2 hover:text-accent-teal-800"
          >
            {category.name}
          </Link>
        )}
        <h2 className="text-xl font-bold text-slate-gray-900 mb-2 leading-tight">
          <Link to={`/post/${post.slug}`} className="hover:text-accent-teal-700 transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-slate-gray-600 text-sm mb-4 line-clamp-3">
          {post.metaDescription}
        </p>
        <div className="flex items-center">
          <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="text-sm font-semibold text-slate-gray-800">{post.author}</p>
            <p className="text-xs text-slate-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} &middot; {post.readingTime} min read
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
