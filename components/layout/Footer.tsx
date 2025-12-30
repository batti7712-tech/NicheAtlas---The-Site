
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../config';
import { useAppContext } from '../../context/AppContext';
import Button from '../ui/Button';
import Input from '../ui/Input';

const Footer: React.FC = () => {
  const { settings, policies } = useAppContext();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '') {
      // Mock API call simulation
      console.log(`Subscribing ${email} to the newsletter.`);
      setSubmitted(true);
      setEmail('');
    }
  };

  const socialIcons = [
    {
      name: 'Facebook',
      href: SITE_CONFIG.socialLinks.facebook,
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: SITE_CONFIG.socialLinks.instagram,
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118c-2.146 0-3.882 1.736-3.882 3.882s1.736 3.882 3.882 3.882 3.882-1.736 3.882-3.882-1.736-3.882-3.882-3.882zM12 14.333a2.333 2.333 0 110-4.666 2.333 2.333 0 010 4.666zm5.884-7.14a1.424 1.424 0 100 2.848 1.424 1.424 0 000-2.848z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: SITE_CONFIG.socialLinks.twitter,
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      href: SITE_CONFIG.socialLinks.pinterest,
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.96.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: SITE_CONFIG.socialLinks.linkedin,
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-12">
            {submitted ? (
                <div>
                    <h2 className="text-2xl font-bold text-deep-navy">Thank you for subscribing!</h2>
                    <p className="mt-2 text-slate-gray-600">You're now on the list to receive the latest updates.</p>
                </div>
            ) : (
                <>
                    <h2 className="text-2xl font-bold text-deep-navy">Stay Updated</h2>
                    <p className="mt-2 text-slate-gray-600">Get the latest articles and insights delivered straight to your inbox.</p>
                    <form onSubmit={handleNewsletterSubmit} className="mt-6 sm:flex sm:items-center sm:justify-center">
                        <div className="w-full sm:max-w-xs">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full px-3 py-2 border border-slate-gray-300 rounded-md shadow-sm placeholder-slate-gray-400 focus:outline-none focus:ring-accent-teal-500 focus:border-accent-teal-500 sm:text-sm"
                                placeholder="Enter your email"
                            />
                        </div>
                        <Button type="submit" className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto">
                            Subscribe
                        </Button>
                    </form>
                </>
            )}
        </div>
        
        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-slate-gray-200">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4" aria-label="Footer">
                {Object.entries(policies).map(([slug, policy]) => (
                    <Link key={slug} to={`/policy/${slug}`} className="text-sm text-slate-gray-500 hover:text-slate-gray-900">
                        {policy.title}
                    </Link>
                ))}
            </nav>
        </div>

        <div className="md:flex md:items-center md:justify-between border-t border-slate-gray-200 pt-8 mt-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {socialIcons.map((item) => (
                <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-gray-400 hover:text-slate-gray-500"
                >
                <span className="sr-only">{item.name}</span>
                {item.icon}
                </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-slate-gray-400">
              &copy; {new Date().getFullYear()} {settings.siteName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
