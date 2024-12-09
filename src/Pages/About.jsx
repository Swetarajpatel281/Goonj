
const About = () => {


  return (
    <div>
     {/* Hero section  */}
    <section className="relative w-full h-screen bg-gradient-to-r from-blue-400 to-green-400 ">
      {/* Background overlay with tech accents */}
      <div className="absolute inset-0 bg-opacity-50 bg-white flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" 
            style={{ backgroundImage: `url('/path-to-your-image/tech-overlay.png')` }}>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-700 mb-4">
          Empowering Speech Language with Technology
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-8">
          Streamlining Speech Translator Services for Better Outcomes
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#learn-more" className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-50 transition duration-300">
            Learn More
          </a>
          <a href="/signup" className="bg-transparent border border-white text-gray-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-white hover:text-blue-500 transition duration-300">
            Explore Platform Features
          </a>
        </div>
      </div>
    </section>


    </div>
  )
}

export default About
