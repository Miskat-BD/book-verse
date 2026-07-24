import { serverMutation } from "../core/server";

// বইয়ের ডেটার জন্য একটি ইন্টারফেস/টাইপ ডিফাইন করা ভালো
export interface BookInputData {
    title: string;
    author: string;
    userId: string;
    image: string;
    price: number;
    category: string;
    description: string;
}

export const addBooks = async (data: BookInputData): Promise<unknown> => {
    // serverMutation এর জন্য data টিকে টাইপ কাস্ট করে পাঠানো হচ্ছে
    return serverMutation(
        '/books', 
        'POST', 
        data as unknown as Record<string, unknown>
    );
};

export const getBookByUserId = async (userId: string): Promise<any> => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    const res = await fetch(`${baseUrl}/api/books/user/${userId}`, {
        cache: 'no-store'
    });
    
    if (!res.ok) throw new Error("Failed to load books");
    return res.json();
};