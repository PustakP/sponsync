import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import Card from '../../components/ui/Card';
import { Calendar, MapPin, Users, Tag, Plus } from 'lucide-react';
import { indianCities } from '../../data/cities';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  footfall: number;
  type: string;
  college: string;
  image: string;
}

interface FilterState {
  location: string;
  eventType: string;
  minFootfall: string;
  date: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: 'Tech Fest 2024',
    description: 'Annual technology festival featuring competitions, workshops, and exhibitions.',
    date: '2024-04-15',
    location: 'Mumbai, Maharashtra',
    footfall: 5000,
    type: 'Technical',
    college: 'IIT Bombay',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Cultural Summit',
    description: 'Celebrating diversity through arts, music, and dance performances.',
    date: '2024-05-20',
    location: 'Delhi, NCR',
    footfall: 3000,
    type: 'Cultural',
    college: 'Delhi University',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Business Conclave',
    description: 'Annual business summit featuring industry leaders and entrepreneurs.',
    date: '2024-06-10',
    location: 'Bangalore, Karnataka',
    footfall: 2000,
    type: 'Business',
    college: 'IIM Bangalore',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80'
  }
];

export default function EventsPage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<FilterState>({
    location: '',
    eventType: '',
    minFootfall: '',
    date: ''
  });

  const filteredEvents = mockEvents.filter(event => {
    if (filters.location && !event.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.eventType && event.type !== filters.eventType) return false;
    if (filters.minFootfall && event.footfall < parseInt(filters.minFootfall)) return false;
    if (filters.date && event.date !== filters.date) return false;
    return true;
  });

  const handleViewDetails = (eventId: number) => {
    navigate(`/dashboard/events/${eventId}`);
  };

  const handleCreateEvent = () => {
    navigate('/dashboard/events/create');
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Events</h1>
            <p className="mt-1 text-sm text-gray-400">
              Browse and manage your events
            </p>
          </div>
          <button
            onClick={handleCreateEvent}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create Event
          </button>
        </div>

        {/* Filters */}
        <Card className="bg-gray-800 border border-gray-700">
          <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              value={filters.location}
              onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
            >
              <option value="">Select City</option>
              {indianCities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
            <select
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              value={filters.eventType}
              onChange={(e) => setFilters(prev => ({ ...prev, eventType: e.target.value }))}
            >
              <option value="">Event Type</option>
              <option value="Technical">Technical</option>
              <option value="Cultural">Cultural</option>
              <option value="Business">Business</option>
              <option value="Sports">Sports</option>
              <option value="Academic">Academic</option>
            </select>
            <input
              type="number"
              placeholder="Min. Footfall"
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400"
              value={filters.minFootfall}
              onChange={(e) => setFilters(prev => ({ ...prev, minFootfall: e.target.value }))}
            />
            <input
              type="date"
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              value={filters.date}
              onChange={(e) => setFilters(prev => ({ ...prev, date: e.target.value }))}
            />
          </div>
        </Card>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <Card key={event.id} className="overflow-hidden bg-gray-800 border border-gray-700">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                  <p className="text-sm text-gray-400">{event.college}</p>
                </div>
                <p className="text-sm text-gray-300">{event.description}</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary-400" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-primary-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary-400" />
                    {event.footfall.toLocaleString()} attendees
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2 text-primary-400" />
                    {event.type}
                  </div>
                </div>
                <button 
                  onClick={() => handleViewDetails(event.id)}
                  className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition"
                >
                  View Details
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}