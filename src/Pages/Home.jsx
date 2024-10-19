import React from 'react'
import HeroSection from '../Components/Herosection';
import Slider from "react-slick";


const features = [
  {
    title: 'Real-Time ISL to Text Conversion',
    description:
      'Our platform provides instant, accurate translation of Indian Sign Language into text, ensuring seamless communication at any moment.',
  },
  {
    title: 'User-Friendly Interface',
    description:
      'Our intuitive design makes it easy to input sign language and receive text output effortlessly, whether you’re a first-time user or an experienced professional.',
  },
  {
    title: 'Tailored for the Deaf and Hard of Hearing Community',
    description:
      'We’re committed to empowering the deaf community with technology that enhances accessibility and independence.',
  },
  {
    title: 'Customizable Experience',
    description:
      'Adjust settings like text size and font type to create a personalized experience that suits your needs.',
  },
  {
    title: 'Comprehensive Conversion History',
    description:
      'Access your previous inputs and outputs easily, ensuring you can review or share your conversations whenever necessary.',
  },
  {
    title: 'Accuracy and Continuous Improvement',
    description:
      'With user feedback integrated into the platform, we constantly refine our sign language recognition for the highest accuracy.',
  },
  
];

const steps = [
  {
    number: 1,
    title: 'Record or Upload Video',
    description: 'Start by recording a video of yourself signing in Indian Sign Language or upload an existing video.',
    icon: '📹', // You can add icon if you want (optional)
  },
  {
    number: 2,
    title: 'Real-Time Conversion',
    description: 'Our AI-powered system processes the video in real-time, converting your sign language to accurate text.',
    icon: '⚙️',
  },
  {
    number: 3,
    title: 'Receive Text Output',
    description: 'Instantly receive the converted text output that you can view, save, or share for easy communication.',
    icon: '📝',
  }
];

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    feedback: "This platform has completely transformed how I work with my clients. The tools are intuitive and easy to use!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Jane Smith",
    role: "Therapist",
    feedback: "Managing patient records and tracking progress has never been easier. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mark Johnson",
    role: "Supervisor",
    feedback: "The platform’s ability to handle multiple cases and generate reports is a huge time-saver for me.",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg"
  },
];



const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  return (
    <div className='pb-0'>
      <HeroSection />
  {/* why you choose us  */}
  <section className="bg-gray-100 py-8 px-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How does it work  */}
    <section id="works" class="relative bg-gray-900 py-8 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">How does it work?</h2>
          <p class="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
            Our AI solution will help you from start to finish
          </p>
        </div>
        <div class="relative mt-12 lg:mt-20">
          <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img alt="" loading="lazy" width="1000" height="500" decoding="async" data-nimg="1" class="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" />
          </div>
          <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {/* Loop over the steps array and render each step dynamically */}
            {steps.map((step, index) => (
              <div key={index}>
                <div
                  class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700">{step.number}</span>
                </div>
                <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">{step.title}</h3>
                <p class="mt-4 text-base text-gray-400 md:text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
       >
      </div>
    </section>


    {/* testimonial  */}
     
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">What People Are Saying</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6">
              <div className="bg-white shadow-lg rounded-lg p-8">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="mt-4 text-gray-700 italic">"{testimonial.feedback}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
 

    </div>
  )
}

export default Home
