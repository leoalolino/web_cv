import type { contents } from "../components/modal";
import type { options } from "../components/btn";

interface info {
  id: number;
  table: string;
  className?: string;
  mode: options; // "isEdit" or "isDelete" — controls which btn shows
  onTypeSelect: (type: contents) => void;
}

export const Btns = ({ id, table, className, mode, onTypeSelect }: info) => {
  return (
    <>
      {mode === "isEdit" && (
        <button
          onClick={() => onTypeSelect("Modifier")}
          className={`w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 transition-all active:scale-90 cursor-pointer ${className}`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
      )}
      {mode === "isDelete" && (
        <button
          onClick={() => onTypeSelect("Delete")}
          className={`w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-400 transition-all active:scale-90 cursor-pointer ${className}`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </>
  );
};
