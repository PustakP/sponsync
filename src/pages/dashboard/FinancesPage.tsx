import React from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import Card from '../../components/ui/Card';
import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function FinancesPage() {
  const transactions = [
    {
      id: 1,
      company: 'Tech Corp',
      amount: '₹500,000',
      type: 'Credit',
      date: '2024-03-15',
      status: 'Completed',
    },
    {
      id: 2,
      company: 'Event Services',
      amount: '₹150,000',
      type: 'Debit',
      date: '2024-03-14',
      status: 'Pending',
    },
    {
      id: 3,
      company: 'Innovation Labs',
      amount: '₹300,000',
      type: 'Credit',
      date: '2024-03-13',
      status: 'Completed',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Finances</h1>
          <p className="mt-1 text-sm text-gray-400">
            Track your sponsorship finances and transactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 border border-gray-700">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Balance</p>
                  <p className="text-2xl font-semibold text-white mt-1">₹2,450,000</p>
                </div>
                <div className="p-2 bg-primary-900 rounded-lg">
                  <DollarSign className="w-6 h-6 text-primary-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-green-400">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span className="text-sm">+12.5% from last month</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Income</p>
                  <p className="text-2xl font-semibold text-white mt-1">₹3,200,000</p>
                </div>
                <div className="p-2 bg-green-900 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-green-400">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span className="text-sm">+8.2% from last month</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">Total Expenses</p>
                  <p className="text-2xl font-semibold text-white mt-1">₹750,000</p>
                </div>
                <div className="p-2 bg-red-900 rounded-lg">
                  <ArrowDownRight className="w-6 h-6 text-red-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-red-400">
                <ArrowDownRight className="w-4 h-4 mr-1" />
                <span className="text-sm">-3.1% from last month</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-gray-800 border border-gray-700">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors">
                Export Report
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-3 text-sm font-medium text-gray-400">Company</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Amount</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Type</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Date</th>
                    <th className="pb-3 text-sm font-medium text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="py-4">
                        <span className="text-sm text-white">{transaction.company}</span>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-gray-300">{transaction.amount}</span>
                      </td>
                      <td className="py-4">
                        <span className={`text-sm ${
                          transaction.type === 'Credit' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {transaction.type}
                        </span>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-gray-300">{transaction.date}</span>
                      </td>
                      <td className="py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          transaction.status === 'Completed'
                            ? 'bg-green-900 text-green-300'
                            : 'bg-yellow-900 text-yellow-300'
                        }`}>
                          {transaction.status}
                        </span>
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