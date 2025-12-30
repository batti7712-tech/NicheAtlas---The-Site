
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Textarea from '../../components/ui/Textarea';
import Button from '../../components/ui/Button';

const PolicyEditorPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { policies, updatePolicy } = useAppContext();
  
  const policy = slug ? policies[slug] : undefined;
  const [content, setContent] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (policy) {
      setContent(policy.content);
    } else if(slug) {
      // If slug is present but no policy found, redirect
      navigate('/admin/policies');
    }
  }, [slug, policy, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (slug) {
        updatePolicy(slug, content);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    }
  };

  if (!policy) {
    return <div>Loading or policy not found...</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-gray-900 mb-6">Edit: {policy.title}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
        <Textarea 
          label="Policy Content (Markdown supported)" 
          id="content" 
          name="content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          rows={20}
        />
        <div className="flex items-center justify-end space-x-4">
            {saved && <span className="text-sm text-green-600">Policy saved successfully!</span>}
            <Button type="button" variant="secondary" onClick={() => navigate('/admin/policies')}>
                Cancel
            </Button>
            <Button type="submit">
                Save Changes
            </Button>
        </div>
      </form>
    </div>
  );
};

export default PolicyEditorPage;
