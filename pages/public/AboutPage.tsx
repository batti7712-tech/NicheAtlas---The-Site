
import React, { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';

const AboutPage: React.FC = () => {
    const { settings } = useAppContext();

    useEffect(() => {
        document.title = `About Us - ${settings.siteName}`;
    }, [settings.siteName]);

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base font-semibold text-accent-teal-600 uppercase tracking-wider">Our Mission</p>
          <h1 className="mt-2 text-4xl font-extrabold text-deep-navy sm:text-5xl">Crafting Clarity in a Complex World</h1>
          <p className="mt-6 text-xl text-slate-gray-600">
            At {settings.siteName}, we believe in the power of specialized knowledge. Our platform is dedicated to bringing you high-quality, in-depth content across a diverse range of niches, written by passionate experts.
          </p>
        </div>
        <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-slate-gray-900">From Curiosity to Expertise</h2>
                    <p className="mt-4 text-lg text-slate-gray-600">
                        NicheAtlas was born from a simple idea: to create a space where curiosity is celebrated and knowledge is accessible. Whether you're a tech enthusiast, a world traveler, a financial guru, or someone passionate about wellness, you'll find a home here.
                    </p>
                     <p className="mt-4 text-lg text-slate-gray-600">
                        Our writers are not just content creators; they are practitioners, researchers, and specialists in their fields. This ensures that every article is not only well-written but also accurate, insightful, and actionable.
                    </p>
                </div>
                <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/aboutus/600/400" alt="Team working" className="object-cover" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
