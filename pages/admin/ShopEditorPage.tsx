
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import type { Product } from '../../types';
import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';
import Select from '../../components/ui/Select';
import Button from '../../components/ui/Button';

const ShopEditorPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { getProductBySlug, addProduct, updateProduct } = useAppContext();
  
  const isEditing = Boolean(slug);
  const [product, setProduct] = useState<Partial<Product>>({
    title: '',
    slug: '',
    type: 'E-book',
    featuredImage: 'https://picsum.photos/seed/newproduct/600/400',
    description: '',
    downloadUrl: '',
    price: 0
  });

  useEffect(() => {
    if (isEditing && slug) {
      const existingProduct = getProductBySlug(slug);
      if (existingProduct) {
        setProduct(existingProduct);
      } else {
         navigate('/admin/shop'); // Product not found, redirect
      }
    }
  }, [slug, isEditing, getProductBySlug, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    let processedValue: string | number = value;
    if (type === 'number') {
        processedValue = value === '' ? 0 : parseFloat(value);
    }

    setProduct(prev => ({ ...prev, [name]: processedValue }));

    if (name === 'title' && !isEditing) {
        const newSlug = value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        setProduct(prev => ({ ...prev, slug: newSlug }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && slug) {
      updateProduct(slug, product);
    } else {
      addProduct(product as Product);
    }
    navigate('/admin/shop');
  };

  return (
    <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-gray-900 mb-6">{isEditing ? 'Edit Product' : 'Create New Product'}</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <Input label="Product Title" id="title" name="title" value={product.title} onChange={handleChange} required />
            <Input label="Slug" id="slug" name="slug" value={product.slug} onChange={handleChange} required disabled={isEditing} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select label="Product Type" id="type" name="type" value={product.type} onChange={handleChange}>
                  <option value="E-book">E-book</option>
                  <option value="Printable">Printable</option>
                  <option value="Template">Template</option>
                  <option value="Prompt">Prompt</option>
              </Select>
              <Input label="Price (USD)" id="price" name="price" type="number" value={product.price || 0} onChange={handleChange} placeholder="0 for free item" step="0.01" min="0" />
            </div>
            <Input label="Featured Image URL" id="featuredImage" name="featuredImage" value={product.featuredImage} onChange={handleChange} />
            <Input label="Download File URL" id="downloadUrl" name="downloadUrl" value={product.downloadUrl} onChange={handleChange} required />
            <Textarea label="Description" id="description" name="description" value={product.description} onChange={handleChange} rows={4} />
            <div className="flex justify-end space-x-4">
                <Button type="button" variant="secondary" onClick={() => navigate('/admin/shop')}>
                    Cancel
                </Button>
                <Button type="submit">
                    {isEditing ? 'Save Changes' : 'Add Product'}
                </Button>
            </div>
        </form>
    </div>
  );
};

export default ShopEditorPage;
