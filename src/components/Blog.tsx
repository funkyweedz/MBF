import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts, BlogPost } from '../data/blog';
import { Calendar, User, ArrowLeft, Tag, Newspaper } from 'lucide-react';

const categoryColors = {
  update: 'bg-mbf-blue/10 text-mbf-blue border-mbf-blue/20',
  feature: 'bg-mbf-turquoise/10 text-mbf-turquoise border-mbf-turquoise/20',
  announcement: 'bg-mbf-orange/10 text-mbf-orange border-mbf-orange/20'
};

const categoryLabels = {
  update: 'Update',
  feature: 'New Feature',
  announcement: 'Announcement'
};

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="min-h-[80vh] py-8 px-4 pt-8">
        <div className="max-w-3xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setSelectedPost(null)}
            className="flex items-center text-mbf-turquoise hover:text-mbf-dark-blue transition-colors mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </motion.button>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-mbf-turquoise/20 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[selectedPost.category]}`}>
                {categoryLabels[selectedPost.category]}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-mbf-dark-blue mb-4">
              {selectedPost.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-mbf-text/60 mb-6 pb-6 border-b border-mbf-turquoise/10">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{selectedPost.author}</span>
              </div>
            </div>

            <div className="prose prose-sm max-w-none text-mbf-text/90 leading-relaxed whitespace-pre-line">
              {selectedPost.content}
            </div>
          </motion.article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] py-8 px-4 pt-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="w-8 h-8 text-mbf-turquoise" />
            <h2 className="text-3xl md:text-4xl font-bold text-mbf-dark-blue">
              Blog
            </h2>
          </div>
          <p className="text-sm text-mbf-text/80 max-w-lg mx-auto">
            Stay updated with the latest news, features, and improvements to the platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="bg-white/80 backdrop-blur-md rounded-xl p-6 border border-mbf-turquoise/20 shadow-md hover:shadow-lg transition-all cursor-pointer group hover:border-mbf-turquoise/40"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${categoryColors[post.category]}`}>
                  {categoryLabels[post.category]}
                </span>
                <div className="flex items-center gap-1 text-xs text-mbf-text/50">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-mbf-dark-blue mb-2 group-hover:text-mbf-turquoise transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-mbf-text/70 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-mbf-turquoise/10">
                <div className="flex items-center gap-1 text-xs text-mbf-text/50">
                  <User className="w-3 h-3" />
                  <span>{post.author}</span>
                </div>
                <span className="text-xs text-mbf-turquoise font-medium group-hover:underline">
                  Read more →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
