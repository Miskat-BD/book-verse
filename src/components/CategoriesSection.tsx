'use client';

import React from 'react';
import Link from 'next/link';

export default function CategoriesSection() {
  const categories = [
    {
      id: 'fiction',
      name: 'Fiction',
      icon: '📖',
      color: 'from-amber-500/10 via-orange-500/10 to-transparent',
      borderColor: 'group-hover:border-amber-400/40',
      badgeBg: 'bg-amber-100 text-amber-700',
      description: 'Engaging stories, imaginative worlds, and dramatic characters.',
      count: '3,200+ Books',
    },
    {
      id: 'non-fiction',
      name: 'Non-Fiction',
      icon: '💡',
      color: 'from-blue-500/10 via-indigo-500/10 to-transparent',
      borderColor: 'group-hover:border-indigo-400/40',
      badgeBg: 'bg-blue-100 text-blue-700',
      description: 'Real-world insights, self-improvement, history, and science.',
      count: '2,400+ Books',
    },
    {
      id: 'sci-fi',
      name: 'Sci-Fi & Fantasy',
      icon: '🚀',
      color: 'from-purple-500/10 via-pink-500/10 to-transparent',
      borderColor: 'group-hover:border-purple-400/40',
      badgeBg: 'bg-purple-100 text-purple-700',
      description: 'Futuristic technologies, mythical realms, and epic adventures.',
      count: '1,800+ Books',
    },
    {
      id: 'mystery',
      name: 'Mystery & Thriller',
      icon: '🕵️',
      color: 'from-emerald-500/10 via-teal-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-400/40',
      badgeBg: 'bg-emerald-100 text-emerald-700',
      description: 'Mind-bending puzzles, suspenseful investigations, and twists.',
      count: '1,500+ Books',
    },
    {
      id: 'biography',
      name: 'Biography',
      icon: '📜',
      color: 'from-rose-500/10 via-red-500/10 to-transparent',
      borderColor: 'group-hover:border-rose-400/40',
      badgeBg: 'bg-rose-100 text-rose-700',
      description: 'Inspiring life stories of visionaries, leaders, and pioneers.',
      count: '1,100+ Books',
    },
    {
      id: 'technology',
      name: 'Tech & Code',
      icon: '💻',
      color: 'from-cyan-500/10 via-sky-500/10 to-transparent',
      borderColor: 'group-hover:border-cyan-400/40',
      badgeBg: 'bg-cyan-100 text-cyan-700',
      description: 'Software engineering, artificial intelligence, and web development.',
      count: '2,900+ Books',
    },
  ];

  return (
    <section id="categories-section" className="w-full py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Explore Genres
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Browse Books by Category
          </h2>
          <p className="text-slate-500 text-base">
            Find exactly what you are looking for by diving into our curated genres.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href="/books"
              className={`group relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between ${cat.borderColor}`}
            >
              {/* Subtle Ambient Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                    {cat.icon}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cat.badgeBg}`}>
                    {cat.count}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 pt-6 mt-4 border-t border-slate-50 group-hover:translate-x-1 transition-transform">
                <span>Browse Category</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
