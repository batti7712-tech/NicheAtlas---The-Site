
import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

interface CommentFormProps {
  postSlug: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ postSlug }) => {
  const { addComment } = useAppContext();
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author.trim() && content.trim()) {
      addComment(postSlug, { author, content });
      setAuthor('');
      setContent('');
    }
  };

  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="inline-block h-10 w-10 rounded-full bg-slate-gray-200" />
      </div>
      <div className="min-w-0 flex-1">
        <form onSubmit={handleSubmit} className="relative">
          <h3 className="text-lg font-medium text-slate-gray-900 mb-4">Leave a Reply</h3>
          <div className="space-y-4">
            <Input 
                label="Your Name" 
                id="author" 
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required 
            />
            <Textarea
              label="Your Comment"
              id="comment"
              name="comment"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="mt-6 flex items-center justify-end">
            <Button type="submit">
              Post Comment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
