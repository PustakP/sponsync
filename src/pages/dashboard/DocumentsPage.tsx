import React from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import Card from '../../components/ui/Card';
import { FileText, Download, Eye, Trash2 } from 'lucide-react';

export default function DocumentsPage() {
  const documents = [
    {
      id: 1,
      name: 'Sponsorship Proposal.pdf',
      type: 'PDF',
      size: '2.4 MB',
      lastModified: '2024-03-15',
      status: 'Approved',
    },
    {
      id: 2,
      name: 'Event Budget.xlsx',
      type: 'Excel',
      size: '1.8 MB',
      lastModified: '2024-03-14',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Contract Draft.docx',
      type: 'Word',
      size: '856 KB',
      lastModified: '2024-03-13',
      status: 'Under Review',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Documents</h1>
          <p className="mt-1 text-sm text-gray-400">
            Manage your event documents and contracts
          </p>
        </div>

        <Card className="bg-gray-800 border border-gray-700">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Recent Documents</h2>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors">
                Upload Document
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-3 text-sm font-medium text-gray-400">Name</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Type</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Size</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Modified</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Status</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {documents.map((doc) => (
                    <tr key={doc.id}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <FileText className="w-5 h-5 text-primary-400 mr-3" />
                          <span className="text-sm text-white">{doc.name}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-gray-300">{doc.type}</span>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-gray-300">{doc.size}</span>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-gray-300">{doc.lastModified}</span>
                      </td>
                      <td className="py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          doc.status === 'Approved'
                            ? 'bg-green-900 text-green-300'
                            : doc.status === 'Pending'
                            ? 'bg-yellow-900 text-yellow-300'
                            : 'bg-blue-900 text-blue-300'
                        }`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex space-x-3">
                          <button className="text-gray-400 hover:text-white">
                            <Eye className="w-5 h-5" />
                          </button>
                          <button className="text-gray-400 hover:text-white">
                            <Download className="w-5 h-5" />
                          </button>
                          <button className="text-gray-400 hover:text-red-400">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
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