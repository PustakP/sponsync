import React from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import Card from '../../components/ui/Card';
import { Bookmark, Calendar, MessageSquare, TrendingUp } from 'lucide-react';

export default function SponsorDashboard() {
  const stats = [
    { name: 'Sponsored Events', value: '8', icon: Calendar, change: '+2 this month' },
    { name: 'Saved Events', value: '15', icon: Bookmark, change: '3 new' },
    { name: 'Messages', value: '24', icon: MessageSquare, change: '5 unread' },
    { name: 'Investment', value: '₹2.5M', icon: TrendingUp, change: '+₹500K this month' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's an overview of your sponsorship activities.
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
          {/* Recommended Events */}
          <Card>
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">Recommended Events</h2>
            </div>
            <div className="divide-y">
              {[1, 2, 3].map((event) => (
                <div key={event} className="px-6 py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Startup Summit 2024</h3>
                      <p className="text-sm text-gray-500">April 20, 2024 • Mumbai</p>
                      <p className="text-sm text-gray-500 mt-1">Expected Audience: 1000+</p>
                    </div>
                    <button className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Active Sponsorships */}
          <Card>
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">Active Sponsorships</h2>
            </div>
            <div className="divide-y">
              {[1, 2, 3].map((sponsorship) => (
                <div key={sponsorship} className="px-6 py-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Tech Fest 2024</h3>
                      <p className="text-sm text-gray-500">Package: Gold Sponsor</p>
                      <p className="text-sm text-gray-500">Status: Contract Signed</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
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