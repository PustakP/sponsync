import React from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import Card from '../../components/ui/Card';
import { Building2, Users, DollarSign, Award } from 'lucide-react';

export default function SponsorsPage() {
  const sponsors = [
    {
      id: 1,
      name: 'Tech Corp',
      industry: 'Technology',
      sponsorshipAmount: '₹500,000',
      status: 'Active',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80',
    },
    {
      id: 2,
      name: 'Innovation Labs',
      industry: 'Research',
      sponsorshipAmount: '₹300,000',
      status: 'Pending',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80',
    },
    {
      id: 3,
      name: 'Future Ventures',
      industry: 'Finance',
      sponsorshipAmount: '₹750,000',
      status: 'Active',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&h=100&q=80',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Sponsors</h1>
          <p className="mt-1 text-sm text-gray-400">
            Manage your event sponsors and partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gray-800 border border-gray-700">
            <div className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-primary-900 rounded-lg">
                  <Building2 className="w-6 h-6 text-primary-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Total Sponsors</p>
                  <p className="text-2xl font-semibold text-white">24</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <div className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-secondary-900 rounded-lg">
                  <Users className="w-6 h-6 text-secondary-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Active Partners</p>
                  <p className="text-2xl font-semibold text-white">12</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <div className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-900 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Total Funding</p>
                  <p className="text-2xl font-semibold text-white">₹2.4M</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <div className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-900 rounded-lg">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Success Rate</p>
                  <p className="text-2xl font-semibold text-white">85%</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-gray-800 border border-gray-700">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Current Sponsors</h2>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors">
                Add New Sponsor
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-3 text-sm font-medium text-gray-400">Company</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Industry</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Amount</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Status</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {sponsors.map((sponsor) => (
                    <tr key={sponsor.id}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="ml-4">
                            <p className="text-sm font-medium text-white">{sponsor.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-gray-300">{sponsor.industry}</span>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-gray-300">{sponsor.sponsorshipAmount}</span>
                      </td>
                      <td className="py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          sponsor.status === 'Active'
                            ? 'bg-green-900 text-green-300'
                            : 'bg-yellow-900 text-yellow-300'
                        }`}>
                          {sponsor.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <button className="text-sm text-primary-400 hover:text-primary-300">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}