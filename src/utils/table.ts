// utils/table.ts

const realData = [
  {
    "Job Request": "Launch Social Media Campaign for Summer Collection 2025",
    Submitted: "2025-08-01",
    Status: "In Process",
    Submitter: "Jonathan Michael Doe",
    URL: "https://google.commmmm",
    Assigned: "Alice Thompson",
    Priority: "High",
    "Due Date": "2025-08-12",
    "Ext. Value": "$1850",
  },
  {
    "Job Request": "Design Product Landing Page for Marketing Funnel",
    Submitted: "2025-08-02",
    Status: "Complete",
    Submitter: "Janet Marie Smith",
    URL: "www.landingpagesolutions.com",
    Assigned: "Robert Williams",
    Priority: "Medium",
    "Due Date": "2025-08-14",
    "Ext. Value": "$1220",
  },
  {
    "Job Request": "Integrate CRM with Email Automation System",
    Submitted: "2025-08-03",
    Status: "Complete",
    Submitter: "Sophia Alexandra Johnson",
    URL: "https://automationhub.org",
    Assigned: "Benjamin Carter",
    Priority: "Low",
    "Due Date": "2025-08-15",
    "Ext. Value": "$960",
  },
  {
    "Job Request": "Develop Admin Dashboard for Internal Use",
    Submitted: "2025-08-04",
    Status: "Need to Start",
    Submitter: "Alexander Bennett",
    URL: "www.internaldash.dev",
    Assigned: "Chloe Anderson",
    Priority: "Medium",
    "Due Date": "2025-08-17",
    "Ext. Value": "$1750",
  },
  {
    "Job Request": "Create API Documentation for Dev Portal",
    Submitted: "2025-08-05",
    Status: "Need to Start",
    Submitter: "Natalie Emerson Rivera",
    URL: "https://apidocs.io/portal",
    Assigned: "Maxwell Jefferson",
    Priority: "High",
    "Due Date": "2025-08-18",
    "Ext. Value": "$2125",
  },
  {
    "Job Request": "Fix Critical Bugs in Payment Gateway Integration",
    Submitted: "2025-08-06",
    Status: "Blocked",
    Submitter: "Isabella Scarlett Clark",
    URL: "www.paymentfixer.com",
    Assigned: "Daniel Rodriguez",
    Priority: "High",
    "Due Date": "2025-08-19",
    "Ext. Value": "$1950",
  },
  {
    "Job Request": "Conduct User Testing for Mobile Application v2.0",
    Submitted: "2025-08-07",
    Status: "Active",
    Submitter: "Gabriel Elijah Thompson",
    URL: "https://mobileappfeedback.net",
    Assigned: "Victoria Chen",
    Priority: "Low",
    "Due Date": "2025-08-20",
    "Ext. Value": "$890",
  },
];

const emptyRow = {
  "Job Request": "",
  Submitted: "",
  Status: "",
  Submitter: "",
  URL: "",
  Assigned: "",
  Priority: "",
  "Due Date": "",
  "Ext. Value": "",
};

const data = [...realData];
while (data.length < 20) {
  data.push({ ...emptyRow });
}

export { data };
