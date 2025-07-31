// components/about/Team.jsx
import React from 'react';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';

const Team = () => {
  const teamMembers = [
    {
      name: "Rajiv Sharma",
      role: "Founder & CEO",
      bio: "Visionary leader with 20+ years in telecommunications industry",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Priya Patel",
      role: "CTO",
      bio: "Technology innovator driving our network infrastructure development",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Vikram Mehta",
      role: "Operations Director",
      bio: "Ensuring seamless service delivery across all locations",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Ananya Reddy",
      role: "Customer Experience Head",
      bio: "Dedicated to creating exceptional experiences for our customers",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="custom_container_padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600">
            The passionate leaders driving RK Netlinks&apos;s vision forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="common_border bg-gradient-to-b from-white to-blue-50 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="bg-gray-200 border-2 border-dashed w-full h-56" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  <a 
                    href={member.social.linkedin} 
                    className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-colors"
                  >
                    <FiLinkedin />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2 rounded-full transition-colors"
                  >
                    <FiTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="common_border bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl mt-16 p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Team</h3>
            <p className="text-xl text-gray-600 mb-6">
              We are always looking for passionate individuals to help us connect India to the digital future.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
              View Career Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;