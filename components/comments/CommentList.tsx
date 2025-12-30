
import React from 'react';
import type { Comment } from '../../types';

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  if (comments.length === 0) {
    return <p className="text-slate-gray-500">Be the first to leave a comment.</p>;
  }

  return (
    <ul className="space-y-8">
      {comments.map((comment) => (
        <li key={comment.id}>
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-slate-gray-200 flex items-center justify-center">
                <span className="text-slate-gray-500 font-semibold">{comment.author.charAt(0)}</span>
              </div>
            </div>
            <div>
              <div className="text-sm">
                <p className="font-semibold text-slate-gray-900">{comment.author}</p>
              </div>
              <div className="mt-1 text-base text-slate-gray-700">
                <p>{comment.content}</p>
              </div>
               <div className="mt-2 text-sm text-slate-gray-500">
                {new Date(comment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
