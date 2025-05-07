import React from 'react';

const InvoiceReminder = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 text-center px-4">
      <div className="w-full max-w-xl">
        <div className="text-4xl font-bold mb-16">InvoiceReminder</div>
        
        <h1 className="text-3xl font-semibold leading-tight mb-6">
          Automate invoice reminders directly from Google Sheets
        </h1>
        
        <p className="text-xl text-gray-600 mb-12">
          Get paid faster without accounting software
        </p>
        
        <button className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded transition-colors mb-20">
          <span className="flex items-center justify-center bg-white p-2 rounded mr-3">
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
              <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
              <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
              <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
            </svg>
          </span>
          Sign in with Google
        </button>
      </div>
      
      <footer className="mt-auto py-5 text-gray-500 text-sm">
        Free for 10 reminders/month
      </footer>
    </div>
  );
};

export default InvoiceReminder;
