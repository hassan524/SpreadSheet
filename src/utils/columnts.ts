import type { ColumnDef } from "@tanstack/react-table";

export type RowData = {
  "Job Request": string;
  Submitted: string;
  Status: string;
  Submitter: string;
  URL: string;
  Assigned: string;
  Priority: string;
  "Due Date": string;
  "Ext. Value": string;
};

export type ColumnWithExtras = ColumnDef<RowData> & {
  accessorKey?: keyof RowData | "rowIndex" | "Icon";
  background?: string;
  icon?: string;
  icon2?: string;
};

const columns: ColumnWithExtras[] = [
  {
    header: "#",
    id: "rowIndex",
    accessorKey: "rowIndex",
    cell: ({ row }) => row.index + 1,
    background: "#FFFFFF",
  },
  {
    header: "Job Request",
    accessorKey: "Job Request",
    id: "1",
    cell: ({ row }) => row.original["Job Request"],
    background: "#EEEEEE",
    icon: "bi bi-suitcase-lg-fill",
    icon2: "bi bi-caret-down-fill",
  },
  {
    header: "Submitted",
    accessorKey: "Submitted",
    id: "2",
    cell: ({ row }) => row.original["Submitted"],
    background: "#EEEEEE",
    icon: "bi bi-subtract",
    icon2: "bi bi-caret-down-fill",
  },
  {
    header: "Status",
    accessorKey: "Status",
    id: "3",
    cell: ({ row }) => row.original["Status"],
    background: "#EEEEEE",
    icon: "bi bi-arrow-down-circle-fill",
    icon2: "bi bi-caret-down-fill",
  },
  {
    header: "Submitter",
    accessorKey: "Submitter",
    id: "4",
    cell: ({ row }) => row.original["Submitter"],
    background: "#EEEEEE",
    icon: "bi bi-person-fill",
    icon2: "bi bi-caret-down-fill",
  },
  {
    header: "URL",
    accessorKey: "URL",
    id: "5",
    cell: ({ row }) => row.original["URL"],
    background: "#EEEEEE",
    icon: "bi bi-globe2",
    icon2: "bi bi-caret-down-fill",
  },
  {
    header: "Assigned",
    accessorKey: "Assigned",
    id: "6",
    cell: ({ row }) => row.original["Assigned"],
    background: "#E8F0E9",
    icon: "bi bi-person-raised-hand",
    icon2: "bi bi-caret-down-fill",
  },
  {
    header: "Priority",
    accessorKey: "Priority",
    id: "7",
    cell: ({ row }) => row.original["Priority"],
    background: "#EAE3FC",
  },
  {
    header: "Due Date",
    accessorKey: "Due Date",
    id: "8",
    cell: ({ row }) => row.original["Due Date"],
    background: "#EAE3FC",
  },
  {
    header: "Ext. Value",
    accessorKey: "Ext. Value",
    id: "9",
    cell: ({ row }) => row.original["Ext. Value"],
    background: "#FFE9E0",
  },
  {
    header: "",
    accessorKey: "Icon",
    id: "10",
    cell: () => ``,
    background: "#FFFFFF",
  },
];

export default columns;
