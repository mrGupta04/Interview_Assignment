import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      title: "On-demand",
      description:
        "Save 90% of engineering & recruitment bandwidth, outsource candidate interviews to us",
      preview: "/pic/1.png",
      previewAlt: "On-demand interviews preview",
    },
    {
      title: "Live interviews",
      description:
        "Assess candidates in real-time with our live coding environment & integrated video calls",
      preview: "/pic/2.png",
      previewAlt: "Live interviews preview",
    },
    {
      title: "Assessments",
      description:
        "Share assessments across batches with MCQ, Programming and Subjective questions",
      preview: "/pic/3.png",
      previewAlt: "Assessments preview",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 font-sora">
          Explore more products on Intervue
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-3 mb-5 shadow-sm">
                <img
                  src={product.preview}
                  alt={product.previewAlt}
                  className="w-full h-40 object-contain"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-sora">
                {product.title}
              </h3>
              <p
                className="text-sm text-gray-600 font-sora leading-relaxed"
                style={{ marginBottom: '5.5rem' }}
              >
                {product.description}
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-sora text-sm font-medium inline-flex items-center gap-1 transition-colors">
                Know more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
