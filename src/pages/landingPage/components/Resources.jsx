import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBook,
  faPhone,
  faComments,
  faHandshake,
  faCapsules,
  faMedkit,
  
} from "@fortawesome/free-solid-svg-icons";

const mentalHealthData = [
  
  {
    title: "Mental Health Books",
    description: "Discover books on mental health and wellness.",
    icon: faBook,
    link: "https://www.goodreads.com/search?q=mental+health",
  },
  {
    title: "MedlinePlus",
    description: "Medication information and side effects.",
    icon: faMedkit,
    link: "https://medlineplus.gov/api/",
  },
  {
    title: "RxList",
    description: "Medication information and interactions.",
    icon: faCapsules,
    link: "https://www.rxlist.com/api/",
  },
  {
    title: "Mental Health Community",
    description: "Connect with others for support and discussion.",
    icon: faComments,
    link: "https://www.7cups.com/",
  },
  {
    title: "Therapy Resources",
    description: "Find therapists and counseling services.",
    icon: faHandshake,
    link: "https://www.psychologytoday.com/",
  },
  {
    title: "Mental Health Awareness",
    description: "Learn about mental health awareness and advocacy.",
    icon: faHeart,
    link: "https://www.nami.org/",
  },
];


const Resources = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center mt-16"
      style={{
        backgroundImage: `url(https://i.pinimg.com/236x/7a/f1/72/7af172555ff49224b2dbdee26875d930.jpg)`,
      }}
    >
      <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-lg max-w-6xl mx-auto mt-0">
        <h2 className="text-3xl font-bold text-center mb-6 mt-16">
          Mental Health Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentalHealthData.map((resource, index) => (
            <div
              key={index}
              className="p-4 bg-indigo-800 rounded-lg text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={resource.icon}
                  className="text-2xl mr-2"
                />
                <h3 className="text-xl font-semibold">{resource.title}</h3>
              </div>
              <p className="mb-4">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-purple-800"
              >
                Get Resource
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
