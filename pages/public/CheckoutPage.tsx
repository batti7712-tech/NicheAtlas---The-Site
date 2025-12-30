
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const CheckoutPage: React.FC = () => {
  const { cart, clearCart, settings } = useAppContext();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  useEffect(() => {
    if (cart.length === 0 && !purchaseComplete) {
      navigate('/shop');
    }
    document.title = `Checkout - ${settings.siteName}`;
  }, [cart, purchaseComplete, navigate, settings.siteName]);

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      setPurchaseComplete(true);
      setTimeout(() => navigate('/'), 3000);
    }, 1500);
  };

  if (purchaseComplete) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-3xl font-bold text-deep-navy mb-4">Thank You For Your Purchase!</h1>
            <p className="text-slate-gray-600 mb-2">Your download links have been mock-sent to your email.</p>
            <p className="text-slate-gray-500">Redirecting you to the homepage...</p>
        </div>
    );
  }

  return (
    <div className="bg-slate-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-deep-navy mb-8 text-center">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-slate-gray-800 mb-6">Billing Information</h2>
                <form onSubmit={handlePurchase} className="space-y-6">
                    <Input label="Full Name" id="name" type="text" required />
                    <Input label="Email Address" id="email" type="email" required />
                    <Button type="submit" className="w-full text-lg py-3" disabled={isProcessing}>
                        {isProcessing ? 'Processing...' : `Pay $${subtotal.toFixed(2)}`}
                    </Button>
                </form>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-slate-gray-800 mb-6">Order Summary</h2>
                <div className="space-y-4">
                {cart.map(item => (
                    <div key={item.slug} className="flex justify-between items-center text-sm">
                        <span className="text-slate-gray-600">{item.title}</span>
                        <span className="font-medium text-slate-gray-800">${(item.price || 0).toFixed(2)}</span>
                    </div>
                ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-gray-200 flex justify-between items-center font-bold text-lg">
                    <span className="text-slate-gray-900">Total</span>
                    <span className="text-deep-navy">${subtotal.toFixed(2)}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
