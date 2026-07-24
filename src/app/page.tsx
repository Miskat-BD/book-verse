import Hero from '@/components/Hero';
import FeaturedBooks from '@/components/FeaturedBooks';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturesShowcase from '@/components/FeaturesShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterBanner from '@/components/NewsletterBanner';

export default function HomePage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Books */}
      <FeaturedBooks />

      {/* 3. Browse Categories */}
      <CategoriesSection />

      {/* 4. Features Showcase */}
      <FeaturesShowcase />

      {/* 5. Reader Testimonials */}
      <TestimonialsSection />

      {/* 6. Newsletter Subscription */}
      <NewsletterBanner />
    </main>
  );
}