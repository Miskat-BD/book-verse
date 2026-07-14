'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Better-Auth এর রিয়েল সেশন হুক
  const { data: session, isPending } = authClient.useSession();
  
  // সেশনে ইউজার অবজেক্ট থাকলে সে লগড-ইন
  const isLoggedIn = !!session?.user;

  // Logout ফাংশনালিটি
  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success('Logged out successfully');
            router.push('/');
            router.refresh();
          },
        },
      });
    } catch (error: any) {
      toast.error(error.message || 'Failed to logout');
    }
  };

  const publicLinks = [
    { label: 'Home', href: '/' },
    { label: 'Books', href: '/books' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const privateLinks = [
    { label: 'Add Book', href: '/books/add' },
    { label: 'Manage Books', href: '/books/manage' },
  ];

  // সেশনের ওপর বেস করে ডাইনামিক রাউটস
  const currentNavLinks = isLoggedIn ? [...publicLinks, ...privateLinks] : publicLinks;

  // সেশন চেক করার সময় UI যাতে লাফ না দেয়, তাই ইনিশিয়াল লোডিং হ্যান্ডেল
  if (isPending) {
    return <div className="h-16 w-full fixed bg-white border-b border-slate-200 animate-pulse top-0 left-0 z-50" />;
  }

  return (
    <nav className="w-full border-b border-slate-200 fixed top-0 left-0 z-50 shadow-sm backdrop-blur-md bg-white/90">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 select-none">
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Book<span className="text-indigo-600">Verse</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {currentNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${pathname === link.href
                  ? 'text-indigo-600'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Authentication UI Trigger */}
            <div className="flex items-center space-x-4 border-l border-slate-200 pl-6 ml-2">
              {isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-slate-700">
                    Hi, {session.user.name.split(' ')[0]} {/* শুধু প্রথম নাম দেখাবে */}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
                    Login
                  </Link>
                  <Link href="/register" className="px-4 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all shadow-sm">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 transition-colors rounded-lg hover:bg-slate-50"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar/Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-slate-100 w-full px-4 pt-2 pb-6 space-y-1 shadow-inner"
          >
            {currentNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-semibold ${pathname === link.href
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-200 mt-4 px-4 flex flex-col space-y-3">
              {isLoggedIn ? (
                <>
                  <div className="text-sm font-medium text-slate-500 text-center">
                    Signed in as: <span className="font-semibold text-slate-800">{session.user.email}</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                    className="w-full text-center font-bold text-red-600 py-2.5 bg-red-50 hover:bg-red-100 rounded-xl transition-colors cursor-pointer"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center font-bold text-slate-700 py-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center font-bold text-white py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-sm"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}