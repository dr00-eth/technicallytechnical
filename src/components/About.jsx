import React, { forwardRef } from 'react';
import { Code, Zap, Users } from 'lucide-react';

const FeatureCard = ({ Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-yellow-100 hover:-translate-y-1">
    <Icon className="text-blue-600 mb-4" size={36} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = forwardRef((props, ref) => {
  const features = [
    {
      Icon: Code,
      title: "System Architecture",
      description: "We design systems so smooth, they'll make your old tech jealous. It's like giving your business a digital makeover!"
    },
    {
      Icon: Zap,
      title: "Process Automation",
      description: "We'll automate your tasks faster than you can say 'coffee break'. More efficiency, less papercuts!"
    },
    {
      Icon: Users,
      title: "On-Demand CTO Services",
      description: "All the brains of a CTO, none of the awkward water cooler chats. It's like having a tech superhero on speed dial!"
    }
  ];

  return (
    <section ref={ref} id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">About Us (Technically Speaking)</h2>
        <p className="text-xl mb-12 text-center text-gray-700 max-w-3xl mx-auto">
          Welcome to Technically Technical! We're as serious about the 'technical' as we are about the 'technically'... which technically, isn't all that serious. We're the light-hearted wizards behind the curtain, turning your complex problems into laughably easy solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default About;