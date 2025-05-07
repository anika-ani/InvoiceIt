import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

const ReminderScheduler = () => {
  // Initial rules
  const [rules, setRules] = useState([
    { id: 1, timing: '1day', template: 'friendly' },
    { id: 2, timing: '3day', template: 'professional' }
  ]);
  
  // Test email state
  const [testEmail, setTestEmail] = useState('');
  
  // Counter for generating unique IDs
  const [nextId, setNextId] = useState(3);
  
  // Timing options for dropdown
  const timingOptions = [
    { value: '1day', label: '1 day before due date' },
    { value: '3day', label: '3 days before due date' },
    { value: '7day', label: '7 days before due date' },
    { value: 'same', label: 'On due date' },
    { value: '1after', label: '1 day after due date' },
    { value: '3after', label: '3 days after due date' }
  ];
  
  // Template options for dropdown
  const templateOptions = [
    { value: 'friendly', label: 'Email template: Friendly' },
    { value: 'professional', label: 'Email template: Professional' },
    { value: 'urgent', label: 'Email template: Urgent' },
    { value: 'final', label: 'Email template: Final Notice' }
  ];
  
  // Add a new rule
  const addRule = () => {
    const newRule = {
      id: nextId,
      timing: '1day',
      template: 'friendly'
    };
    setRules([...rules, newRule]);
    setNextId(nextId + 1);
  };
  
  // Delete a rule
  const deleteRule = (id) => {
    setRules(rules.filter(rule => rule.id !== id));
  };
  
  // Update rule timing
  const updateRuleTiming = (id, timing) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, timing } : rule
    ));
  };
  
  // Update rule template
  const updateRuleTemplate = (id, template) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, template } : rule
    ));
  };
  
  // Send test email
  const sendTestEmail = () => {
    if (!testEmail) {
      alert('Please enter a valid email address');
      return;
    }
    
    console.log(`Sending test email to: ${testEmail}`);
    // Actual implementation would call an API endpoint
    alert(`Test email sent to ${testEmail}`);
  };
  
  // Go live with configuration
  const goLive = () => {
    console.log('Going live with rules:', rules);
    // Implementation would save configuration and activate reminders
    alert('Your reminder settings are now live!');
  };
  
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold mb-8">When should we send reminders?</h1>
      
      {/* Rules Container */}
      <div className="space-y-4 mb-6">
        {rules.map(rule => (
          <div 
            key={rule.id} 
            className="flex items-start border border-gray-200 rounded-lg p-5 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              {/* Timing Dropdown */}
              <div className="flex-1">
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8"
                    value={rule.timing}
                    onChange={(e) => updateRuleTiming(rule.id, e.target.value)}
                  >
                    {timingOptions.map(option => (
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
              </div>
              
              {/* Template Dropdown */}
              <div className="flex-1">
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8"
                    value={rule.template}
                    onChange={(e) => updateRuleTemplate(rule.id, e.target.value)}
                  >
                    {templateOptions.map(option => (
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
              </div>
            </div>
            
            {/* Delete Button */}
            <button 
              className="ml-3 p-2 text-red-500 hover:bg-gray-100 rounded-full"
              onClick={() => deleteRule(rule.id)}
              aria-label="Delete rule"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
      
      {/* Add Rule Button */}
      <button
        className="w-full border border-dashed border-gray-400 text-gray-500 py-2 px-4 rounded-md hover:bg-gray-50 hover:text-gray-700 transition-colors mb-8"
        onClick={addRule}
      >
        <span className="flex items-center justify-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Add Rule
        </span>
      </button>
      
      {/* Divider */}
      <div className="border-t border-gray-200 my-8"></div>
      
      {/* Test Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Test Your Reminders</h2>
        <div className="flex flex-wrap items-center gap-3">
          <label htmlFor="test-email" className="font-medium">Send test to:</label>
          <input
            type="email"
            id="test-email"
            className="flex-1 min-w-[200px] border border-gray-300 rounded px-4 py-2"
            placeholder="user@email.com"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
          />
          <button 
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors"
            onClick={sendTestEmail}
          >
            Test Email
          </button>
        </div>
      </div>
      
      {/* Go Live Button */}
      <div className="flex justify-end">
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition-colors"
          onClick={goLive}
        >
          Go Live
        </button>
      </div>
    </div>
  );
};

export default ReminderScheduler;
