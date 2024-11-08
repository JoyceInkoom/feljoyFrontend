import React from 'react';

const Support = () => {
  return (
    <div className="support bg-gray-800 text-white">
      {/* Hero Banner */}
      <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center bg-[url('/path/to/hero-image.jpg')]">
        <div className="bg-gray-500 bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-4xl font-bold text-white">Support & Education</h1>
          <p className="text-lg text-white mt-2">We have resources to support mental health, it's education and awareness</p>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="py-10 px-4 lg:px-20 space-y-16">
        
        {/* First Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img src="https://i.pinimg.com/564x/c1/be/46/c1be460385abd9801111ed2cc1c09952.jpg" alt="Education Program" className="w-full lg:w-1/2 rounded-lg shadow-lg" />
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Educational Programs</h2>
            <p className="text-lg">
              Our educational programs provide a broad understanding of mental health and support skills. 
              Find resources, workshops, and materials to learn more and help others.
            </p>
          </div>
        </div>

        {/* Second Content Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <img src="https://i.pinimg.com/564x/0b/b4/7d/0bb47d24d8cdb7feed7c34d3ab25ce9c.jpg" alt="Family Support" className="w-full lg:w-1/2 rounded-lg shadow-lg" />
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Family Support</h2>
            <p className="text-lg">
              Our family support services offer guidance for families dealing with mental health issues. Learn ways 
              to care for loved ones while maintaining balance.
            </p>
          </div>
        </div>

        {/* Third Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img src="https://i.pinimg.com/564x/8c/a9/0c/8ca90c9d50f5783a521b5e059e1c1c40.jpg" alt="Peer Support" className="w-full lg:w-1/2 rounded-lg shadow-lg" />
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Peer Support</h2>
            <p className="text-lg">
              Connect with others who share similar experiences. Our peer support groups provide a safe space 
              for shared understanding and mutual support.
            </p>
          </div>
        </div>

        {/* Fourth Content Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <img src="https://i.pinimg.com/564x/13/40/42/134042cf86ddf348ea144efccab10833.jpg" alt="Crisis Resources" className="w-full lg:w-1/2 rounded-lg shadow-lg" />
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Crisis Resources</h2>
            <p className="text-lg">
              Access a range of resources for handling mental health crises. From hotlines to emergency 
              services, find support when it's needed most.
            </p>
          </div>
        </div>
        
        {/* Fifth Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img src="https://i.pinimg.com/564x/5c/04/4d/5c044dfa3ddd5ef809f1c8e473d9bf35.jpg" alt="Online Resources" className="w-full lg:w-1/2 rounded-lg shadow-lg" />
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Online Resources</h2>
            <p className="text-lg">
              Explore our library of online materials, including articles, guides, and videos that cover 
              a wide range of mental health topics.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Support;
