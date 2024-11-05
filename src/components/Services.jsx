import React from 'react';
import { Bot, Zap, Home, GitBranch, Briefcase, Lightbulb, Book, Headphones, Palette, PenTool, Calendar, BarChart2 } from 'lucide-react';

const ServiceCard = ({ Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-100 hover:-translate-y-1 group">
    <Icon className="text-blue-600 mb-4 group-hover:text-yellow-400 transition-colors duration-300" size={36} />
    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      Icon: Bot,
      title: "AI Bot",
      description: "We put AI into play for your business, no assembly required. It's like the future, but today, and funnier!"
    },
    {
      Icon: Zap,
      title: "Automation Solutions",
      description: "Wish your processes could just run themselves? Consider it done. It's like magic, only more technical and less rabbits."
    },
    {
      Icon: Home,
      title: "Real Estate",
      description: "We make real estate systems as smooth as a freshly mown lawn. But with less noise and more curb appeal."
    },
    {
      Icon: GitBranch,
      title: "Workflow Optimization",
      description: "We'll tweak, tune, and perfect your workflows until they hum like a well-oiled machine. No actual oil required!"
    },
    {
      Icon: Briefcase,
      title: "Industry-Agnostic",
      description: "No matter the industry, we've got the technical know-how to tailor our solutions to your needs. It's like a bespoke suit, but less itchy."
    },
    {
      Icon: Lightbulb,
      title: "Innovation Consulting",
      description: "We keep our finger on the pulse of the latest tech trends, so you don't have to. Stay ahead of the curve without breaking a sweat or your calculator."
    },
    {
      Icon: Book,
      title: "AI & Automation Training",
      description: "We help your team get up to speed with the latest AI & automation tools. It's like school, only more fun and without the homework. Unless you want homework, we won't judge."
    },
    {
      Icon: Headphones,
      title: "Ongoing Support",
      description: "Got a question or need a hand? We're here to help, technically around the clock. But please, no calls at 3 AM unless it's really, really important. Or really, really funny."
    },
    {
      Icon: PenTool,
      title: "Creative Content Engine",
      description: "Want to bring your brand to life on social media, but lack the time or energy? We'll take care of everything from crafting posts to scheduling. Think of it as a non-stop content machine that's always on-brand and ready to engage—minus the endless brainstorming sessions."
    },
    {
      Icon: Palette,
      title: "Digital Design & Assets",
      description: "Need visuals that pop and materials that actually represent your brand? Our team designs everything from sleek brochures to bold flyers. It's like hiring a full-time designer who gets your brand voice—and never complains about deadlines."
    },
    {
      Icon: Calendar,
      title: "Seamless Scheduling",
      description: "Tired of scheduling chaos? We'll set up calendars, reminders, and sync across platforms so you never miss a beat. It's like a personal assistant, but with better memory and no coffee breaks. (Sorry, not sorry.)"
    },
    {
      Icon: BarChart2,
      title: "Feedback & Insights Hub",
      description: "Data doesn't have to be dull. We create easy-to-use forms and surveys, collecting the info you need in a format you actually understand. Think of it as your secret weapon for getting feedback without the hassle."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">What We Do, Technically...</h2>
        <p className="text-xl mb-12 text-center text-gray-700 max-w-3xl mx-auto">
          From AI bots to information systems, we're here to make your tech dreams come true. And yes, we clean windows... Windows OS, that is!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;