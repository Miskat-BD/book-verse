"use client";

import React, { useState } from "react";
import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import toast from "react-hot-toast";
import { addBooks, BookInputData } from "@/app/lib/actions/books";

const AddBooksForm = () => {
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElement = e.currentTarget;
        const formData = new FormData(formElement);
        
        // ফর্মের সব ডেটা অবজেক্টে নেওয়া
        const rawData = Object.fromEntries(formData.entries());

        // সঠিকভাবে টাইপ কাস্টিং করে ডেটা প্রস্তুত করা
        const bookData: BookInputData = {
            title: rawData.title as string,
            author: rawData.author as string,
            image: rawData.image as string,
            price: Number(rawData.price), // স্ট্রিং থেকে নাম্বার কনভার্ট
            category: rawData.category as string,
            description: rawData.description as string,
        };

        setLoading(true);

        try {
            // ১. ব্যাকএন্ডে রিকোয়েস্ট পাঠানো
            const res = await addBooks(bookData);
            console.log("Server Response:", res);

            // ২. সাকসেসফুল রেসপন্স পাওয়ার পর কেবল টোস্ট এবং রিসেট হবে
            toast.success("Book Added Successfully!");
            formElement.reset();
            
        } catch (err: any) {
            console.error("Error adding book:", err);
            toast.error(err.message || "Failed to add book");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto my-12 px-4">
            {/* Header */}
            <div className="my-6 text-center">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Add New Book</h1>
                <p className="text-slate-500 mt-2">Fill up the form below to contribute a new book to BookVerse</p>
            </div>

            {/* Container Card */}
            <Card className="max-w-2xl mx-auto p-6 sm:p-8 border border-slate-100 bg-white shadow-md">
                <Form onSubmit={onSubmit} className="flex w-full flex-col gap-5 justify-center mx-auto">
                    
                    {/* Grid Layout for Title & Author */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        {/* Book Title */}
                        <TextField isRequired name="title" type="text">
                            <Label className="text-sm font-semibold text-slate-700">Book Title</Label>
                            <Input placeholder="e.g., The Hobbit" className="w-full mt-1" />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        {/* Author Name */}
                        <TextField isRequired name="author" type="text">
                            <Label className="text-sm font-semibold text-slate-700">Author</Label>
                            <Input placeholder="e.g., J.R.R. Tolkien" className="w-full mt-1" />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>
                    </div>

                    {/* Grid Layout for Image URL & Price */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        {/* Book Cover Image URL */}
                        <TextField isRequired name="image" type="url">
                            <Label className="text-sm font-semibold text-slate-700">Book Cover Image URL</Label>
                            <Input placeholder="https://example.com/cover.jpg" className="w-full mt-1" />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        {/* Price Field */}
                        <TextField isRequired name="price" type="number">
                            <Label className="text-sm font-semibold text-slate-700">Price ($)</Label>
                            <Input placeholder="19.99" min="0" step="0.01" className="w-full mt-1" />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>
                    </div>

                    {/* Book Category Selector */}
                    <div className="flex flex-col gap-1 w-full">
                        <Label className="text-sm font-semibold text-slate-700">Category</Label>
                        <div className="relative w-full mt-1">
                            <select
                                name="category"
                                defaultValue="fiction"
                                className="w-full h-10 px-3 py-2 bg-white border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-indigo-600 appearance-none cursor-pointer transition-colors text-slate-700 font-medium"
                            >
                                <option value="fiction">Fiction</option>
                                <option value="non-fiction">Non-Fiction</option>
                                <option value="sci-fi">Sci-Fi & Fantasy</option>
                                <option value="mystery">Mystery & Thriller</option>
                                <option value="biography">Biography</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Book Description */}
                    <div className="flex flex-col gap-1 w-full">
                        <Label className="text-sm font-semibold text-slate-700">Description</Label>
                        <textarea
                            required
                            name="description"
                            placeholder="Write a brief summary of the book..."
                            rows={4}
                            className="w-full p-3 bg-white border border-slate-200 text-sm rounded-xl focus:outline-none focus:border-indigo-600 transition-colors text-slate-700 mt-1 resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <Button 
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 mt-4 rounded-xl transition-all active:scale-98 cursor-pointer" 
                        type="submit"
                        isLoading={loading}
                    >
                        {loading ? "Adding Book..." : "Add Book to Library"}
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default AddBooksForm;