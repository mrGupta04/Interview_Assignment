
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ResourceCards from '@/components/ResourceCards';
import SecuritySection from '@/components/SecuritySection';
import ProductShowcase from '@/components/ProductShowcase';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-sora">
      <Header />
      <Hero />
      <ResourceCards />
      <SecuritySection />
      <ProductShowcase />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
