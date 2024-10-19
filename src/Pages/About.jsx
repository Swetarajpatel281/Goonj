import {React, useState }from 'react' 
import { FaLightbulb } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";
import { FaTabletAlt, FaComments, FaBrain, FaShieldAlt, FaChartLine, FaGlobe } from 'react-icons/fa'; // Import icons
import { FaRobot } from 'react-icons/fa';
const objectives = [
  {
    icon: <FaTabletAlt className="text-blue-500 w-12 h-12 mb-4" />,
    title: "Digitize the Therapy Process",
    description: "Streamline manual workflows into efficient, digital processes.",
  },
  {
    icon: <FaComments className="text-green-500 w-12 h-12 mb-4" />,
    title: "Enhance Collaboration",
    description: "Integrated messaging system for seamless communication between therapists, supervisors, and patients.",
  },
  {
    icon: <FaBrain className="text-purple-500 w-12 h-12 mb-4" />,
    title: "Support Therapy with AI",
    description: "AI-driven therapy recommendations and predictive insights.",
  },
  {
    icon: <FaShieldAlt className="text-red-500 w-12 h-12 mb-4" />,
    title: "Ensure Data Privacy & Compliance",
    description: "GDPR/HIPAA-compliant systems for data privacy and secure access.",
  },
  {
    icon: <FaChartLine className="text-yellow-500 w-12 h-12 mb-4" />,
    title: "Promote Accountability and Transparency",
    description: "Real-time progress tracking and detailed clinical evaluations.",
  },
  {
    icon: <FaGlobe className="text-teal-500 w-12 h-12 mb-4" />,
    title: "Improve Access to Therapy",
    description: "Effective case management to ensure timely therapy, regardless of location.",
  },
];

 // Tab content data
 const tabs = [
  {
    id: 1,
    title: "AI-Powered Therapy",
    icon: <FaRobot className="w-8 h-8 text-blue-500" />,
    content: (
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">AI-Powered Therapy</h3>
        <p className="text-gray-600 mb-4">
          Our AI-driven recommendations provide personalized therapy insights to optimize treatment plans. Explore how AI offers suggestions based on patient data.
        </p>
        <img
          src="/path-to-image/ai-therapy-demo.png"
          alt="AI Therapy Demo"
          className="mx-auto w-full md:w-1/2"
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Secure Data Management",
    icon: <FaShieldAlt className="w-8 h-8 text-green-500" />,
    content: (
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Secure Data Management</h3>
        <p className="text-gray-600 mb-4">
          Our platform ensures data security and compliance with GDPR and HIPAA, so patient information is always protected.
        </p>
        <img
          src="/path-to-image/data-security.png"
          alt="Data Security"
          className="mx-auto w-full md:w-1/2"
        />
      </div>
    ),
  },
  {
    id: 3,
    title: "Therapist & Patient Collaboration",
    icon: <FaComments className="w-8 h-8 text-purple-500" />,
    content: (
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Therapist & Patient Collaboration</h3>
        <p className="text-gray-600 mb-4">
          Our integrated messaging system fosters seamless collaboration between therapists, supervisors, and patients. Experience real-time communication in action.
        </p>
        <img
          src="/path-to-image/collaboration-tools.png"
          alt="Collaboration Tools"
          className="mx-auto w-full md:w-1/2"
        />
      </div>
    ),
  },
];



const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
     {/* Hero section  */}
    <section className="relative w-full h-screen bg-gradient-to-r from-blue-400 to-green-400">
      {/* Background overlay with tech accents */}
      <div className="absolute inset-0 bg-opacity-50 bg-white flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" 
            style={{ backgroundImage: `url('/path-to-your-image/tech-overlay.png')` }}>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
          Empowering Speech Language Therapy with Technology
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-8">
          Streamlining Speech Therapy Services for Better Outcomes
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#learn-more" className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-50 transition duration-300">
            Learn More
          </a>
          <a href="#platform-features" className="bg-transparent border border-white text-gray-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-white hover:text-blue-500 transition duration-300">
            Explore Platform Features
          </a>
        </div>
      </div>
    </section>
    

    {/* Our vision and mission  */}
    <section className="py-12 px-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2">
          
          {/* Vision Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center text-blue-500 mb-4">
              <FaLightbulb className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">Our Vision</h2>
            <p className="text-center text-gray-600">
              More Accessible, Efficient, Personalized Speech Therapy.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center text-green-500 mb-4">
              <FaBullseye className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">Our Mission</h2>
            <p className="text-center text-gray-600">
              Empower Therapists and Patients with a Seamless Digital Platform.
            </p>
          </div>

        </div>
      </div>
    </section>
 
  {/* Our Objectives  */}

    <section className="py-12 px-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Objectives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center">
                {objective.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mt-4 mb-2">{objective.title}</h3>
              <p className="text-gray-600 text-center">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
 
{/* Platform features  */}

    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Platform Features</h2>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white shadow-lg transform scale-105'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {tab.icon}
              <span className="mt-2 text-sm font-medium">{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </section>
 
 {/* Call to action  */}
 <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `url('/path-to-image/happy-therapists.jpg')`, // Replace with actual background image
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Join us in Revolutionizing Speech Therapy.
        </h2>
        <div className="flex justify-center space-x-4">
          <a
            href="#demo"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Sign Up for a Demo
          </a>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>


    </div>
  )
}

export default About
