
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';
import Button from '../../components/ui/Button';

const ContactPage: React.FC = () => {
  const { settings } = useAppContext();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = `Contact Us - ${settings.siteName}`;
  }, [settings.siteName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h1 className="text-3xl font-extrabold text-deep-navy">Thank You!</h1>
                 <p className="mt-4 text-lg text-slate-gray-600">Your message has been sent. We'll get back to you shortly.</p>
            </div>
        </div>
    )
  }

  return (
    <div className="bg-slate-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base font-semibold text-accent-teal-600 uppercase tracking-wider">Get in Touch</p>
          <h1 className="mt-2 text-4xl font-extrabold text-deep-navy sm:text-5xl">We'd Love to Hear From You</h1>
          <p className="mt-6 text-xl text-slate-gray-600">
            Whether you have a question, feedback, or a story to share, our team is ready to answer all your inquiries.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input label="Full Name" id="name" type="text" required />
                    <Input label="Email Address" id="email" type="email" required />
                    <Textarea label="Message" id="message" rows={4} required />
                    <div>
                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
