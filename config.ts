
export const SITE_CONFIG = {
  name: "NicheAtlas",
  description: "A professional multi-niche blog platform.",
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  adminNavLinks: [
    { name: "Dashboard", href: "/admin" },
    { name: "Content", href: "/admin/content" },
    { name: "Shop", href: "/admin/shop" },
    { name: "New Post", href: "/admin/editor" },
    { name: "Policies", href: "/admin/policies" },
    { name: "Settings", href: "/admin/settings" },
  ],
  socialLinks: {
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    pinterest: "https://pinterest.com",
  },
  theme: {
    // These keys correspond to colors defined in tailwind.config
    // and are used to provide options in the Admin settings.
    colors: {
        'deep-navy': '#0A2540',
        'slate-gray': '#64748b',
        'accent-teal': '#14b8a6',
    }
  }
};
