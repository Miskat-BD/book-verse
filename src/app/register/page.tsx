"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Card, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const RegisterFormPage = ({ redirectTo = "/" }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formElement = e.currentTarget;
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        setLoading(true);

        try {
            const { data, error } = await authClient.signUp.email({
                email: user.email as string,
                password: user.password as string,
                name: user.name as string,
                callbackURL: redirectTo,
            });

            console.log("data", data, "error", error);

            if (data) {
                toast.success("Registration Successful!");
                formElement.reset();
                router.push(redirectTo);
            }
            if (error) {
                toast.error(`${error.message}`);
            }
        } catch (err: any) {
            toast.error("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="max-w-7xl mx-auto my-16 px-4">
            {/* Header */}
            <div className="my-6 text-center">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create your Account</h1>
                <p className="text-slate-500 mt-2">Join BookVerse to unlock opportunities</p>
            </div>

            {/* Container Card */}
            <Card className="max-w-md mx-auto p-6 sm:p-8 border border-slate-100 bg-white shadow-md flex justify-center items-center">
                <Form onSubmit={onSubmit} className="flex w-full flex-col gap-4 justify-center mx-auto">

                    {/* Full Name Field */}
                    <TextField isRequired name="name" type="text">
                        <Label className="text-sm font-semibold text-slate-700">Full Name</Label>
                        <Input placeholder="John Doe" className="w-full mt-1" />
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    {/* Email Field */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sm font-semibold text-slate-700">Email</Label>
                        <Input placeholder="john@example.com" className="w-full mt-1" />
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    {/* Password Field */}
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sm font-semibold text-slate-700">Password</Label>
                        <Input placeholder="Enter your password" className="w-full mt-1" />
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    {/* Submit Register Button */}
                    <Button 
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 mt-2 rounded-xl transition-all active:scale-98" 
                        type="submit"
                        isLoading={loading}
                    >
                        {loading ? "Creating Account..." : "Sign Up"}
                    </Button>
                </Form>

                {/* Social Login & Footer */}
                <div className="w-full mt-6">
                    <p className="text-center text-sm text-slate-600">
                        Already have an account?{" "}
                        <span className="text-indigo-600 font-semibold hover:underline">
                            <Link href="/auth/login">Log In</Link>
                        </span>
                    </p>

                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-slate-500">Or continue with</span>
                        </div>
                    </div>

                    <button 
                        onClick={handleGoogle} 
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl transition-all text-sm font-semibold shadow-sm"
                    >
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                            </g>
                        </svg>
                        Sign up with Google
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default RegisterFormPage;