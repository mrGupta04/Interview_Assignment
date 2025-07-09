
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: 'How do I schedule an interview?',
      answer: 'You can schedule an interview by logging into your dashboard and selecting an available time slot that works for both you and the interviewer.'
    },
    {
      question: 'Will I be charged per interview?',
      answer: 'Our pricing is transparent and based on your subscription plan. Please check our pricing page for detailed information about interview costs.'
    },
    {
      question: 'Can I get a trial for On-demand interviews?',
      answer: 'Yes, we offer a free trial for new users to experience our on-demand interview platform. Sign up to get started with your trial.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sora">
            FAQs
          </h2>
          <p className="text-gray-600 font-sora">
            Here are frequently asked questions to clear all your doubts.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-medium text-gray-900 font-sora">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <Minus className="w-5 h-5 text-gray-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </div>
              {openItems.includes(index) && (
                <div className="mt-4 text-gray-600 font-sora">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 font-sora">
            Still have doubts?
          </h3>
          <a href="#" className="text-blue-600 hover:underline inline-flex items-center font-sora">
            📞 Talk to our representative
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
