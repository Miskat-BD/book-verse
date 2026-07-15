import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Book {
    _id: string;
    title: string;
    author: string;
    image: string;
    price: number;
    category: string;
    description: string;
}

interface BookCardProps {
    book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
            {/* বুক ইমেজ সেকশন */}
            <div className="relative w-full h-64 bg-slate-50 overflow-hidden">
                <Image
                    src={book.image || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e"}
                    alt={book.title}
                    fill
                    sizes="(max-w-7xl) 25vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={false}
                />
                <span className="absolute top-3 right-3 bg-indigo-600/95 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {book.category}
                </span>
            </div>

            {/* কার্ড বডি */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-slate-800 text-lg line-clamp-1 group-hover:text-indigo-600 transition-colors">
                    {book.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1 mb-3">By {book.author}</p>
                
                <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-grow">
                    {book.description || "No description available for this book."}
                </p>

                {/* কার্ড ফুটার */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-50 mt-auto">
                    <span className="text-xl font-extrabold text-slate-900">৳{book.price}</span>
                    <Link href={`/books/${book._id}`}>
                        <button className="bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-sm">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;