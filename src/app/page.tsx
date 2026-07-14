import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Categories Section Target Line (Next Section Placeholder) */}
      <div id="categories-section" className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Browse by Categories</h2>
          <p className="text-slate-500 mt-2">Next section content will sit here...</p>
        </div>
      </div>
    </div>
  );
}