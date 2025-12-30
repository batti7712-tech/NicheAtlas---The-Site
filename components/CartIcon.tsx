
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const CartIcon: React.FC = () => {
    const { cart } = useAppContext();
    const itemCount = cart.length;

    return (
        <Link
            to="/cart"
            className="relative p-2 text-slate-gray-600 hover:text-deep-navy transition-colors"
            aria-label={`Shopping cart with ${itemCount} items`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-teal-500 text-xs font-medium text-white">
                    {itemCount}
                </span>
            )}
        </Link>
    );
};

export default CartIcon;
