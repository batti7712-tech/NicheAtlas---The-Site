
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Button from '../../components/ui/Button';

const ContentManagerPage: React.FC = () => {
  const { posts, deletePost } = useAppContext();

  return (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-slate-gray-900">Content Manager</h1>
            <Link to="/admin/editor">
                <Button>Create New Post</Button>
            </Link>
        </div>
      
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-slate-gray-200">
                <thead className="bg-slate-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-gray-500 uppercase tracking-wider">Title</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-gray-500 uppercase tracking-wider">Category</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-gray-200">
                    {posts.map((post) => (
                        <tr key={post.slug}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-slate-gray-900">{post.title}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-accent-teal-100 text-accent-teal-800">
                                    {post.category}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-gray-500">
                                {new Date(post.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                                <Link to={`/admin/editor/${post.slug}`} className="text-accent-teal-600 hover:text-accent-teal-900">Edit</Link>
                                <button onClick={() => deletePost(post.slug)} className="text-red-600 hover:text-red-900">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default ContentManagerPage;
