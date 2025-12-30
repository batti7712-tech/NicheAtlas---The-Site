
import React from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-gray-700 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        className="block w-full px-3 py-2 border border-slate-gray-300 rounded-md shadow-sm placeholder-slate-gray-400 focus:outline-none focus:ring-accent-teal-500 focus:border-accent-teal-500 sm:text-sm"
        {...props}
      />
    </div>
  );
};

export default Textarea;
