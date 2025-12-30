
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { Post, SiteSettings, Category, Product, Policies, Comment } from '../types';
import { MOCK_POSTS, MOCK_CATEGORIES, MOCK_PRODUCTS, MOCK_POLICIES } from '../data/mock-data';
import { SITE_CONFIG } from '../config';

interface AppContextType {
  posts: Post[];
  categories: Category[];
  products: Product[];
  settings: SiteSettings;
  cart: Product[];
  policies: Policies;
  getPostBySlug: (slug: string) => Post | undefined;
  getPostsByCategory: (categorySlug: string) => Post[];
  addPost: (post: Post) => void;
  updatePost: (slug: string, postData: Partial<Post>) => void;
  deletePost: (slug: string) => void;
  getProductBySlug: (slug: string) => Product | undefined;
  addProduct: (product: Product) => void;
  updateProduct: (slug: string, productData: Partial<Product>) => void;
  deleteProduct: (slug: string) => void;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  updatePolicy: (slug: string, content: string) => void;
  addComment: (postSlug: string, commentData: Omit<Comment, 'id' | 'date'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [categories] = useState<Category[]>(MOCK_CATEGORIES);
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [cart, setCart] = useState<Product[]>([]);
  const [policies, setPolicies] = useState<Policies>(MOCK_POLICIES);
  const [settings, setSettings] = useState<SiteSettings>({
    siteName: SITE_CONFIG.name,
    siteLogoUrl: '',
    googleAnalyticsId: 'UA-XXXXX-Y',
    primaryColor: 'accent-teal',
  });

  const getPostBySlug = useCallback((slug: string) => {
    return posts.find(p => p.slug === slug);
  }, [posts]);

  const getPostsByCategory = useCallback((categorySlug: string) => {
    return posts.filter(p => p.category === categorySlug);
  }, [posts]);

  const addPost = (post: Post) => {
    if (posts.some(p => p.slug === post.slug)) {
      alert('Error: A post with this slug already exists.');
      return;
    }
    setPosts(prevPosts => [{ ...post, comments: [] }, ...prevPosts]);
  };

  const updatePost = (slug: string, postData: Partial<Post>) => {
    setPosts(prevPosts =>
      prevPosts.map(p => (p.slug === slug ? { ...p, ...postData } : p))
    );
  };

  const deletePost = (slug: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
        setPosts(prevPosts => prevPosts.filter(p => p.slug !== slug));
    }
  };

  const getProductBySlug = useCallback((slug: string) => {
    return products.find(p => p.slug === slug);
  }, [products]);

  const addProduct = (product: Product) => {
    if (products.some(p => p.slug === product.slug)) {
        alert('Error: A product with this slug already exists.');
        return;
    }
    setProducts(prev => [product, ...prev]);
  };

  const updateProduct = (slug: string, productData: Partial<Product>) => {
    setProducts(prev =>
      prev.map(p => (p.slug === slug ? { ...p, ...productData } : p))
    );
  };

  const deleteProduct = (slug: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
        setProducts(prev => prev.filter(p => p.slug !== slug));
    }
  };

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prevSettings => ({ ...prevSettings, ...newSettings }));
  };

  const addToCart = (product: Product) => {
    setCart(prevCart => {
        if (prevCart.find(item => item.slug === product.slug)) {
            return prevCart; // Prevent duplicates
        }
        return [...prevCart, product];
    });
  };

  const removeFromCart = (slug: string) => {
    setCart(prevCart => prevCart.filter(item => item.slug !== slug));
  };
  
  const clearCart = () => {
    setCart([]);
  }

  const updatePolicy = (slug: string, content: string) => {
    setPolicies(prev => ({
      ...prev,
      [slug]: { ...prev[slug], content },
    }));
  };

  const addComment = (postSlug: string, commentData: Omit<Comment, 'id' | 'date'>) => {
    const newComment: Comment = {
      ...commentData,
      id: new Date().toISOString(),
      date: new Date().toISOString(),
    };
    setPosts(prevPosts =>
        prevPosts.map(p =>
            p.slug === postSlug ? { ...p, comments: [...p.comments, newComment] } : p
        )
    );
  };

  const value = {
    posts,
    categories,
    products,
    settings,
    cart,
    policies,
    getPostBySlug,
    getPostsByCategory,
    addPost,
    updatePost,
    deletePost,
    getProductBySlug,
    addProduct,
    updateProduct,
    deleteProduct,
    updateSettings,
    addToCart,
    removeFromCart,
    clearCart,
    updatePolicy,
    addComment,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
