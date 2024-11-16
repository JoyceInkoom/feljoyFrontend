import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faBook, faTachometerAlt, faHandPaper, faTrophy, faFeatherAlt, faHeadphones, faHeart } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  const features = [
    {
      title: 'Peer and Professional Therapists',
      description: 'Get support from both peer therapists and licensed professionals to help you on your mental health journey.',
      icon: faUserMd,
      bgColor: 'bg-blue-500',
      shape: 'absolute top-0 left-0 w-1/2 h-1/2 bg-orange-400 opacity-20 rounded-full',
    },
    {
      title: 'Mental Health Resources',
      description: 'Access a wide range of resources to support your mental health, from articles to exercises and more.',
      icon: faBook,
      bgColor: 'bg-green-500',
      shape: 'absolute bottom-0 right-0 w-1/2 h-1/2 bg-pink-500 opacity-30 rounded-full',
    },
    {
      title: 'User Dashboard',
      description: 'Track your progress, set goals, and stay on top of your mental health journey with our easy-to-use dashboard.',
      icon: faTachometerAlt,
      bgColor: 'bg-yellow-500',
      shape: 'absolute top-0 right-0 w-1/2 h-1/2 bg-purple-600 opacity-40 rounded-full',
    },
    {
      title: 'Stress Ball',
      description: 'Release stress and calm your mind with our interactive stress ball feature.',
      icon: faHandPaper,
      bgColor: 'bg-red-500',
      shape: 'absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-400 opacity-30 rounded-full',
    },
    {
      title: 'Celebrations',
      description: 'Post your achievements and milestones, and celebrate with the community as we applaud your progress!',
      icon: faTrophy,
      bgColor: 'bg-purple-700',
      shape: 'absolute top-0 left-0 w-1/2 h-1/2 bg-yellow-400 opacity-25 rounded-full',
    },
    {
      title: 'Emotion Diary',
      description: 'Track your emotions and moods in a private and secure diary to help manage your feelings.',
      icon: faFeatherAlt,
      bgColor: 'bg-pink-600',
      shape: 'absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600 opacity-35 rounded-full',
    },
    {
      title: 'Relaxing Sounds',
      description: 'Take a break and listen to relaxing sounds to help you unwind and destress.',
      icon: faHeadphones,
      bgColor: 'bg-indigo-500',
      shape: 'absolute top-0 right-0 w-1/2 h-1/2 bg-green-400 opacity-20 rounded-full',
    },
    {
      title: 'Become a Therapist',
      description: 'Volunteer as a peer therapist or a professional therapist and make a difference in someone’s life.',
      icon: faHeart,
      bgColor: 'bg-indigo-600',
      shape: 'absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-600 opacity-25 rounded-full',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-indigo-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative rounded-lg shadow-xl p-6 transition-all hover:shadow-2xl ${feature.bgColor} text-white`}
            >
              <div className={feature.shape}></div>
              <div className="flex justify-center mb-4">
                <FontAwesomeIcon icon={feature.icon} className="text-4xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
