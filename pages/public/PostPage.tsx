
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import ReadingProgressBar from '../../components/ReadingProgressBar';
import SocialShare from '../../components/SocialShare';
import CommentSection from '../../components/comments/CommentSection';

// A simple markdown-to-html renderer for demonstration.
// In a real app, you'd use a library like 'marked' or 'react-markdown'.
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
            if (line.startsWith('*   ')) {
                return `<li class="mb-2">${line.substring(4)}</li>`;
            }
             if (line.trim() === '') {
                return '<br />';
            }
            return `<p class="mb-4 text-slate-gray-700 leading-relaxed">${line}</p>`;
        })
        .join('');

    return <div dangerouslySetInnerHTML={{ __html: htmlContent.replace(/<p class="mb-4 text-slate-gray-700 leading-relaxed"><li/g, '<li').replace(/<\/li><\/p>/g, '</li>') }} />;
};


const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getPostBySlug, settings } = useAppContext();

  const post = slug ? getPostBySlug(slug) : undefined;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
        document.title = `${post.title} - ${settings.siteName}`;
    }
  }, [post, settings.siteName]);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Post not found!</h1>
        <Link to="/" className="text-accent-teal-600 hover:underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <ReadingProgressBar />
      <article className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <header className="max-w-3xl mx-auto text-center mb-12">
             <Link to={`/category/${post.category}`} className="text-sm font-semibold text-accent-teal-600 uppercase tracking-wider hover:underline">
                {post.category}
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deep-navy mt-4 leading-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center justify-center">
              <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-semibold text-slate-gray-800">{post.author}</p>
                <p className="text-sm text-slate-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} &middot; {post.readingTime} min read
                </p>
              </div>
            </div>
          </header>
        </div>

        <div className="max-w-full">
            <img src={post.featuredImage} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <aside className="hidden md:block md:col-span-1">
                    <SocialShare url={window.location.href} title={post.title} />
                </aside>
                <div className="prose prose-lg max-w-none md:col-span-10 lg:col-span-8 lg:col-start-3 text-lg">
                   <SimpleMarkdownRenderer content={post.content} />
                </div>
            </div>
        </div>
      </article>

      <div className="bg-slate-gray-50 py-16">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <CommentSection postSlug={post.slug} comments={post.comments} />
         </div>
      </div>
    </>
  );
};

export default PostPage;
