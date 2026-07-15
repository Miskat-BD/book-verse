import { serverMutation } from "../core/server";

// বইয়ের ডেটার জন্য একটি ইন্টারফেস/টাইপ ডিফাইন করা ভালো
export interface BookInputData {
    title: string;
    author: string;
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