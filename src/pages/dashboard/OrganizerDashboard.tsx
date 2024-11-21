import React from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import Card from '../../components/ui/Card';
import { TrendingUp, Users, Calendar, MessageSquare } from 'lucide-react';

export default function OrganizerDashboard() {
  const stats = [
    { name: 'Active Events', value: '3', icon: Calendar, change: '+2 this month' },
    { name: 'Total Sponsors', value: '12', icon: Users, change: '+5 this month' },
    { name: 'Messages', value: '28', icon: MessageSquare, change: '8 unread' },
    { name: 'Success Rate', value: '85%', icon: TrendingUp, change: '+10% this month' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's what's happening with your events.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.name} className="px-6 py-4">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.change}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Events */}
          <Card>
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">Recent Events</h2>
            </div>
            <div className="divide-y">
              {[1, 2, 3].map((event) => (
                <div key={event} className="px-6 py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Tech Conference 2024</h3>
                      <p className="text-sm text-gray-500">March 15, 2024</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Messages */}
          <Card>
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">Recent Messages</h2>
            </div>
            <div className="divide-y">
              {[1, 2, 3].map((message) => (
                <div key={message} className="px-6 py-4">
                  <div className="flex items-start">
                    <img
                      src={`https://ui-avatars.com/api/?name=Sponsor+${message}`}
                      alt="Sponsor"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Tech Corp {message}</p>
                      <p className="text-sm text-gray-500">Interested in your event...</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}