'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('featured-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/books?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/books');
    }
  };

  const stats = [
    { label: 'Curated Books', value: '10,000+' },
    { label: 'Active Readers', value: '5,000+' },
    { label: 'User Rating', value: '4.9 ★' },
    { label: 'Global Community', value: '100%' },
  ];

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-600/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center z-10 space-y-8 my-auto">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-medium tracking-wide shadow-inner"
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
          ✨ Discover Your Next Great Read at BookVerse
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          Unleash Imagination & <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
            Mastery Through Books
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          Dive into thousands of handpicked literature masterpieces, tech manuals, timeless fiction, and modern research. Explore, collect, and manage your private library with ease.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto w-full flex flex-col sm:flex-row items-center gap-2 p-2 bg-slate-900/80 backdrop-blur-xl border border-indigo-500/30 rounded-2xl shadow-2xl focus-within:border-indigo-400 transition-all"
        >
          <div className="flex items-center gap-2 px-3 w-full">
            <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author, or category (e.g. Fiction)..."
              className="w-full bg-transparent text-white placeholder-slate-400 text-sm focus:outline-none py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-md shadow-indigo-600/40 flex-shrink-0 cursor-pointer"
          >
            Search Books
          </button>
        </motion.form>

        {/* Quick Category Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400"
        >
          <span className="font-semibold text-slate-500">Popular:</span>
          {['Fiction', 'Sci-Fi', 'Biography', 'Mystery', 'Non-Fiction'].map((tag) => (
            <Link
              key={tag}
              href={`/books`}
              className="px-3 py-1 bg-slate-800/60 hover:bg-indigo-600/30 border border-slate-700/50 hover:border-indigo-500/50 rounded-lg text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {tag}
            </Link>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <Link
            href="/books"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/30 text-center active:scale-98"
          >
            Browse Collection
          </Link>
          <Link
            href="/books/add"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 rounded-xl transition-all text-center"
          >
            + Add Your Book
          </Link>
        </motion.div>

        {/* Platform Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80 max-w-4xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 font-medium mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-8 hidden sm:block">
        <motion.button
          onClick={scrollToNextSection}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-xs text-slate-400 hover:text-indigo-400 font-semibold uppercase tracking-widest cursor-pointer group focus:outline-none"
        >
          <span>Explore More</span>
          <svg className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </div>

    </section>
  );
}