import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  Calendar, 
  MessageSquare, 
  Settings,
  Bell,
  Users,
  FileText,
  DollarSign,
  HelpCircle,
  LogOut,
  ChevronDown,
  Zap
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Events', href: '/dashboard/events', icon: Calendar },
    { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
    { name: 'Sponsors', href: '/dashboard/sponsors', icon: Users },
    { name: 'Documents', href: '/dashboard/documents', icon: FileText },
    { name: 'Finances', href: '/dashboard/finances', icon: DollarSign },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    { name: 'Help & Support', href: '/dashboard/support', icon: HelpCircle },
  ];

  const notifications = [
    { id: 1, title: 'New sponsor request', message: 'Tech Corp is interested in your event', time: '5m ago' },
    { id: 2, title: 'Document approved', message: 'Your event proposal has been approved', time: '1h ago' },
    { id: 3, title: 'Payment received', message: 'Sponsorship payment of ₹50,000 received', time: '2h ago' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    setIsUserMenuOpen(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 bottom-0 w-64 bg-gray-800 border-r border-gray-700 transform 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 transition-transform duration-200 ease-in-out z-30
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-gray-700">
            <button onClick={() => handleNavigation('/dashboard')} className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-indigo-400" />
              <span className="text-xl font-bold text-white">SponSync</span>
            </button>
            <button 
              className="lg:hidden text-gray-400 hover:text-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`
                    flex items-center w-full px-2 py-2 text-sm font-medium rounded-lg transition-colors
                    ${isActive(item.href)
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* User Menu */}
          <div className="border-t border-gray-700 p-4">
            <div className="relative" ref={userMenuRef}>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center w-full"
              >
                <img
                  src="https://ui-avatars.com/api/?name=User&background=6366f1&color=fff"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3 flex-1 text-left">
                  <p className="text-sm font-medium text-white">User Name</p>
                  <p className="text-xs text-gray-400">user@example.com</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute bottom-full left-0 w-full mb-2">
                  <div className="bg-gray-800 rounded-lg shadow-lg py-1 border border-gray-700">
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <div className="sticky top-0 z-10 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              className="lg:hidden text-gray-400 hover:text-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Notifications */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700"
                >
                  <Bell className="w-6 h-6" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
                    <div className="p-4 border-b border-gray-700">
                      <h3 className="text-lg font-semibold text-white">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="p-4 border-b border-gray-700 hover:bg-gray-700 cursor-pointer"
                        >
                          <p className="text-sm font-medium text-white">{notification.title}</p>
                          <p className="text-sm text-gray-400">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-4">
                      <button className="text-sm text-indigo-400 hover:text-indigo-300 w-full text-center">
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}