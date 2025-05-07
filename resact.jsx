import { useState, useEffect } from 'react';

export default function EmailTemplateEditor() {
  // Template types
  const templateTypes = {
    FRIENDLY: 'Friendly',
    URGENT: 'Urgent',
    NEW: 'New Template'
  };

  // Sample data for preview
  const sampleData = {
    ClientName: 'John Smith',
    InvoiceNumber: 'INV-12345',
    Amount: '$1,250.00',
    DueDate: 'May 15, 2025'
  };

  // Initial templates
  const initialTemplates = {
    [templateTypes.FRIENDLY]: {
      subject: 'Friendly reminder: {{InvoiceNumber}} is due',
      body: `Hi {{ClientName}},

Just a reminder that invoice {{InvoiceNumber}} for {{Amount}} is due on {{DueDate}}.

If you've already sent the payment, please disregard this message.

Thanks for your business!

- You`
    },
    [templateTypes.URGENT]: {
      subject: 'URGENT: Payment required for {{InvoiceNumber}}',
      body: `Dear {{ClientName}},

Your payment for invoice {{InvoiceNumber}} in the amount of {{Amount}} is now OVERDUE.

Please make your payment immediately to avoid any late fees or service interruptions.

Please contact us if you have any questions.

Regards,
Accounts Receivable`
    },
    [templateTypes.NEW]: {
      subject: '',
      body: ''
    }
  };

  // State
  const [activeTab, setActiveTab] = useState(templateTypes.FRIENDLY);
  const [templates, setTemplates] = useState(initialTemplates);
  const [currentSubject, setCurrentSubject] = useState(initialTemplates[templateTypes.FRIENDLY].subject);
  const [currentBody, setCurrentBody] = useState(initialTemplates[templateTypes.FRIENDLY].body);

  // Replace placeholders with sample data
  const replacePlaceholders = (text) => {
    let result = text;
    for (const [key, value] of Object.entries(sampleData)) {
      const placeholder = `{{${key}}}`;
      result = result.replace(new RegExp(placeholder, 'g'), value);
    }
    return result;
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    // Save current changes before switching
    const updatedTemplates = {
      ...templates,
      [activeTab]: {
        subject: currentSubject,
        body: currentBody
      }
    };
    
    setTemplates(updatedTemplates);
    setActiveTab(tab);
    setCurrentSubject(updatedTemplates[tab].subject);
    setCurrentBody(updatedTemplates[tab].body);
  };

  // Handle save button click
  const handleSave = () => {
    const updatedTemplates = {
      ...templates,
      [activeTab]: {
        subject: currentSubject,
        body: currentBody
      }
    };
    setTemplates(updatedTemplates);
    alert('Template saved successfully!');
  };

  // Format body text for preview (convert newlines to paragraphs)
  const formatBodyForPreview = (text) => {
    const paragraphs = replacePlaceholders(text).split('\n\n');
    return paragraphs.map((paragraph, index) => 
      <p key={index}>{paragraph}</p>
    );
  };

  return (
    <div className="container">
      <h1>Email Template Editor</h1>
      
      <div className="template-tabs">
        <button 
          className={`tab-btn ${activeTab === templateTypes.FRIENDLY ? 'active' : ''}`}
          onClick={() => handleTabChange(templateTypes.FRIENDLY)}
        >
          Friendly
        </button>
        <button 
          className={`tab-btn ${activeTab === templateTypes.URGENT ? 'active' : ''}`}
          onClick={() => handleTabChange(templateTypes.URGENT)}
        >
          Urgent
        </button>
        <button 
          className={`tab-btn new-tab ${activeTab === templateTypes.NEW ? 'active' : ''}`}
          onClick={() => handleTabChange(templateTypes.NEW)}
        >
          + New
        </button>
      </div>
      
      <div className="editor-container">
        <div className="editor-panel">
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input 
              type="text" 
              id="subject" 
              value={currentSubject} 
              onChange={(e) => setCurrentSubject(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="body">Body:</label>
            <textarea 
              id="body" 
              rows="12" 
              value={currentBody}
              onChange={(e) => setCurrentBody(e.target.value)}
            />
          </div>
          
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
        
        <div className="preview-panel">
          <h3>Preview</h3>
          <div className="email-preview">
            <div className="preview-subject">
              {replacePlaceholders(currentSubject)}
            </div>
            <div className="preview-body">
              {formatBodyForPreview(currentBody)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
