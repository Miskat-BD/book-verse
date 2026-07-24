'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import BookCard from '@/components/BookCard';

interface Book {
  _id: string;
  title: string;
  author: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

export default function FeaturedBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${baseUrl}/api/books`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          // Display up to 8 featured books
          setBooks(data.slice(0, 8));
        }
      } catch (err) {
        console.error('Error fetching featured books:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section id="featured-section" className="w-full py-20 bg-slate-50 border-y border-slate-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Curated Picks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Featured Books & Masterpieces
            </h2>
            <p className="text-slate-500 mt-2 text-base max-w-xl">
              Handpicked titles trending among readers this week. Discover inspiring narratives and expert knowledge.
            </p>
          </div>
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 bg-white hover:bg-indigo-50/50 border border-slate-200 hover:border-indigo-200 px-5 py-2.5 rounded-xl transition-all shadow-sm flex-shrink-0"
          >
            <span>View All Library</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Loading Skeletons */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-white rounded-2xl border border-slate-100 p-4 h-80 animate-pulse flex flex-col gap-4">
                <div className="w-full h-48 bg-slate-200 rounded-xl" />
                <div className="h-5 w-3/4 bg-slate-200 rounded" />
                <div className="h-4 w-1/2 bg-slate-200 rounded" />
              </div>
            ))}
          </div>
        ) : books.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200 max-w-xl mx-auto px-6">
            <p className="text-slate-600 font-semibold text-lg">No featured books available yet.</p>
            <p className="text-slate-400 text-sm mt-1 mb-6">Be the first to publish a book to the library.</p>
            <Link
              href="/books/add"
              className="inline-block bg-indigo-600 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-sm hover:bg-indigo-700 transition-colors"
            >
              Add Book Now
            </Link>
          </div>
        ) : (
          /* Book Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
