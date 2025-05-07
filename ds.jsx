import React, { useState } from 'react';
import { LayoutDashboard, Settings, FileText, Check, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  // State for tab selection
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Mock data for invoices
  const upcomingInvoices = [
    { id: 1, client: 'Client A', amount: 100, dueDate: 'May 10' },
    { id: 3, client: 'Client C', amount: 350, dueDate: 'May 15' },
    { id: 4, client: 'Client D', amount: 750, dueDate: 'May 20' }
  ];
  
  const pastDueInvoices = [
    { id: 2, client: 'Client B', amount: 200, dueDate: 'May 5', isLate: true }
  ];
  
  // Mock data for activity log
  const activityLog = [
    { id: 1, date: 'May 1', description: 'Reminder sent to Client B', status: 'opened' },
    { id: 2, date: 'April 30', description: 'Client A paid', status: 'success' },
    { id: 3, date: 'April 29', description: 'Reminder sent to Client A', status: null },
    { id: 4, date: 'April 28', description: 'New invoice created for Client D', status: null }
  ];
  
  // Handler for sending reminders
  const handleRemind = (clientId) => {
    console.log(`Sending reminder to client ID: ${clientId}`);
    alert(`Reminder sent to ${clientId}`);
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white shadow-md fixed h-full">
        <div className="p-5 border-b border-gray-200">
          <h2 className="text-blue-500 text-xl font-semibold">InvoiceReminder</h2>
        </div>
        
        <nav className="p-5 flex-grow">
          <a href="#" className="flex items-center px-4 py-3 text-blue-500 bg-blue-50 rounded mb-2">
            <LayoutDashboard className="w-5 h-5 mr-3" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded mb-2">
            <Settings className="w-5 h-5 mr-3" />
            <span>Settings</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded">
            <FileText className="w-5 h-5 mr-3" />
            <span>Templates</span>
          </a>
        </nav>
        
        <div className="p-5 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-9 h-9 bg-blue-500 text-white rounded-full flex items-center justify-center font-medium mr-3">
              JS
            </div>
            <div>
              <p className="font-medium text-sm">John Smith</p>
              <p className="text-xs text-gray-500">Free Plan</p>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="ml-60 flex-grow p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        </header>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex space-x-8">
            <button
              className={`pb-4 px-1 font-medium relative ${
                activeTab === 'upcoming'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming ({upcomingInvoices.length})
            </button>
            <button
              className={`pb-4 px-1 font-medium relative ${
                activeTab === 'pastDue'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('pastDue')}
            >
              Past Due ({pastDueInvoices.length})
            </button>
          </div>
        </div>
        
        {/* Invoice Cards */}
        <div className="mb-8">
          {activeTab === 'upcoming' && (
            <div className="space-y-4">
              {upcomingInvoices.map(invoice => (
                <div key={invoice.id} className="bg-white rounded-lg shadow p-5 flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-lg mb-1">{invoice.client}</div>
                    <div className="text-gray-800 mb-1">${invoice.amount}</div>
                    <div className="text-gray-500 text-sm">Due {invoice.dueDate}</div>
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
                    onClick={() => handleRemind(invoice.client)}
                  >
                    Remind
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'pastDue' && (
            <div className="space-y-4">
              {pastDueInvoices.map(invoice => (
                <div 
                  key={invoice.id} 
                  className="bg-white rounded-lg shadow p-5 flex justify-between items-center border-l-4 border-red-500"
                >
                  <div>
                    <div className="font-semibold text-lg mb-1">{invoice.client}</div>
                    <div className="text-gray-800 mb-1">${invoice.amount}</div>
                    <div className="text-gray-500 text-sm">
                      Due {invoice.dueDate} 
                      {invoice.isLate && <span className="text-red-500 ml-1">(Late)</span>}
                    </div>
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
                    onClick={() => handleRemind(invoice.client)}
                  >
                    Remind
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Activity Log */}
        <div className="bg-white rounded-lg shadow p-5">
          <h2 className="text-lg font-semibold mb-4">Activity Log</h2>
          <ul className="divide-y divide-gray-200">
            {activityLog.map(activity => (
              <li key={activity.id} className="py-3 flex">
                <div className="font-medium w-20">{activity.date}</div>
                <div>
                  {activity.description}
                  {activity.status === 'opened' && (
                    <span className="text-green-600 ml-2">
                      (Opened <Check className="inline-block w-4 h-4" />)
                    </span>
                  )}
                  {activity.status === 'success' && (
                    <span className="text-green-600 ml-2">
                      (<Check className="inline-block w-4 h-4" />)
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
