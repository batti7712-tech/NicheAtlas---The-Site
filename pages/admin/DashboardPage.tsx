
import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

const StatCard: React.FC<{ title: string; value: string | number; icon?: React.ReactNode }> = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-sm font-medium text-slate-gray-500 uppercase">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-slate-gray-900">{value}</p>
    </div>
  );
};

const DashboardPage: React.FC = () => {
  const { posts, categories } = useAppContext();

  // Simulated total views
  const totalViews = posts.length * 1234;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-gray-900">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Posts" value={posts.length} />
        <StatCard title="Total Categories" value={categories.length} />
        <StatCard title="Total Views" value={totalViews.toLocaleString()} />
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-slate-gray-800">Recent Posts</h2>
            <Link to="/admin/content" className="text-sm font-medium text-accent-teal-600 hover:text-accent-teal-800">View all</Link>
        </div>
        <ul className="divide-y divide-slate-gray-200">
            {posts.slice(0, 5).map(post => (
                <li key={post.slug} className="py-3 flex justify-between items-center">
                    <div>
                        <p className="font-medium text-slate-gray-900">{post.title}</p>
                        <p className="text-sm text-slate-gray-500">{post.category}</p>
                    </div>
                    <Link to={`/admin/editor/${post.slug}`} className="text-sm font-medium text-accent-teal-600 hover:underline">Edit</Link>
                </li>
            ))}
        </ul>
      </div>

    </div>
  );
};

export default DashboardPage;
