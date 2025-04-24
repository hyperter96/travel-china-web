'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Travel Blogger",
      image: "/assets/images/sarah.jpg",
      content: "The visa application guide provided by Travel China made the process incredibly smooth. Their step-by-step instructions helped me get my visa approved on the first try!"
    },
    {
      name: "Michael Chen",
      title: "Business Traveler",
      image: "/assets/images/michael.jpg",
      content: "As a frequent business traveler to China, the real-time navigation tool has been a game-changer. No more getting lost in unfamiliar cities. Highly recommended!"
    },
    {
      name: "Emma Taylor",
      title: "Backpacker",
      image: "/assets/images/emma.jpg",
      content: "Their customized tour planning saved me countless hours of research. The itinerary they suggested perfectly matched my interests and budget."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Real experiences from travelers who have used our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 bg-muted/50">
              <div className="flex items-center mb-6">
                <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.title}</p>
                </div>
              </div>
              
              <p className="text-foreground/80">&ldquo;{testimonial.content}&rdquo;</p>
              
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-accent mr-1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 