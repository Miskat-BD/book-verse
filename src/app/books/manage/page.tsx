"use client";

import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Chip } from "@heroui/react";
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface Book {
    _id: string;
    title: string;
    author: string;
    image: string;
    price: number;
    category: string;
    description: string;
}

const ManageBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // 💡 ডাটাবেজে থাকা টেস্ট আইডি (পরবর্তীতে রিয়েল ইউজার আইডি বসাবে)
    const currentUserId = "6a57514152b4ac2d25361d83"; 

    useEffect(() => {
        const fetchUserBooks = async () => {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
                const res = await fetch(`${baseUrl}/api/books/user/${currentUserId}`, {
                    cache: 'no-store'
                });
                
                if (!res.ok) throw new Error("Failed to load books");
                
                const data = await res.json();
                setBooks(data);
            } catch (error) {
                console.error("Error fetching user books:", error);
                toast.error("Could not fetch your books.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserBooks();
    }, []);

    const handleDelete = async (bookId: string) => {
        if (confirm("Are you sure you want to delete this book?")) {
            toast.success("Book deleted successfully!");
            setBooks(books.filter(b => b._id !== bookId));
        }
    };

    return (
        <div className="max-w-6xl mx-auto my-12 px-4 sm:px-6 lg:px-8 min-h-[60vh]">
            {/* ড্যাশবোর্ড হেডার */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Manage Your Books</h1>
                    <p className="text-slate-500 mt-1 text-sm">Update, view, or remove books you have added to the library</p>
                </div>
                <Link href="/books/add">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-sm">
                        + Add New Book
                    </Button>
                </Link>
            </div>

            {/* লোডিং স্টেট */}
            {loading ? (
                <div className="text-center py-20 text-slate-500 font-medium">
                    Loading your library inventory...
                </div>
            ) : books.length === 0 ? (
                <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <p className="text-slate-500 font-semibold text-lg">You haven't added any books yet!</p>
                    <p className="text-slate-400 text-sm mt-1 mb-6">Click the button below to publish your first book.</p>
                    <Link href="/books/add">
                        <Button className="bg-indigo-600 text-white font-medium rounded-xl shadow-sm">
                            Add Book Now
                        </Button>
                    </Link>
                </div>
            ) : (
                /* ডাটা টেবিল লেআউট */
                <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                    <Table aria-label="User uploaded books table">
                        <TableHeader>
                            <TableColumn className="bg-slate-50/80 text-slate-700 font-semibold py-3.5">BOOK DETAILS</TableColumn>
                            <TableColumn className="bg-slate-50/80 text-slate-700 font-semibold py-3.5">CATEGORY</TableColumn>
                            <TableColumn className="bg-slate-50/80 text-slate-700 font-semibold py-3.5">PRICE</TableColumn>
                            <TableColumn className="bg-slate-50/80 text-slate-700 font-semibold py-3.5 text-center">ACTIONS</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {books.map((book) => (
                                <TableRow key={book._id} className="border-b border-slate-50 hover:bg-slate-50/40 transition-colors">
                                    
                                    {/* কাস্টম বুক ইনফো */}
                                    <TableCell className="py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-10 h-14 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
                                                <Image 
                                                    src={book.image || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e"} 
                                                    alt={book.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-slate-800 text-sm sm:text-base line-clamp-1">{book.title}</span>
                                                <span className="text-slate-400 text-xs mt-0.5">By {book.author}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    
                                    <TableCell className="py-4">
                                        {/* ✅ এখানে variant="soft" ফিক্স করে দেওয়া হয়েছে */}
                                        <Chip size="sm" variant="soft" className="bg-indigo-50 text-indigo-600 font-semibold capitalize">
                                            {book.category}
                                        </Chip>
                                    </TableCell>
                                    
                                    <TableCell className="py-4 font-bold text-slate-800 text-base">
                                        ৳{book.price}
                                    </TableCell>
                                    
                                    <TableCell className="py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <Link href={`/books/${book._id}`}>
                                                <Button size="sm" className="bg-slate-100 hover:bg-indigo-600 text-slate-700 hover:text-white font-medium rounded-lg transition-all">
                                                    View
                                                </Button>
                                            </Link>
                                            <Button 
                                                size="sm" 
                                                onClick={() => handleDelete(book._id)}
                                                className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-medium rounded-lg transition-all"
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default ManageBooks;