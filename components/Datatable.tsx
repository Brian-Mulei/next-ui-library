"use client";
import React, { useState } from "react";

interface Column {
  key: string;
  label: string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  searchable?: boolean;
  sortable?: boolean;
  pageSize?: number;
  maxPageButtons?: number; // how many page numbers to show in pagination
}

export default function DataTable({
  columns,
  data,
  searchable,
  sortable,
  pageSize = 10,
  maxPageButtons = 5,
}: DataTableProps) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // -------- Search ----------
  const filteredData = data.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  // -------- Sorting ----------
  const sortedData = sortable && sortKey
    ? [...filteredData].sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
        return 0;
      })
    : filteredData;

  // -------- Pagination ----------
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const pageData = sortedData.slice(start, end);

  const handleSort = (key: string) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  // Compute page buttons to show
  const getPageNumbers = () => {
    const pages = [];
    let startPage = currentPage;
    let endPage = Math.min(currentPage + maxPageButtons - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="w-full overflow-x-auto">
      {/* Search + Row Count */}
      <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
        {searchable && (
          <input
            className="border p-2 rounded w-full max-w-sm"
            placeholder="Search..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
          />
        )}
        <div className="text-neutral text-sm">
          Showing {start + 1}-{Math.min(end, sortedData.length)} of {sortedData.length} rows
        </div>
      </div>

      <table className="min-w-full border border-neutral rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col) => (
              <th
                key={col.key}
                className="border px-4 py-2 text-left cursor-pointer select-none"
                onClick={() => sortable && handleSort(col.key)}
              >
                {col.label} {sortKey === col.key ? (sortAsc ? "▲" : "▼") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageData.length ? (
            pageData.map((row, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-primary/20 transition-colors`}
              >
                {columns.map((col) => (
                  <td key={col.key} className="border px-4 py-2 text-neutral">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center py-4 text-neutral">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-3 flex-wrap items-center">
          <button
            className="px-3 py-1 rounded border hover:bg-gray-200 disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            First
          </button>
          <button
            className="px-3 py-1 rounded border hover:bg-gray-200 disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {getPageNumbers().map((num) => (
            <button
              key={num}
              className={`px-3 py-1 rounded border hover:bg-gray-200 ${
                currentPage === num ? "bg-primary text-white" : ""
              }`}
              onClick={() => setCurrentPage(num)}
            >
              {num}
            </button>
          ))}

          <button
            className="px-3 py-1 rounded border hover:bg-gray-200 disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
          <button
            className="px-3 py-1 rounded border hover:bg-gray-200 disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            Last
          </button>
        </div>
      )}
    </div>
  );
}
