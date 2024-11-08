import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      {/* Introduction */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">About Us</h1>
        <p className="text-lg mb-10">
          We are dedicated to improving the lives of individuals affected by
          mental health conditions. Our mission is to provide support,
          education, and advocacy to everyone in need.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold mb-4 text-center lg:text-left">
              Our Mission
            </h2>
            <p className="text-center lg:text-left text-lg mb-6">
              We envision a world where all people affected by mental health
              conditions live healthy, fulfilling lives supported by a caring
              community.
            </p>
            <p className="text-center lg:text-left text-lg">
              Our mission is to promote mental wellness by fostering
              understanding and providing essential resources for those impacted
              by mental health issues.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://i.pinimg.com/564x/66/a6/f5/66a6f57a774b3a2f6664311703b63f93.jpg"
              alt="Mission"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-5xl mx-auto py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Value 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-white font-semibold mb-4">Empathy</h3>
            <p className="text-sm text-white">
              We approach our work with compassion and understanding for those
              we serve, respecting their unique journeys.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-white font-semibold mb-4">
              Empowerment
            </h3>
            <p className="text-sm text-white">
              We strive to empower individuals to overcome challenges and reach
              their potential, providing resources and support.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-white font-semibold mb-4">Advocacy</h3>
            <p className="text-sm text-white">
              We advocate for improved mental health policies, working to break
              stigma and build understanding in society.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold mb-4">Our Impact</h2>
            <p className="text-lg mb-6">
              Over the years, we will reach millions through our educational
              programs, support groups, and advocacy efforts. By joining us, you
              become part of a movement dedicated to mental health.
            </p>
            <p className="text-lg mb-4">
              Together, we work towards a world where everyone has access to
              mental health support and stigma is a thing of the past.
            </p>
            <button to="/support" className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-md font-semibold hover:bg-[#005fa3] transition-all">
              Learn More About Our Work
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://i.pinimg.com/564x/68/fa/42/68fa42518bc34a8f1f2684146f441586.jpg" // Use your desired image URL
              alt="Impact"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
