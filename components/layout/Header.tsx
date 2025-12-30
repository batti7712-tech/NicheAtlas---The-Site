
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { SITE_CONFIG } from '../../config';
import MenuIcon from '../icons/MenuIcon';
import XIcon from '../icons/XIcon';
import CartIcon from '../CartIcon';

const Header: React.FC = () => {
  const { settings } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-accent-teal-100 text-accent-teal-700' : 'text-slate-gray-700 hover:bg-slate-gray-100'
    }`;

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-deep-navy">
              {settings.siteName}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {SITE_CONFIG.navLinks.map((link) => (
                <NavLink key={link.name} to={link.href} className={navLinkClasses}>
                  {link.name}
                </NavLink>
              ))}
              <NavLink to="/admin" className={navLinkClasses}>
                Admin
              </NavLink>
              <CartIcon />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
             <CartIcon />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-slate-gray-600 hover:text-deep-navy hover:bg-slate-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-gray-100 focus:ring-accent-teal-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {SITE_CONFIG.navLinks.map((link) => (
              <NavLink key={link.name} to={link.href} className={`${navLinkClasses({isActive: false})} block`}>
                {link.name}
              </NavLink>
            ))}
             <NavLink to="/admin" className={`${navLinkClasses({isActive: false})} block`}>
                Admin
              </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
