import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-100 to-blue-50 text-gray-800 py-16 px-6">
      {/* Introduction */}
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-indigo-800 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mb-6 px-4 md:px-0 max-w-xl mx-auto leading-relaxed">
          We are dedicated to improving the lives of individuals affected by mental health conditions. Our mission is to provide support, education, and advocacy to everyone in need.
        </p>
      </div>

      {/* Mission and Impact Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Mission Section */}
        <div className="bg-white shadow-xl rounded-xl py-8 px-6 flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-sm text-gray-600 mb-4">
              We envision a world where all people, affected by mental health conditions live healthy, fulfilling lives supported by a caring community. We envision a world where every home is a sfe space.
            </p>
            <p className="text-sm text-gray-600">
              Our mission is to promote mental wellness by fostering understanding
               and providing essential resources for those impacted by mental health issues.
            </p>
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 ease-in-out">
              Learn About Our Mission
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg"
                alt="Mission"
                className="object-cover w-full h-72 rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-white shadow-xl rounded-xl py-8 px-6 flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-sm text-gray-600 mb-4">
              Over the years, we have reached millions through our educational programs, support groups, and advocacy efforts. Join us in creating a world where mental health support is accessible to all.
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Together, we work toward eliminating stigma and ensuring that no one faces mental health challenges alone.
            </p>
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 ease-in-out">
              Learn More About Our Work
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="https://i.pinimg.com/564x/68/fa/42/68fa42518bc34a8f1f2684146f441586.jpg"
                alt="Impact"
                className="object-cover w-full h-72 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-5xl mx-auto py-12">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Value 1 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Empathy</h3>
            <p className="text-sm text-gray-600">
              We approach our work with compassion and understanding for those we serve, respecting their unique journeys.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Empowerment</h3>
            <p className="text-sm text-gray-600">
              We strive to empower individuals to overcome challenges and reach their potential, providing resources and support.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Advocacy</h3>
            <p className="text-sm text-gray-600">
              We advocate for improved mental health policies, working to break stigma and build understanding in society.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
