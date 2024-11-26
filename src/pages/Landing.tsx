import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Users, Target, Megaphone, HandshakeIcon } from 'lucide-react';

export default function Landing() {
  const teamMembers = [
    {
      name: "Anoushka Anoop",
      role: "CEO",
      image: "../../public/anoushka.jpg",
      description: "A visionary leader ready to tackle challenges and drive impactful goals."
    },
    {
      name: "Amogh Sikka",
      role: "COO",
      image: "../../public/amogh.jpg",
      description: "A strategist ensuring seamless operations and process efficiency."
    },
    {
      name: "Aadi Verma",
      role: "CTO",
      image: "../../public/aadi.jpg",
      description: "A tech innovator creating meaningful solutions."
    },
    {
      name: "Virat Sachdeva",
      role: "CFO",
      image: "../../public/virat.jpg",
      description: "A resourceful financier maximizing value."
    },
    {
      name: "Krish Malhotra",
      role: "CMO",
      image: "../../public/krish.jpg",
      description: "A storyteller building brand connections."
    }
  ];
  

  const services = [
    {
      icon: HandshakeIcon,
      title: "Event Sponsorship",
      description: "Connect with corporate sponsors for your college events through our intelligent matching system"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Build lasting relationships with sponsors and organize successful events that bring value to all stakeholders"
    },
    {
      icon: Target,
      title: "User Connections",
      description: "Network with event organizers and sponsors to create meaningful partnerships and opportunities"
    },
    {
      icon: Megaphone,
      title: "Marketing Opportunities",
      description: "Showcase your brand to a targeted audience and maximize your sponsorship impact"
    }
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen flex items-center">
          <div className="text-center w-full">
            <h1 className="text-6xl font-bold tracking-tight mb-6 text-white">
              Your Link to Opportunity
            </h1>
            <p className="text-2xl mb-12 text-gray-200">
              Join us today and easily get your funds ready
            </p>
            <div className="flex justify-center gap-6">
              <Link
                to="/register"
                className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 transition-colors text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-lg"
              >
                Log back in
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        className="py-24 bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">About SponSync</h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            SponSync is revolutionizing the way college events connect with corporate sponsors. 
            Our platform streamlines the entire sponsorship process, making it easier than ever 
            for event organizers to secure funding and for businesses to find valuable sponsorship 
            opportunities. With our innovative matching system and secure transaction platform, 
            we're building the future of event sponsorship.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        className="py-24 bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-purple-400"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-purple-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-900 text-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <span>contact@sponsync.in</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <span>+91 8130277940</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <span>+91 8978002012</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span>Shiv Nadar University</span>
              </div>
              <div className="flex space-x-6 pt-4">
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/spon_sync" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}