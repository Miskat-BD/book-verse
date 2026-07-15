import { redirect } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// HTTP Methods এর জন্য নির্দিষ্ট টাইপ
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export const serverMutation = async (
    path: string, 
    method: HttpMethod, 
    data?: Record<string, unknown> // 🚀 any এর পরিবর্তে unknown ব্যবহার করা হয়েছে
): Promise<unknown> => { // 🚀 Promise<any> এর পরিবর্তে Promise<unknown>
    
    // URL তৈরি করার সময় baseURL আনডিফাইন্ড কিনা তা চেক করা ভালো
    const url = baseURL ? `${baseURL}${path}` : path;

    const res: Response = await fetch(url, {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        // data থাকলে কেবল বডি পাস হবে, না থাকলে undefined
        body: data ? JSON.stringify(data) : undefined
    });

    return handleStatusCode(res);
};

// handle 401, 403, 404
const handleStatusCode = async (res: Response): Promise<unknown> => {
    if (res.status === 401) {
        redirect('/unauthorized');
    }
    else if (res.status === 403) {
        redirect('/forbidden');
    }
    else if (res.status === 404) {
        redirect('/not-found');
    }

    // রেসপন্স যদি সাকসেস না হয় (যেমন: 400 বা 500), তবে এরর থ্রো করা ভালো
    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error((errorData as { message?: string }).message || `HTTP error! status: ${res.status}`);
    }

    return res.json();
};