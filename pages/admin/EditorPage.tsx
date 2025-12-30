
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import type { Post } from '../../types';
import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';
import Select from '../../components/ui/Select';
import Button from '../../components/ui/Button';

const EditorPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { getPostBySlug, addPost, updatePost, categories } = useAppContext();
  
  const isEditing = Boolean(slug);
  const [post, setPost] = useState<Partial<Post>>({
    title: '',
    slug: '',
    category: categories[0]?.slug || '',
    featuredImage: 'https://picsum.photos/seed/newpost/1200/800',
    metaDescription: '',
    content: '',
    author: 'Admin',
    authorImage: 'https://picsum.photos/seed/admin/100/100',
    date: new Date().toISOString().split('T')[0],
    readingTime: 5,
  });

  useEffect(() => {
    if (isEditing && slug) {
      const existingPost = getPostBySlug(slug);
      if (existingPost) {
        setPost(existingPost);
      } else {
         navigate('/admin/content'); // Post not found, redirect
      }
    }
  }, [slug, isEditing, getPostBySlug, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));

    if (name === 'title' && !isEditing) {
        const newSlug = value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        setPost(prev => ({ ...prev, slug: newSlug }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && slug) {
      updatePost(slug, post);
    } else {
      addPost(post as Post);
    }
    navigate('/admin/content');
  };

  return (
    <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-gray-900 mb-6">{isEditing ? 'Edit Post' : 'Create New Post'}</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <Input label="Post Title" id="title" name="title" value={post.title} onChange={handleChange} required />
            <Input label="Slug" id="slug" name="slug" value={post.slug} onChange={handleChange} required disabled={isEditing} />
            <Select label="Category" id="category" name="category" value={post.category} onChange={handleChange}>
                {categories.map(cat => (
                    <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                ))}
            </Select>
            <Input label="Featured Image URL" id="featuredImage" name="featuredImage" value={post.featuredImage} onChange={handleChange} />
            <Textarea label="Meta Description" id="metaDescription" name="metaDescription" value={post.metaDescription} onChange={handleChange} rows={3} />
            <Textarea label="Content (Markdown)" id="content" name="content" value={post.content} onChange={handleChange} rows={15} />
            <div className="flex justify-end space-x-4">
                <Button type="button" variant="secondary" onClick={() => navigate('/admin/content')}>
                    Cancel
                </Button>
                <Button type="submit">
                    {isEditing ? 'Save Changes' : 'Publish Post'}
                </Button>
            </div>
        </form>
    </div>
  );
};

export default EditorPage;
