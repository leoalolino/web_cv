import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  isClose: () => void;
  typeContent: "Adder" | "Modifier" | "Delete" | null;
  inputs?: any[];
  tableName: string;
  id: Number;
};
export type contents = "Adder" | "Modifier" | "Delete";

export function Modal({
  isOpen,
  isClose,
  typeContent,
  inputs,
  tableName,
  id,
}: Props) {
  // --- SCROLLBAR FIX ---
  useEffect(() => {
    if (isOpen) {
      // 'stable' prevents the layout from jumping by keeping the scrollbar gutter
      document.documentElement.style.scrollbarGutter = "stable";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.scrollbarGutter = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={isClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white shadow-2xl rounded-2xl z-[1000] border border-slate-200 overflow-hidden">
        <div className="p-8">
          {/* HEADER */}
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter">
              {typeContent} Entry
              <p>at the table: {tableName}</p>
            </h3>
            <button
              onClick={isClose}
              className="text-slate-400 hover:text-black cursor-pointer"
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {typeContent === "Delete" ? (
            /* --- DELETE SECTION --- */
            <div className="space-y-6">
              <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest">
                  Target Reference
                </p>
                <p className="font-mono font-bold text-red-700">
                  {/* [PLACE YOUR DELETE ID OR TITLE REFERENCE HERE] */}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    isClose();
                  }}
                  className="flex-1 py-3 border border-slate-200 rounded-xl font-bold uppercase text-[11px] cursor-pointer hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button className="flex-1 py-3 bg-red-600 text-white rounded-xl font-bold uppercase text-[11px] cursor-pointer hover:bg-red-700">
                  Confirm Delete
                </button>
              </div>
            </div>
          ) : (
            /* --- FORM SECTION (ADDER / MODIFIER) --- */
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {/* START MAPPING YOUR DATA BELOW THIS LINE 
                  Example: inputs.map((item) => <input key={item.id} ... />)
                */}

                <div className="md:col-span-2 p-4 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                  [Insert your map logic here]
                </div>

                {/* END MAPPING */}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={isClose}
                  className="flex-1 py-3 border border-slate-200 rounded-xl font-bold uppercase text-[11px] cursor-pointer hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button className="flex-1 py-3 bg-black text-white rounded-xl font-bold uppercase text-[11px] cursor-pointer hover:bg-slate-800 transition-colors">
                  {typeContent === "Adder" ? "Create Record" : "Save Changes"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
}
