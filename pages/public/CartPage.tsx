
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Button from '../../components/ui/Button';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, settings } = useAppContext();

  const subtotal = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  React.useEffect(() => {
    document.title = `Your Cart - ${settings.siteName}`;
  }, [settings.siteName]);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-deep-navy mb-4">Your Cart is Empty</h1>
        <p className="text-slate-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-deep-navy mb-8">Your Cart</h1>
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.slug} className="flex items-center justify-between p-4 border border-slate-gray-200 rounded-lg">
              <div className="flex items-center">
                <img src={item.featuredImage} alt={item.title} className="w-20 h-20 object-cover rounded-md mr-4"/>
                <div>
                  <h2 className="font-bold text-slate-gray-800">{item.title}</h2>
                  <p className="text-sm text-slate-gray-500">{item.type}</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="font-semibold text-slate-gray-800 mr-6">${(item.price || 0).toFixed(2)}</p>
                <Button variant="danger" onClick={() => removeFromCart(item.slug)}>Remove</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-slate-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-slate-gray-800">Total</h2>
            <p className="text-2xl font-bold text-deep-navy">${subtotal.toFixed(2)}</p>
          </div>
          <Link to="/checkout" className="mt-6 block">
            <Button className="w-full text-lg py-3">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
