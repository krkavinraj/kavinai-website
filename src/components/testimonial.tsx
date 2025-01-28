import { MessageSquareQuoteIcon } from 'lucide-react';
import React from 'react'

export const Testimonial = () => {
    const testimonials = [
        {
          id: 1,
          name: "John Doe",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          review: "This product has completely transformed the way I work. It's intuitive, efficient, and a game-changer for my productivity.",
          backgroundColor: "bg-blue-100",
        },
        {
          id: 2,
          name: "Jane Smith",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          review: "I'm impressed with the level of customer support. The team goes above and beyond to ensure customer satisfaction.",
          backgroundColor: "bg-green-100",
        },
        {
          id: 3,
          name: "Mike Johnson",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          review: "The quality of this product exceeded my expectations. It's durable, well-designed, and worth every penny.",
          backgroundColor: "bg-purple-100",
        },
      ];
    
      return (
        <div className="container mx-auto px-4 py-16 dark:bg-gray-900">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Don't just take our word for it - hear from our satisfied customers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`${testimonial.backgroundColor} dark:bg-slate-800 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500`}
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <div className="flex items-start">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <MessageSquareQuoteIcon className="text-gray-400 mb-2" />
                    <p className="text-gray-800 dark:text-gray-200 mb-4">{testimonial.review}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
