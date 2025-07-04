import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const Tables = () => {
  const data = [
    {
      url: "https://google.com",
      status: "Active",
      updates: 12,
      property: "House",
      dueDate: "2025-08-12",
      value1: "$2000",
      value2: "$150",
      value3: "$50",
      value4: "$1800",
    },
    {
      url: "https://example.com",
      status: "Inactive",
      updates: 5,
      property: "Flat",
      dueDate: "2025-08-14",
      value1: "$1500",
      value2: "$200",
      value3: "$100",
      value4: "$1200",
    },
  ];

  const columns = [
    {
      header: "#",
      id: "rowIndex",
      accessorKey: "rowIndex",
      cell: ({ row }: { row: any }) => row.index + 1,
    },
    { header: "URL", accessorKey: "url", id: "1" },
    { header: "Status", accessorKey: "status", id: "1" },
    { header: "Updates", accessorKey: "updates", id: "1" },
    { header: "Property", accessorKey: "property", id: "1" },
    { header: "Due Date", accessorKey: "dueDate", id: "2" },
    { header: "Value 1", accessorKey: "value1", id: "3" },
    { header: "Value 2", accessorKey: "value2", id: "4" },
    { header: "Value 3", accessorKey: "value3", id: "4" },
    { header: "Value 4", accessorKey: "value4", id: "5" },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const getBlockStyle = (colId: string) => {
    switch (colId) {
      case "1":
        return {
          backgroundColor: "#E2E2E2",
          fontWeight: "bold",
          textAlign: "center",
        };
      case "2":
        return {
          backgroundColor: "#FFFFFF",
          borderLeft: "1px solid #F6F6F6",
          borderRight: "1px solid #F6F6F6",
        };
      case "3":
        return {
          backgroundColor: "#D2E0D4",
          fontStyle: "italic",
          borderLeft: "1px solid #F6F6F6",
          borderRight: "1px solid #F6F6F6",
        };
      case "4":
        return {
          backgroundColor: "#DCCFFC",
          textDecoration: "underline",
          borderLeft: "1px solid #F6F6F6",
          borderRight: "0.5px solid #F6F6F6",
        };
      case "5":
        return {
          backgroundColor: "#FFE9E0",
          color: "#222",
          borderLeft: "1px solid #F6F6F6",
          borderRight: "1px solid #F6F6F6",
        };
      case "rowIndex":
        return {
          backgroundColor: "#F3F3F3",
        };
      default:
        return {
          backgroundColor: "#F9F9F9",
        };
    }
  };

  const getCellStyle = (key: string) => {
    if (key === "rowIndex") {
      return {
        width: "60px",
        flex: "0 0 auto",
        padding: "10px",
      };
    }
    if (key === "url") {
      return {
        width: "250px",
        flex: "0 0 auto",
        padding: "10px",
      };
    }
    return {
      flex: 1,
      minWidth: 0,
      padding: "10px",
    };
  };

  return (
    <div className="w-full font-sans overflow-x-auto">
      <div className="min-w-[1000px]">
        <div className="flex font-semibold text-sm border-t border-[#EEEEEE]">
          {columns.map((col, i) => (
            <div
              key={i}
              style={{
                ...getCellStyle(col.accessorKey || col.id || ""),
                ...getBlockStyle(col.id),
              }}
            >
              Top {i + 1}
            </div>
          ))}
        </div>

        <div className="flex bg-gray-100 font-semibold text-sm">
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <div
                key={header.id}
                style={getCellStyle(
                  header.column.columnDef.accessorKey || header.column.id || "",
                )}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </div>
            )),
          )}
        </div>

        {table.getRowModel().rows.map((row) => (
          <div key={row.id} className="flex hover:bg-gray-50 text-sm">
            {row.getVisibleCells().map((cell) => (
              <div
                key={cell.id}
                style={getCellStyle(
                  cell.column.columnDef.accessorKey || cell.column.id || "",
                )}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tables;
