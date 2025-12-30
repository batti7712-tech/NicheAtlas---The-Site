
export interface Category {
  slug: string;
  name: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export interface Post {
  slug: string;
  title: string;
  category: string;
  featuredImage: string;
  metaDescription: string;
  content: string; // Should be Markdown or HTML
  author: string;
  authorImage: string;
  date: string;
  readingTime: number; // in minutes
  comments: Comment[];
}

export interface Product {
  slug: string;
  title:string;
  description: string;
  featuredImage: string;
  downloadUrl: string;
  type: 'E-book' | 'Printable' | 'Template' | 'Prompt';
  price?: number; // Price in USD. 0 or undefined for free items.
}

export interface Policy {
  title: string;
  content: string; // Markdown or HTML content
}

export type Policies = Record<string, Policy>;


export interface SiteSettings {
  siteName: string;
  siteLogoUrl: string;
  googleAnalyticsId: string;
  primaryColor: 'accent-teal' | 'blue' | 'purple'; // Example theme colors
}
