'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      toast.success('Thank you for subscribing to BookVerse Weekly!');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <section className="w-full py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-8 sm:p-14 overflow-hidden shadow-2xl">
          
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-300 bg-indigo-500/20 border border-indigo-400/30 px-3 py-1 rounded-full">
              Stay Informed
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Get Weekly Book Recommendations
            </h2>
            <p className="text-indigo-200 text-base sm:text-lg max-w-2xl mx-auto">
              Join over 15,000 book lovers receiving our handpicked summaries, new releases, and exclusive author spotlights every Tuesday.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-indigo-300/30 text-white placeholder-indigo-300 text-sm focus:outline-none focus:border-white transition-all"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-indigo-50 text-indigo-900 font-bold text-sm rounded-xl shadow-lg transition-all flex-shrink-0 cursor-pointer active:scale-98"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-xs text-indigo-300">Zero spam. Unsubscribe at any time with one click.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
