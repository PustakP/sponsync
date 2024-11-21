import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import Card from '../../components/ui/Card';
import { Calendar, MapPin, Users, Tag, Download, MessageSquare, ExternalLink } from 'lucide-react';

// Mock event data (in a real app, this would come from an API)
const mockEvent = {
  id: 1,
  title: 'Tech Fest 2024',
  description: 'Annual technology festival featuring competitions, workshops, and exhibitions. Join us for an exciting celebration of innovation and technology.',
  date: '2024-04-15',
  location: 'Mumbai, Maharashtra',
  footfall: 5000,
  type: 'Technical',
  college: 'IIT Bombay',
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  organizer: {
    name: 'Dr. Rajesh Kumar',
    email: 'rajesh.kumar@iitb.ac.in',
    phone: '+91 98765 43210'
  },
  sponsorshipTiers: [
    {
      name: 'Platinum',
      amount: '₹5,00,000',
      benefits: [
        'Prime logo placement on all materials',
        'VIP access to all events',
        'Dedicated booth space',
        'Speaking opportunity'
      ]
    },
    {
      name: 'Gold',
      amount: '₹3,00,000',
      benefits: [
        'Logo on main banners',
        'Access to all events',
        'Booth space'
      ]
    }
  ],
  timeline: [
    { date: '2024-04-15', event: 'Opening Ceremony' },
    { date: '2024-04-16', event: 'Technical Competitions' },
    { date: '2024-04-17', event: 'Workshops & Seminars' },
    { date: '2024-04-18', event: 'Closing Ceremony' }
  ]
};

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, fetch event details based on id
  const event = mockEvent;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-white">{event.title}</h1>
            <p className="mt-1 text-sm text-gray-400">{event.college}</p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={() => navigate('/dashboard/messages')}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors flex items-center"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Organizer
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Image */}
            <Card className="bg-gray-800 border border-gray-700 overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-2 text-primary-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-2 text-primary-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-2 text-primary-400" />
                    {event.footfall.toLocaleString()} attendees
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Tag className="w-5 h-5 mr-2 text-primary-400" />
                    {event.type}
                  </div>
                </div>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </Card>

            {/* Event Timeline */}
            <Card className="bg-gray-800 border border-gray-700">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Event Timeline</h2>
                <div className="space-y-4">
                  {event.timeline.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-900 text-primary-400 mr-4">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{item.event}</p>
                        <p className="text-sm text-gray-400">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Organizer Info */}
            <Card className="bg-gray-800 border border-gray-700">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Organizer Information</h2>
                <div className="space-y-3">
                  <p className="text-gray-300"><span className="font-medium">Name:</span> {event.organizer.name}</p>
                  <p className="text-gray-300"><span className="font-medium">Email:</span> {event.organizer.email}</p>
                  <p className="text-gray-300"><span className="font-medium">Phone:</span> {event.organizer.phone}</p>
                </div>
              </div>
            </Card>

            {/* Sponsorship Tiers */}
            <Card className="bg-gray-800 border border-gray-700">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Sponsorship Tiers</h2>
                <div className="space-y-4">
                  {event.sponsorshipTiers.map((tier, index) => (
                    <div key={index} className="p-4 border border-gray-700 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-medium">{tier.name}</h3>
                        <span className="text-primary-400 font-semibold">{tier.amount}</span>
                      </div>
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}