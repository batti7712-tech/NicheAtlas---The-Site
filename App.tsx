
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AdminLayout from './components/layout/AdminLayout';
import HomePage from './pages/public/HomePage';
import CategoryPage from './pages/public/CategoryPage';
import PostPage from './pages/public/PostPage';
import AboutPage from './pages/public/AboutPage';
import ContactPage from './pages/public/ContactPage';
import ShopPage from './pages/public/ShopPage';
import CartPage from './pages/public/CartPage';
import CheckoutPage from './pages/public/CheckoutPage';
import PolicyPage from './pages/public/PolicyPage';
import DashboardPage from './pages/admin/DashboardPage';
import ContentManagerPage from './pages/admin/ContentManagerPage';
import EditorPage from './pages/admin/EditorPage';
import SettingsPage from './pages/admin/SettingsPage';
import ShopManagerPage from './pages/admin/ShopManagerPage';
import ShopEditorPage from './pages/admin/ShopEditorPage';
import PolicyManagerPage from './pages/admin/PolicyManagerPage';
import PolicyEditorPage from './pages/admin/PolicyEditorPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:slug" element={<CategoryPage />} />
          <Route path="post/:slug" element={<PostPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="policy/:slug" element={<PolicyPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="content" element={<ContentManagerPage />} />
          <Route path="editor" element={<EditorPage />} />
          <Route path="editor/:slug" element={<EditorPage />} />
          <Route path="shop" element={<ShopManagerPage />} />
          <Route path="shop/editor" element={<ShopEditorPage />} />
          <Route path="shop/editor/:slug" element={<ShopEditorPage />} />
          <Route path="policies" element={<PolicyManagerPage />} />
          <Route path="policies/editor/:slug" element={<PolicyEditorPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
