'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const stats = [
    { value: '10,000+', label: 'Books Indexed' },
    { value: '50,000+', label: 'Active Readers' },
    { value: '45+', label: 'Countries Supported' },
    { value: '99.9%', label: 'Platform Satisfaction' },
  ];

  const team = [
    {
      name: 'Miskat H.',
      role: 'Founder & Lead Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
      bio: 'Passionate software engineer and avid reader dedicated to crafting seamless web experiences.',
    },
    {
      name: 'Sophia Chen',
      role: 'Head of Content & Curation',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
      bio: 'Former publishing editor ensuring our literature categories are rich, diverse, and verified.',
    },
    {
      name: 'Marcus Vance',
      role: 'Community Growth Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
      bio: 'Connecting readers, organizers, and authors around the world through literary events.',
    },
  ];

  const values = [
    {
      title: 'Community First',
      description: 'We believe reading is best experienced when shared. Our catalog empowers readers to contribute, rate, and review.',
      icon: '🤝',
    },
    {
      title: 'Universal Access',
      description: 'Knowledge should be accessible to everyone. We build ultra-fast, responsive web tools for any device.',
      icon: '🌐',
    },
    {
      title: 'Quality Curation',
      description: 'From software manuals to classic fiction, we verify book data to ensure accuracy and high reader satisfaction.',
      icon: '✨',
    },
    {
      title: 'Continuous Innovation',
      description: 'Constantly refining our search algorithms, personal bookshelves, and recommendation engines.',
      icon: '⚡',
    },
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-50 pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-semibold uppercase tracking-wider"
          >
            About BookVerse
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Connecting Minds Through <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
              Literature & Knowledge
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            BookVerse is a modern digital sanctuary engineered for book lovers, authors, and knowledge seekers around the globe.
          </motion.p>
        </div>
      </section>

      {/* 2. Our Mission */}
      <section className="w-full py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                Our Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Empowering Readers to Build Their Personal Digital Shelf
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Founded with a simple vision, BookVerse bridges the gap between readers and great literature. Whether you are looking for tech manuals, fiction epics, or business blueprints, our platform organizes your reading inventory seamlessly.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/books"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-indigo-600/30"
                >
                  Explore Collection
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 p-6 rounded-3xl bg-slate-900 text-white shadow-xl">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 text-center">
                  <h3 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="w-full py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Drives Our Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Team */}
      <section className="w-full py-20 bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Meet The Creators
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Team Behind BookVerse
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 text-center flex flex-col items-center group hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="relative w-28 h-28 rounded-full overflow-hidden mb-5 border-4 border-white shadow-md group-hover:scale-105 transition-transform">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-xs font-semibold text-indigo-600 mt-1 mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Start Exploring Your Next Favorite Book</h2>
          <p className="text-indigo-200 text-base">Browse through thousands of verified books or contribute to our growing library.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              href="/books"
              className="px-8 py-3.5 bg-white text-indigo-900 font-bold text-sm rounded-xl hover:bg-indigo-50 transition-all shadow-lg"
            >
              Browse Library
            </Link>
            <Link
              href="/books/add"
              className="px-8 py-3.5 bg-indigo-600/40 hover:bg-indigo-600/60 border border-indigo-400/40 text-white font-semibold text-sm rounded-xl transition-all"
            >
              + Add a Book
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
