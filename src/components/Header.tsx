
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { User, ArrowUpRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 font-sora">
              int<span className="text-intervue-blue">ë</span>rvue
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">

            <a
              href="#"
              className="flex items-center gap-2 text-gray-900 font-medium hover:text-blue-600 transition-colors"
            >
              <User className="w-5 h-5" />
              Become an Interviewer
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#" className="text-gray-700 hover:text-intervue-blue transition-colors font-sora">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-intervue-blue transition-colors font-sora">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-intervue-blue transition-colors font-sora">
              Start a Trial
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-sora">
              Log in
            </Button>
            <Button className="bg-intervue-blue hover:bg-blue-700 font-sora">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-900 font-medium hover:text-blue-600 transition-colors"
              >
                <User className="w-5 h-5" />
                Become an Interviewer
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-intervue-blue font-sora">
                Features
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-intervue-blue font-sora">
                Pricing
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full font-sora">
                  Start a Trial
                </Button>
                <Button className="w-full bg-intervue-blue hover:bg-blue-700 font-sora">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
