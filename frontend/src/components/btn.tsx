import { useState } from "react";

export interface Props {
  isExpanded: boolean;
  onToggleEdit?: () => void;
  onToggleDelete?: () => void;
  onToggleExpand?: () => void;
}

export const Btn = ({
  isExpanded,
  onToggleEdit,
  onToggleDelete,
  onToggleExpand,
}: Props) => {
  return (
    <div className="flex items-center gap-1.5 p-1 bg-[#121212] border border-white/10 rounded-lg shadow-2xl">
      {/* Admin Actions Group */}
      <div className="flex items-center gap-1">
        <button
          onClick={onToggleEdit}
          className="p-2 text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-md transition-all duration-200 cursor-pointer group"
        >
          <svg
            className="w-4 h-4 opacity-70 group-hover:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>

        <button
          onClick={onToggleDelete}
          className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-all duration-200 cursor-pointer group"
        >
          <svg
            className="w-4 h-4 opacity-70 group-hover:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>

      {/* Divider Line */}
      <div className="w-[1px] h-4 bg-white/10 mx-1" />

      {/* View More Button */}
      <button
        onClick={onToggleExpand}
        className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-all cursor-pointer group"
      >
        <span className="uppercase tracking-wider">
          {isExpanded ? "Show Less" : "View More"}
        </span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-500 ease-out ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
};
