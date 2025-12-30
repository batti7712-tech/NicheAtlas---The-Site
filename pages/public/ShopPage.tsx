
import React, { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import ProductCard from '../../components/ProductCard';

const ShopPage: React.FC = () => {
  const { products, settings } = useAppContext();

  useEffect(() => {
    document.title = `Shop - Free Resources - ${settings.siteName}`;
  }, [settings.siteName]);

  return (
    <div>
      {/* Header Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy tracking-tight">
            Free Digital Resources
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-gray-600">
            Browse our collection of free e-books and printables designed to help you learn and grow.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-slate-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-gray-500">No products available at the moment. Check back soon!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
