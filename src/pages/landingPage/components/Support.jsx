import React from "react";
import heroImage from "../../../assets/images/therapy.jpg";

const Support = () => {
  return (
    <div className="support bg-gradient-to-r from-indigo-100 to-blue-50 text-white">
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center h-[300px] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }} // Use the imported image
      >
        <div className="bg-indigo-800 p-4 rounded-lg max-w-md mx-auto">
  <h1 className="text-2xl font-extrabold text-white leading-snug">
    Support & Education
  </h1>
  <p className="text-sm text-white mt-1">
    We offer resources to support mental health, its education, and awareness.
  </p>
</div>

      </section>

      {/* Main Content Section */}
      <div className="py-16 px-4 lg:px-16 space-y-12">
        {/* Grid Layout with Five Boxes in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
          {/* Educational Programs Box */}
          <div className="flex items-center hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-indigo-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://i.pinimg.com/564x/c1/be/46/c1be460385abd9801111ed2cc1c09952.jpg"
                alt="Education Program"
                className="w-40 h-40 object-cover rounded-full shadow-xl mb-6 mx-auto"
              />
              <h2 className="text-2xl font-semibold text-white mb-4">
                Education
              </h2>
              <p className="text-sm text-white leading-relaxed">
                Our educational programs provide a broad understanding of mental
                health. Access workshops, materials, and resources to help
                others.
              </p>
            </div>
          </div>

          {/* Family Support Box */}
          <div className="flex items-center hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-indigo-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/7579120/pexels-photo-7579120.jpeg"
                alt="Family Support"
                className="w-40 h-40 object-cover rounded-full shadow-xl mb-6 mx-auto"
              />
              <h2 className="text-2xl font-semibold text-white mb-4">
                Therapy
              </h2>
              <p className="text-sm text-white leading-relaxed">
                Our professional therapy services are designed to support
                individuals in managing mental health concerns
                 through personalized sessions.
              </p>
            </div>
          </div>

          {/* Peer Support Box */}
          <div className="flex items-center hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-indigo-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://i.pinimg.com/564x/8c/a9/0c/8ca90c9d50f5783a521b5e059e1c1c40.jpg"
                alt="Peer Support"
                className="w-40 h-40 object-cover rounded-full shadow-xl mb-6 mx-auto"
              />
              <h2 className="text-2xl font-semibold text-white mb-4">
                Peer Support
              </h2>
              <p className="text-sm text-white leading-relaxed">
                Connect with others who share similar experiences. Our peer
                support groups provide a safe space for shared understanding and
                mutual support.
              </p>
            </div>
          </div>

          {/* Crisis Resources Box */}
          <div className="flex items-center hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-indigo-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://i.pinimg.com/564x/13/40/42/134042cf86ddf348ea144efccab10833.jpg"
                alt="Crisis Resources"
                className="w-40 h-40 object-cover rounded-full shadow-xl mb-6 mx-auto"
              />
              <h2 className="text-2xl font-semibold text-white mb-4">
                Crisis Resource
              </h2>
              <p className="text-sm text-white leading-relaxed">
                Access a range of resources to help during mental health crises.
                From hotlines to emergency services, find immediate support when
                needed most.
              </p>
            </div>
          </div>

          {/* Online Resources Box */}
          <div className="flex items-center hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-indigo-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://i.pinimg.com/564x/5c/04/4d/5c044dfa3ddd5ef809f1c8e473d9bf35.jpg"
                alt="Online Resources"
                className="w-40 h-40 object-cover rounded-full shadow-xl mb-6 mx-auto"
              />
              <h2 className="text-2xl font-semibold text-white mb-4">
                Online
              </h2>
              <p className="text-sm text-white leading-relaxed">
                Our library of online materials, articles, guides, and videos
                that cover a wide range of mental health topics. Empower
                yourself with knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
