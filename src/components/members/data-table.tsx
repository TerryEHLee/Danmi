"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    setShowMenu(true);
  };

  const handleMenuItemClick = (action) => {
    switch (action) {
      case "회원정보수정":
        break;
      case "회원권부여하기":
        break;
      case "쿠폰등록":
        break;
      case "포인트등록":
        break;
      default:
        break;
    }
    setShowMenu(false);
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                onClick={() => handleRowClick(row.original)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}

          {showMenu && (
            <div className="absolute z-10 top-full left-0 mt-2 bg-white border rounded-md shadow-md">
              <ul>
                <li
                  onClick={() => handleMenuItemClick("회원정보수정")}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  회원정보수정
                </li>
                <li
                  onClick={() => handleMenuItemClick("회원권부여하기")}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  회원권부여하기
                </li>
                <li
                  onClick={() => handleMenuItemClick("쿠폰등록")}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  쿠폰등록
                </li>
                <li
                  onClick={() => handleMenuItemClick("포인트등록")}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  포인트등록
                </li>
              </ul>
            </div>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
