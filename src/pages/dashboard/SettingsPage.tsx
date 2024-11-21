import React from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import Card from '../../components/ui/Card';
import { User, Bell, Lock, Globe } from 'lucide-react';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="mt-1 text-sm text-gray-400">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border border-gray-700">
              <nav className="space-y-1 p-4">
                <button className="flex items-center space-x-3 text-white bg-primary-600 hover:bg-primary-700 w-full p-2 rounded-lg transition-colors">
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </button>
                <button className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 w-full p-2 rounded-lg transition-colors">
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </button>
                <button className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 w-full p-2 rounded-lg transition-colors">
                  <Lock className="w-5 h-5" />
                  <span>Security</span>
                </button>
                <button className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 w-full p-2 rounded-lg transition-colors">
                  <Globe className="w-5 h-5" />
                  <span>Preferences</span>
                </button>
              </nav>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-gray-800 border border-gray-700">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-white mb-6">Profile Settings</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300">Profile Photo</label>
                    <div className="mt-2 flex items-center space-x-4">
                      <img
                        src="https://ui-avatars.com/api/?name=User&background=6366f1&color=fff"
                        alt="Profile"
                        className="w-16 h-16 rounded-full"
                      />
                      <button type="button" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors">
                        Change Photo
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300">First Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white focus:ring-primary-500 focus:border-primary-500"
                        defaultValue="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Last Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white focus:ring-primary-500 focus:border-primary-500"
                        defaultValue="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white focus:ring-primary-500 focus:border-primary-500"
                      defaultValue="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300">Bio</label>
                    <textarea
                      rows={4}
                      className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white focus:ring-primary-500 focus:border-primary-500"
                      defaultValue="Event organizer with 5+ years of experience..."
                    />
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}