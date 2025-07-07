import { getCellStyle } from "../constants/tablestyle";
import columns from "../utils/columnts";
import { data } from "../utils/table";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import SubHeader from "./SubHeader";

const Tables = () => {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="h-[80vh] overflow-scroll min-w-full flex font-sans">
      <div className="min-w-[1000px]">
        {/* Custom SubHeader */}
        <SubHeader />

        {/* Table Column Headers */}
        <div className="w-max min-w-full">
          <div className="flex font-semibold text-sm">
            {table.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <div
                  key={header.id}
                  style={{
                    ...getCellStyle(
                      header.column.columnDef.accessorKey ||
                        header.column.id ||
                        ""
                    ),
                    background:
                      header.column.columnDef.background || "#FFFFFF",
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Table Body Rows */}
        {table.getRowModel().rows.map((row) => (
          <div key={row.id} className="flex hover:bg-gray-50 text-sm">
            {row.getVisibleCells().map((cell) => (
              <div
                key={cell.id}
                style={{
                  ...getCellStyle(
                    cell.column.columnDef.accessorKey ||
                      cell.column.id ||
                      ""
                  ),
                  // background: cell.column.columnDef.background || "#FFFFFF", 
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
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
