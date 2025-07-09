
import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerSections = [
    {
      title: 'Company',
      links: ['So gehts', 'Erfahrung', 'Aligner', 'Preise', 'Standorte']
    },
    {
      title: 'Resources',
      links: ['Blog', 'FAQ', 'Lift Media', 'Offene Stellen', 'Presse kit']
    },
    {
      title: 'Product',
      links: ['Gratis Termin', 'Freunde einladen', 'Patienteninforma', 'Blog', 'FAQ']
    },
    {
      title: 'Product',
      links: ['Blog', 'FAQ', 'Lift Media', 'Offene Stellen', 'Presse kit']
    }
  ];

  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="max-w-md">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400 font-sora">
              Hire better & faster
            </h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border-gray-500 text-white placeholder-gray-400 font-sora"
              />
              <Button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 font-sora">
                →
              </Button>
            </div>
          </div>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 font-sora">
              int<span className="text-intervue-blue">ë</span>rvue
            </h3>
            <div className="flex space-x-6 mb-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-sora">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-sora">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-sora">
                Linkedin
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-sora">
                Pinterest
              </a>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 font-sora">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors font-sora text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-12">
          <div className="mb-6">
            <h4 className="font-semibold mb-2 font-sora">Still have doubts?</h4>
            <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center font-sora">
              📞 Talk to our representative
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 font-sora text-sm mb-4 md:mb-0">
              © 2023 intervue. Crafted by great minds.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-sora text-sm">
                Datenschutz
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-sora text-sm">
                Impressum
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-sora text-sm">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-sora text-sm">
                AGBs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
