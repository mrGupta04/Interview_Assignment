
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-sora animate-fade-in">
          Technical Interview Resources
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-sora animate-fade-in">
          Build confidence through practice and elevate your technical skills
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for Google, Java, Python..."
              className="pl-12 py-4 text-lg bg-white border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-intervue-blue focus:border-transparent font-sora"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
