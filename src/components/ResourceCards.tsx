
import React from 'react';
import { Clock, Users, Award } from 'lucide-react';

const ResourceCards = () => {
  const resources = [
    {
      difficulty: 'EASY',
      color: 'bg-intervue-blue',
      title: 'Design a Chat Client App',
      description: 'Design a user interface for a web-based chat application. Create the basic layout and styles for a chat client.',
      duration: '45-60 MINS',
      participants: '1 PARTICIPANT',
      attempts: '3+ ATTEMPTS'
    },
    {
      difficulty: 'MEDIUM',
      color: 'bg-intervue-orange',
      title: 'Design a Post Input App',
      description: 'Create a responsive post input interface with rich text editing capabilities and media upload functionality.',
      duration: '60-75 MINS',
      participants: '1-2 PARTICIPANTS',
      attempts: '2+ ATTEMPTS'
    },
    {
      difficulty: 'HARD',
      color: 'bg-intervue-green',
      title: 'Design a Social Media App',
      description: 'Build a comprehensive social media dashboard with real-time updates, complex interactions, and responsive design.',
      duration: '90+ MINS',
      participants: '1-2 PARTICIPANTS',
      attempts: '1-2 ATTEMPTS'
    },
    {
      difficulty: 'EASY',
      color: 'bg-intervue-blue',
      title: 'Design a Food App',
      description: 'Create an intuitive food delivery app interface with menu browsing, cart functionality, and order tracking.',
      duration: '45-60 MINS',
      participants: '1 PARTICIPANT',
      attempts: '3+ ATTEMPTS'
    },
    {
      difficulty: 'MEDIUM',
      color: 'bg-intervue-orange',
      title: 'Design a HTML+CSS E-commerce Site',
      description: 'Build a complete e-commerce website with product listings, shopping cart, and checkout process using HTML and CSS.',
      duration: '75-90 MINS',
      participants: '1-2 PARTICIPANTS',
      attempts: '2+ ATTEMPTS'
    },
    {
      difficulty: 'HARD',
      color: 'bg-intervue-green',
      title: 'Design a Free Form App',
      description: 'Create a flexible form builder application with drag-and-drop functionality and dynamic field generation.',
      duration: '90+ MINS',
      participants: '1-2 PARTICIPANTS',
      attempts: '1-2 ATTEMPTS'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Difficulty Badge */}
              <div className="mb-4">
                <span className={`${resource.color} text-white px-3 py-1 rounded-full text-sm font-medium font-sora`}>
                  {resource.difficulty}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-sora">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-sm leading-relaxed font-sora">
                {resource.description}
              </p>

              {/* Stats */}
              <div className="space-y-2">
                <div className="flex items-center text-gray-500 text-sm font-sora">
                  <Clock className="w-4 h-4 mr-2" />
                  {resource.duration}
                </div>
                <div className="flex items-center text-gray-500 text-sm font-sora">
                  <Users className="w-4 h-4 mr-2" />
                  {resource.participants}
                </div>
                <div className="flex items-center text-gray-500 text-sm font-sora">
                  <Award className="w-4 h-4 mr-2" />
                  {resource.attempts}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCards;
