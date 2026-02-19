import { useState } from "react";

export interface Props {
  isActive: Boolean;
  passData?: string;
}

export const Btn = () => {
  return (
    <>
      <div className="flex items-center gap-6">
        {/* v-if="user?.role === 'admin' && isAuthenticated && props.items.length > 0" */}

        <div className="flex items-center gap-2 shrink-0">
          {/* // @click="toggleedit" */}

          <button className="cursor-pointer transition-colors p-1 hover:text-blue-400">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          {/* @click="toggledelete" */}

          <button className="cursor-pointer transition-colors p-1 hover:text-red-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
        {/*  @click="toggleexpanded" */}
        <button className="group inline-flex items-center text-[13px] tracking-wide font-bold transition-all duration-300 uppercase cursor-pointer shrink-0 hover:text-gray-300">
          {/* {{ isExpanded ? 'show less' : 'view more' }} */} view more
          <svg
            className="ml-2 w-4 h-4 transition-transform duration-300"
            fill="#ffffff"
            viewBox="0 0 24 24"
          >
            <path d="m19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </>
  );
};
