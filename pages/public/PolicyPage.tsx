
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

// This simple renderer can be expanded or replaced with a proper library like 'react-markdown'.
const SimpleMarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
    const htmlContent = content
        .split('\n')
        .map(line => {
            if (line.startsWith('## ')) {
                return `<h2 class="text-2xl font-bold mt-8 mb-4 text-slate-gray-900">${line.substring(3)}</h2>`;
            }
            if (line.startsWith('### ')) {
                return `<h3 class="text-xl font-bold mt-6 mb-3 text-slate-gray-800">${line.substring(4)}</h3>`;
            }
             if (line.trim() === '') {
                return '<br />';
            }
            return `<p class="mb-4 text-slate-gray-700 leading-relaxed">${line}</p>`;
        })
        .join('');

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};


const PolicyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { policies, settings } = useAppContext();

  const policy = slug ? policies[slug] : undefined;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (policy) {
        document.title = `${policy.title} - ${settings.siteName}`;
    }
  }, [policy, settings.siteName]);

  if (!policy) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Page not found!</h1>
        <Link to="/" className="text-accent-teal-600 hover:underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy mt-4 leading-tight">
            {policy.title}
          </h1>
        </header>

        <div className="prose prose-lg max-w-none text-lg">
            <SimpleMarkdownRenderer content={policy.content} />
        </div>
      </div>
    </article>
  );
};

export default PolicyPage;
