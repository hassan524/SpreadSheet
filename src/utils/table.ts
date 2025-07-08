// utils/table.ts

const realData = [
  {
    "Job Request": "JR-001",
    Submitted: "2025-08-01",
    Status: "Blocked",
    Submitter: "John Doe",
    URL: "https://google.commmmm",
    Assigned: "Alice",
    Priority: "High",
    "Due Date": "2025-08-12",
    "Ext. Value": "$1800",
  },
  {
    "Job Request": "JR-002",
    Submitted: "2025-08-02",
    Status: "Inactive",
    Submitter: "Jane Smith",
    URL: "https://example.com",
    Assigned: "Bob",
    Priority: "Medium",
    "Due Date": "2025-08-14",
    "Ext. Value": "$1200",
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
