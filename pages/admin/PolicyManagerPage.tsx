
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const PolicyManagerPage: React.FC = () => {
  const { policies } = useAppContext();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-gray-900">Manage Policies</h1>
      
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-slate-gray-200">
          <thead className="bg-slate-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-gray-500 uppercase tracking-wider">Policy Title</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-gray-200">
            {Object.entries(policies).map(([slug, policy]) => (
              <tr key={slug}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-slate-gray-900">{policy.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Link to={`/admin/policies/editor/${slug}`} className="text-accent-teal-600 hover:text-accent-teal-900">Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PolicyManagerPage;
