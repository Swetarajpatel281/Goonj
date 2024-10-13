import React from 'react'
import HeroSection from '../Components/Herosection';
import { useState } from 'react';

const features = [
  {
    icon: '🧠', // You can replace this with actual icons
    title: 'AI-Driven Therapy',
    description: 'Leverage AI to provide personalized therapy recommendations and optimize patient treatment plans.',
  },
  {
    icon: '🛡️',
    title: 'GDPR/HIPAA Compliance',
    description: 'Fully compliant with GDPR and HIPAA regulations, ensuring the highest level of data security and privacy for all patients.',
  },
  {
    icon: '📱',
    title: 'Ease of Use & Integration',
    description: 'Our platform is designed with ease of use in mind, allowing therapists to focus on delivering exceptional care.',
  },
  {
    icon: '📊',
    title: 'Real-Time Progress Tracking',
    description: 'Track patient progress in real-time with comprehensive reports and data analytics for better clinical outcomes.',
  },
  {
    icon: '💬',
    title: 'Collaboration Tools',
    description: 'Facilitate seamless communication between therapists, supervisors, and patients through integrated messaging.',
  },
  {
    icon: '🌍',
    title: 'Remote Access & Scalability',
    description: 'Access therapy tools anytime, anywhere, with a platform built for scalability, enabling therapy delivery regardless of location.',
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Speech Therapist",
    quote: "This platform has completely transformed how I work with patients. It's intuitive, efficient, and has saved me countless hours of administrative work.",
    image: "/images/sarah.jpg", // Replace with actual image paths or URLs
    rating: 5,
  },
  {
    name: "John D.",
    role: "Patient",
    quote: "I finally received the speech therapy I needed, even remotely! The collaboration tools make it easy to stay connected with my therapist.",
    image: "/images/john.jpg",
    rating: 5,
  },
  {
    name: "Lisa K.",
    role: "Supervisor",
    quote: "The real-time progress tracking is invaluable. I can oversee my team’s work and make adjustments instantly. Highly recommend this platform!",
    image: "/images/lisa.jpg",
    rating: 4,
  },
];



const Home = () => {

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  return (
    <div>
      <HeroSection />
  {/* why you choose us  */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* testimonial  */}
     
   <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What People Are Saying</h2>
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg text-center">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
            />
            <p className="text-lg font-semibold">{testimonials[current].name}</p>
            <p className="text-sm text-gray-600 mb-2">{testimonials[current].role}</p>
            <p className="text-gray-700 italic mb-4">&quot;{testimonials[current].quote}&quot;</p>
            <div className="flex justify-center items-center mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">&#9733;</span>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between mt-6">
            <button onClick={handlePrev} className="text-gray-700 text-2xl">&#8592;</button>
            <button onClick={handleNext} className="text-gray-700 text-2xl">&#8594;</button>
          </div>
        </div>
      </div>
    </section>
 

    </div>
  )
}

export default Home
