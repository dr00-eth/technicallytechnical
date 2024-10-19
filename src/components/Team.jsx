import React from 'react';

const TeamMember = ({ name, role, description, imageUrl }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-purple-100 hover:-translate-y-1 text-center group">
    <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300" />
    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">{name}</h3>
    <h4 className="text-md text-blue-600 mb-2 group-hover:text-yellow-500 transition-colors duration-300">{role}</h4>
    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Drew Meyer",
      role: "Co-Founder & Chief Emoji Officer",
      description: "Visionary leader with a passion for innovative tech solutions and dad jokes. Can debug code and puns with equal proficiency.",
      imageUrl: "/images/drew.jpeg"
    },
    {
      name: "Steve Fox",
      role: "Co-Founder & Wizard of Oz (the Programming Language)",
      description: "Tech guru with deep expertise in AI, automation systems, and finding the best GIFs for Slack conversations.",
      imageUrl: "/images/fox.png"
    },
    {
      name: "Steve Miller",
      role: "Co-Founder & Master of Keyboard Shortcuts",
      description: "Operations mastermind ensuring smooth project delivery and maintaining our office's coffee machine. Both are mission-critical.",
      imageUrl: "/images/miller.png"
    }
  ];

  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Meet Our Technically Terrific Team</h2>
        <p className="text-xl mb-12 text-center text-gray-700 max-w-3xl mx-auto">
          Technically, we're a team of tech enthusiasts and industry innovators. But practically, we're a bunch of geeks who love making your business work smarter with AI and Automation. Don't worry, we don't byte!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;