"use client";

import React, { useEffect, useState } from 'react';
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

const AllBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                // 💡 NEXT_PUBLIC_API_URL ভার্সেল এনভায়রনমেন্ট ভ্যারিয়েবল থেকে আসবে, লোকালহোস্টে ডিফল্ট 5000 পোর্ট পাবে
                const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
                const res = await fetch(`${baseUrl}/api/books`, {
                    cache: 'no-store'
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch books from server");
                }

                const data = await res.json();
                setBooks(data);
            } catch (error) {
                console.error("Error loading books:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
            {/* পেজ হেডার */}
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    All Books
                </h1>
                <p className="text-slate-500 mt-2 text-base sm:text-lg max-w-xl mx-auto">
                    Explore our diverse collection of amazing books
                </p>
                <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* কন্টেন্ট এরিয়া */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-24 gap-3">
                    <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-slate-500 font-medium">Loading books gallery...</p>
                </div>
            ) : books.length === 0 ? (
                <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200 max-w-xl mx-auto px-6">
                    <p className="text-slate-600 font-semibold text-lg sm:text-xl">
                        No books available in the library right now.
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                        Please check if your backend server is running and database is populated.
                    </p>
                </div>
            ) : (
                /* গ্রিড লেআউট */
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                    {books.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllBooks;