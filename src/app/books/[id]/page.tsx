import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card } from '@heroui/react';

interface Book {
    _id: string;
    title: string;
    author: string;
    image: string;
    price: number;
    category: string;
    description: string;
}

// আইডি দিয়ে বইয়ের ডিটেইলস নিয়ে আসার ফাংশন
async function getBookDetails(id: string): Promise<Book | null> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const res = await fetch(`${baseUrl}/api/books/${id}`, { cache: 'no-store' });
        
        if (!res.ok) {
            return null;
        }
        
        return res.json();
    } catch (error) {
        console.error("Error loading book details: ", error);
        return null;
    }
}

// Next.js লেটেস্ট স্ট্যান্ডার্ড অনুযায়ী প্রপস টাইপ ইন্টারফেস
interface Props {
    params: Promise<{ id: string }>;
}

const BooksDetailsPage = async ({ params }: Props) => {
    // 👈 params-কে প্রমিজ হিসেবে প্রথমে await করে নিতে হবে
    const { id } = await params;
    const book = await getBookDetails(id);

    if (!book) {
        return (
            <div className="max-w-7xl mx-auto my-32 px-4 text-center">
                <h2 className="text-2xl font-bold text-slate-800">Book Not Found!</h2>
                <p className="text-slate-500 mt-2">The book you are looking for might have been removed or doesn't exist.</p>
                <Link href="/books" className="mt-6 inline-block text-indigo-600 font-semibold hover:underline">
                    ← Back to All Books
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
                <Link href="/books" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-1">
                    ← Back to Library
                </Link>
            </div>

            <Card className="bg-white border border-slate-100 p-6 sm:p-8 shadow-md rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    
                    {/* বাম পাশ: ইমেজ */}
                    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm max-h-[520px]">
                        <Image
                            src={book.image || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e"}
                            alt={book.title}
                            fill
                            className="object-cover"
                            sizes="(max-w-5xl) 50vw, 100vw"
                            priority
                        />
                    </div>

                    {/* ডান পাশ: ইনফো ও বাটন */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                                {book.category}
                            </span>
                            
                            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                                {book.title}
                            </h1>
                            <p className="text-slate-600 text-base sm:text-lg mt-2 font-medium">
                                By <span className="text-indigo-600 font-semibold">{book.author}</span>
                            </p>

                            <div className="my-5 p-4 bg-slate-50/80 rounded-xl inline-flex items-center gap-3 border border-slate-100">
                                <span className="text-slate-500 text-sm font-medium">Price:</span>
                                <span className="text-2xl font-black text-indigo-600">৳{book.price}</span>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Summary</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mt-2 bg-slate-50/40 p-4 rounded-xl border border-slate-100 whitespace-pre-line">
                                    {book.description || "No description available for this book."}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 mt-8 border-t border-slate-100 pt-6">
                            <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-all shadow-sm active:scale-98">
                                Buy Now
                            </Button>
                            <Button className="flex-1 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold py-4 rounded-xl transition-all shadow-sm active:scale-98">
                                Add to Wishlist
                            </Button>
                        </div>

                    </div>
                </div>
            </Card>
        </div>
    );
};

export default BooksDetailsPage;