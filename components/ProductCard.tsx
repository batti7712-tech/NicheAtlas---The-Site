
import React from 'react';
import type { Product } from '../types';
import Button from './ui/Button';
import { useAppContext } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useAppContext();
  const isFree = !product.price || product.price === 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="relative">
        <img
          src={product.featuredImage}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <span className="inline-block text-xs font-semibold text-accent-teal-600 uppercase tracking-wider">
              {product.type}
            </span>
            {!isFree && (
                <span className="text-lg font-bold text-deep-navy">${product.price?.toFixed(2)}</span>
            )}
        </div>
        <h2 className="text-xl font-bold text-slate-gray-900 mb-2 leading-tight">
          {product.title}
        </h2>
        <p className="text-slate-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {product.description}
        </p>
        {isFree && <p className="text-sm font-semibold text-green-600 mb-4">Free to Download</p>}
        <div className="mt-auto">
          {isFree ? (
            <a href={product.downloadUrl} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full">Download Free</Button>
            </a>
          ) : (
            <Button onClick={() => addToCart(product)} className="w-full">
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
