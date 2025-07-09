import React from 'react';
import { Shield, FileText, Rocket, Globe, ArrowRight } from 'lucide-react';

const SecuritySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sora">
            Security is our top priority
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sora">
            Intervue serves startups to Fortune 500 companies with enterprise-grade security baked in by design.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Security Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <Shield className="w-8 h-8 text-gray-700" />
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-sora">
              Security
            </h3>
            <p className="text-gray-600 text-sm font-sora">
              Protecting your data at every layer is fundamental to how Intervue works.
            </p>
          </div>

          {/* Compliances Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <FileText className="w-8 h-8 text-gray-700" />
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-sora">
              Compliances
            </h3>
            <p className="text-gray-600 text-sm font-sora">
              Enterprise-grade compliance commitments, with controls established to meet them.
            </p>
          </div>

          {/* Startups Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <Rocket className="w-8 h-8 text-gray-700" />
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-sora">
              Intervue for Startups
            </h3>
            <p className="text-gray-600 text-sm font-sora">
              Fast, secure, and scalable interview platform tailored for startup teams.
            </p>
          </div>

          {/* Global Reach Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <Globe className="w-8 h-8 text-gray-700" />
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-sora">
              Global Reach
            </h3>
            <p className="text-gray-600 text-sm font-sora">
              Used by teams across the world to scale interviews without boundaries.
            </p>
          </div>

          {/* Enterprises Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900 font-sora">
                Intervue for Enterprises
              </span>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-gray-600 text-sm font-sora">
              Scalable, secure, and fully compliant platform for enterprise hiring pipelines.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Profile graphic */}
            <div className="lg:w-1/2">
              <div className="relative w-96 h-64 rounded-r-full overflow-hidden bg-gray-800">
                {/* Background Image */}
                <img
                  src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png"
                  alt="Niket Gupta"
                  className="w-full h-full object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold font-sora">Niket Gupta</h4>
                  <p className="text-sm text-gray-300 font-sora">Head of Acquisition, Yubi</p>
                </div>
              </div>
            </div>



            {/* Right: Testimonial */}
            <div className="lg:w-1/2">
              <blockquote className="text-lg text-gray-700 mb-6 font-sora">
                "After interviewing candidates on Intervue, we were able to convert at least 5% of people from our application base to hires."
              </blockquote>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 font-sora">Niket Gupta</h4>
                <p className="text-gray-600 font-sora">Group Head of Talent Acquisition, Yubi</p>
              </div>
              <a href="#" className="text-blue-600 hover:underline inline-flex items-center font-sora">
                See more customer stories
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
