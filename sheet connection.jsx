import React, { useState } from 'react';

const SheetConnection = () => {
  // Mock data for available sheets
  const availableSheets = [
    { id: 'sheet1', name: 'Client Invoices 2025' },
    { id: 'sheet2', name: 'Customer Payments Q1' },
    { id: 'sheet3', name: 'Freelance Invoices' }
  ];

  // Mock data for table preview
  const previewData = [
    { email: 'client1@example.com', dueDate: '05/15/2025', amount: '$1,250.00' },
    { email: 'client2@company.co', dueDate: '05/22/2025', amount: '$750.00' },
    { email: 'client3@business.org', dueDate: '06/01/2025', amount: '$3,450.00' }
  ];

  // State for selected sheet
  const [selectedSheet, setSelectedSheet] = useState('');

  // States for column mappings
  const [emailMapping, setEmailMapping] = useState('email');
  const [dueDateMapping, setDueDateMapping] = useState('due_date');

  // Options for mappings
  const emailOptions = [
    { value: 'email', label: 'Email' },
    { value: 'contact', label: 'Contact' },
    { value: 'customer', label: 'Customer' }
  ];

  const dueDateOptions = [
    { value: 'due_date', label: 'Due Date' },
    { value: 'payment_date', label: 'Payment Date' },
    { value: 'deadline', label: 'Deadline' }
  ];

  const handleContinue = () => {
    console.log('Continuing with mappings:', {
      selectedSheet,
      emailMapping,
      dueDateMapping
    });
    // Add navigation or next step logic here
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold mb-8">Connect your invoice sheet</h1>
      
      {/* Sheet Selector */}
      <div className="mb-8">
        <label htmlFor="sheet-dropdown" className="block mb-2 font-medium">
          Select Google Sheet
        </label>
        <div className="relative">
          <select
            id="sheet-dropdown"
            className="w-full max-w-md appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8"
            value={selectedSheet}
            onChange={(e) => setSelectedSheet(e.target.value)}
          >
            <option value="">Select a sheet...</option>
            {availableSheets.map(sheet => (
              <option key={sheet.id} value={sheet.id}>
                {sheet.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Preview Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Sheet Preview</h2>
        <div className="border border-gray-300 rounded overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Client Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Due Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {previewData.map((row, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 text-sm">{row.email}</td>
                  <td className="px-4 py-3 text-sm">{row.dueDate}</td>
                  <td className="px-4 py-3 text-sm">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Mapping Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Column Mapping</h2>
        <p className="text-gray-600 text-sm mb-4">Map your sheet columns to invoice fields</p>
        
        {/* Email Mapping */}
        <div className="flex items-center bg-gray-100 p-3 rounded mb-3">
          <span className="flex-1 font-medium">Map 'Client Email' to:</span>
          <div className="relative w-48">
            <select
              className="w-full appearance-none bg-white border border-gray-300 rounded px-3 py-2 pr-8"
              value={emailMapping}
              onChange={(e) => setEmailMapping(e.target.value)}
            >
              {emailOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <span className="ml-3 text-green-600">✅</span>
        </div>
        
        {/* Due Date Mapping */}
        <div className="flex items-center bg-gray-100 p-3 rounded">
          <span className="flex-1 font-medium">Map 'Due Date' to:</span>
          <div className="relative w-48">
            <select
              className="w-full appearance-none bg-white border border-gray-300 rounded px-3 py-2 pr-8"
              value={dueDateMapping}
              onChange={(e) => setDueDateMapping(e.target.value)}
            >
              {dueDateOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <span className="ml-3 text-green-600">✅</span>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-end mt-8">
        <button
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition-colors"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SheetConnection;
