import React from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import Card from '../../components/ui/Card';
import { HelpCircle, MessageSquare, FileText, ExternalLink } from 'lucide-react';

export default function SupportPage() {
  const faqs = [
    {
      question: 'How do I create a new event?',
      answer: 'To create a new event, navigate to the Events page and click on the "Create Event" button. Fill in the required details about your event, including date, venue, and expected attendance.',
    },
    {
      question: 'How are sponsorship payments processed?',
      answer: 'Sponsorship payments are processed securely through our platform. Once a sponsor confirms their participation, they can make payments using various methods including bank transfer and digital payments.',
    },
    {
      question: 'What documents do I need for sponsorship?',
      answer: 'Required documents typically include your event proposal, budget breakdown, sponsorship packages, and any previous event reports. You can upload these in the Documents section.',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Help & Support</h1>
          <p className="mt-1 text-sm text-gray-400">
            Get help with your account and find answers to common questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 border border-gray-700">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-6 h-6 text-primary-400" />
                <h2 className="text-lg font-semibold text-white">Contact Support</h2>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Get in touch with our support team for personalized assistance
              </p>
              <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors">
                Start Chat
              </button>
            </div>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-primary-400" />
                <h2 className="text-lg font-semibold text-white">Documentation</h2>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Browse our comprehensive guides and documentation
              </p>
              <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors">
                View Docs
              </button>
            </div>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <ExternalLink className="w-6 h-6 text-primary-400" />
                <h2 className="text-lg font-semibold text-white">Video Tutorials</h2>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Watch step-by-step tutorials on using our platform
              </p>
              <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors">
                Watch Videos
              </button>
            </div>
          </Card>
        </div>

        <Card className="bg-gray-800 border border-gray-700">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <HelpCircle className="w-6 h-6 text-primary-400" />
              <h2 className="text-lg font-semibold text-white">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-white font-medium mb-2">{faq.question}</h3>
                  <p className="text-gray-300 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}