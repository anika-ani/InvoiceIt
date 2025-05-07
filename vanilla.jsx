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
let templates = { ...initialTemplates };
let activeTab = templateTypes.FRIENDLY;

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const subjectInput = document.getElementById('subject');
  const bodyInput = document.getElementById('body');
  const saveButton = document.querySelector('.save-btn');
  const previewSubject = document.querySelector('.preview-subject');
  const previewBody = document.querySelector('.preview-body');

  // Initialize with the first template
  subjectInput.value = templates[activeTab].subject;
  bodyInput.value = templates[activeTab].body;
  updatePreview();

  // Tab click event
  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Save current changes before switching
      saveCurrentTemplate();
      
      // Determine which tab was clicked
      if (index === 0) {
        activeTab = templateTypes.FRIENDLY;
      } else if (index === 1) {
        activeTab = templateTypes.URGENT;
      } else {
        activeTab = templateTypes.NEW;
      }
      
      // Update tab UI
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Load the new template
      subjectInput.value = templates[activeTab].subject;
      bodyInput.value = templates[activeTab].body;
      
      // Update preview
      updatePreview();
    });
  });

  // Real-time preview updates
  subjectInput.addEventListener('input', updatePreview);
  bodyInput.addEventListener('input', updatePreview);
  
  // Save button click
  saveButton.addEventListener('click', () => {
    saveCurrentTemplate();
    alert('Template saved successfully!');
  });
  
  // Save current template data
  function saveCurrentTemplate() {
    templates[activeTab] = {
      subject: subjectInput.value,
      body: bodyInput.value
    };
  }
  
  // Update preview pane
  function updatePreview() {
    // Update the subject line
    previewSubject.textContent = replacePlaceholders(subjectInput.value);
    
    // Update the body
    previewBody.innerHTML = '';
    const paragraphs = replacePlaceholders(bodyInput.value).split('\n\n');
    
    paragraphs.forEach(paragraph => {
      if (paragraph.trim()) {
        const p = document.createElement('p');
        p.textContent = paragraph;
        previewBody.appendChild(p);
      }
    });
  }
});

// Replace placeholders with sample data
function replacePlaceholders(text) {
  let result = text;
  for (const [key, value] of Object.entries(sampleData)) {
    const placeholder = `{{${key}}}`;
    result = result.replace(new RegExp(placeholder, 'g'), value);
  }
  return result;
}
