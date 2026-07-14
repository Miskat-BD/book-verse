'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  // পরের সেকশনে স্মুথ স্ক্রোল করার জন্য হেল্পার ফাংশন
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('categories-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[65vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden px-4 sm:px-6 lg:px-8">
      
      {/* Background Animated Decorative Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center z-10 space-y-6">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase"
        >
          ✨ Welcome to the Ultimate Literary Universe
        </motion.div>

        {/* Main Heading with Entrance Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          Expand Your Mind with <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            BookVerse Engine
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Explore thousands of handpicked programming guides, core business blueprints, timeless novels, and modern scientific discoveries. Your private dashboard awaits.
        </motion.p>

        {/* Call to Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/books"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/30 text-center active:scale-98"
          >
            Explore All Books
          </Link>
          <Link
            href="/register"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-slate-700 hover:border-slate-500 rounded-xl transition-all text-center backdrop-blur-sm active:scale-98"
          >
            Create Free Account
          </Link>
        </motion.div>

      </div>

      {/* Visual Flow Pointer (Scroll Down Button) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block">
        <motion.button
          onClick={scrollToNextSection}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-xs text-slate-400 hover:text-indigo-400 font-semibold uppercase tracking-widest cursor-pointer group focus:outline-none"
        >
          <span>Scroll Down</span>
          <svg className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </div>

    </section>
  );
}