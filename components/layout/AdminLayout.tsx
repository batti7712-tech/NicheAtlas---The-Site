
import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config';
import { useAppContext } from '../../context/AppContext';

const AdminLayout: React.FC = () => {
  const { settings } = useAppContext();
    
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
      isActive
        ? 'bg-accent-teal-500 text-white'
        : 'text-slate-gray-100 hover:bg-deep-navy/50 hover:text-white'
    }`;

  return (
    <div className="min-h-screen bg-slate-gray-100 flex">
      <aside className="w-64 bg-deep-navy text-white flex-shrink-0 flex flex-col">
        <div className="h-16 flex items-center justify-center px-4 border-b border-slate-gray-700">
          <Link to="/admin" className="text-xl font-bold">
            {settings.siteName} Admin
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {SITE_CONFIG.adminNavLinks.map((link) => (
            <NavLink key={link.name} to={link.href} className={navLinkClasses}>
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-gray-700">
            <Link to="/" className="text-sm text-slate-gray-300 hover:text-white transition-colors">
                &larr; Back to Site
            </Link>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-gray-200 flex items-center px-8">
            <h1 className="text-xl font-semibold text-slate-gray-800">Dashboard</h1>
        </header>
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
