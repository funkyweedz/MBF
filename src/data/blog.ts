export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: 'update' | 'feature' | 'announcement';
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'New Projects Added to the Platform',
    excerpt: 'We\'ve added three exciting Moroccan projects: ZeroEntropy, Go 212, and SOWIT.',
    content: `We are thrilled to announce the addition of three innovative Moroccan projects to our platform:

**ZeroEntropy** - An advanced AI platform for intelligent data processing and analysis, backed by Y Combinator.

**Go 212** - Revolutionizing everyday services in Morocco with electric mobility, eco-friendly laundry, professional cleaning, and home repairs.

**SOWIT** - An agricultural technology platform connecting farmers with sustainable solutions and markets.

These projects showcase the incredible innovation coming from Moroccan entrepreneurs. Check them out in our Projects section!`,
    date: '2026-04-29',
    author: 'Moroccan Builders Foundation',
    category: 'feature'
  },
  {
    id: '2',
    title: 'Platform Security Enhanced with Pull Request Workflow',
    excerpt: 'We\'ve implemented branch protection rules to ensure code quality and security.',
    content: `To maintain the highest standards of quality and security, we've implemented branch protection rules on our GitHub repository. 

**What this means:**
- All changes must now go through Pull Requests
- Direct pushes to the main branch are no longer allowed
- Every contribution requires review before merging

This ensures that all code changes are properly reviewed and tested before being deployed to the live platform.`,
    date: '2026-04-29',
    author: 'Moroccan Builders Foundation',
    category: 'update'
  },
  {
    id: '3',
    title: 'Submit Your Project Feature Launched',
    excerpt: 'Contributors can now submit their Moroccan projects through our new submission system.',
    content: `We're excited to announce the launch of our "Submit Your Project" feature!

Moroccan builders and entrepreneurs can now contribute their projects to our platform by creating a Pull Request on GitHub. 

**How it works:**
1. Click the "Submit Your Project" button in the Projects section
2. Follow our contribution guidelines
3. Create a Pull Request with your project details
4. Our team will review and merge approved projects

This collaborative approach allows us to build the most comprehensive directory of Moroccan innovation.`,
    date: '2026-04-29',
    author: 'Moroccan Builders Foundation',
    category: 'feature'
  },
  {
    id: '4',
    title: 'SEO Optimization Complete',
    excerpt: 'We\'ve implemented comprehensive SEO improvements for better visibility.',
    content: `We've completed a major SEO optimization initiative to improve our platform's visibility on search engines.

**Improvements include:**
- Comprehensive meta tags and Open Graph integration
- Structured data with JSON-LD for better search indexing
- XML sitemap for search engine crawlers
- Google Search Console verification
- Optimized page titles and descriptions

These enhancements will help more people discover Moroccan innovation through organic search.`,
    date: '2026-04-28',
    author: 'Moroccan Builders Foundation',
    category: 'update'
  },
  {
    id: '5',
    title: 'Welcome to Moroccan Builders Foundation',
    excerpt: 'Introducing our platform dedicated to showcasing Moroccan innovation.',
    content: `Welcome to the Moroccan Builders Foundation platform!

Our mission is to discover, celebrate, and promote innovative Moroccan projects that are shaping the future of technology and entrepreneurship in the region.

**What you'll find here:**
- Curated projects in Blockchain, AI, and Technology
- Detailed project information and founder stories
- Links to project websites and resources
- A community of Moroccan builders and innovators

We believe in the power of Moroccan entrepreneurship and aim to provide visibility to the incredible work being done by our talented builders.`,
    date: '2026-04-28',
    author: 'Moroccan Builders Foundation',
    category: 'announcement'
  }
];
