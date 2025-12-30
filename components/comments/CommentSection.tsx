
import React from 'react';
import type { Comment } from '../../types';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

interface CommentSectionProps {
  postSlug: string;
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ postSlug, comments }) => {
  return (
    <section aria-labelledby="comments-heading">
      <div className="bg-white shadow-sm sm:rounded-lg sm:overflow-hidden">
        <div className="divide-y divide-slate-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <h2 id="comments-heading" className="text-xl font-semibold text-slate-gray-900">
              {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
            </h2>
          </div>
          <div className="px-4 py-6 sm:px-6">
            <CommentList comments={comments} />
          </div>
        </div>
        <div className="bg-slate-gray-50 px-4 py-6 sm:px-6">
          <CommentForm postSlug={postSlug} />
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
