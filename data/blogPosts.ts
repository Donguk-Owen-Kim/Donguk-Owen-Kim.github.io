export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
};

// Add published posts here. The Blog page automatically renders this list.
export const blogPosts: BlogPost[] = [];
