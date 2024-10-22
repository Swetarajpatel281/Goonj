import React from 'react'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <div>
 <div className="relative items-start justify-between">
  <h1 className="text-9xl font-bold absolute top-[40px] left-[25%] transform -translate-x-1/2" style={{ color: '#083344' }}>
    Contact Us
  </h1>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <defs>
      <linearGradient id="grayToGreen" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#86efac', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#083344', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path fill="url(#grayToGreen)" fillOpacity="1" d="M0,0L80,0C160,0,320,0,480,32C640,64,800,128,960,170.7C1120,213,1280,235,1360,245.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
  </svg>
  <div className="absolute right-0  p-12 w-[500px] top-[40px]">
    <ContactForm />
  </div>
</div>


    </div>
  )
}

export default Contact
