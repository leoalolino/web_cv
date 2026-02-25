import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  isClose: () => void;
  typeContent: "Adder" | "Modifier" | "Delete" | null;
  inputs: any[];
  tableName: string;
  id: any;
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
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.scrollbarGutter = "stable";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.scrollbarGutter = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentProject =
    typeContent === "Adder"
      ? inputs?.[0]
      : inputs?.find((p) => String(p.id?.input) === String(id));

  const formatLabel = (key: string) =>
    key.replace(/([A-Z])/g, " $1").replace(/\b\w/g, (s) => s.toUpperCase());

  // SUBMIT HANDLER

  const [text, setText] = useState({});
  const [files, setFiles] = useState({});

  const textHandler = async (text: any) => {
    try {
      const sendText = text;

      const res = await fetch(`http://localhost:3000/${tableName}/textField`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ textName: sendText }),
      });
      const json = await res.json();
      if (json.stats === "success")
        return { status: json.stats, message: json.msg };

      return { status: "failed" };
    } catch (e) {
      console.log(`error due to: ${e}`);
    }
  };

  const fileHandler = async (file: any) => {
    try {
      const sendFile = await fetch(
        `http://localhost:3000/${tableName}/fileField`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileName: file }),
        },
      );
      const json = await sendFile.json();

      if (json.stats === "success")
        return { status: json.stats, message: json.msg };

      return { status: "failed" };
    } catch (e) {
      console.log(`error due to: ${e}`);
    }
  };

  const submitHandler = async (inputField: any) => {
    if (!inputField) return null;
    Object.entries(inputField).forEach(([k, v]: [string, any]) => {
      const fields = { k, v };
      if (v.type === "file") setFiles(fields);
      if (v.type === "text") setText(fields);
    });

    const [textField, fileField] = await Promise.all([
      textHandler(text),
      fileHandler(files),
    ]);

    return textField?.status === "success" && fileField?.status === "success"
      ? { msg: "successfully uploaded data" }
      : { msg: "failed to upload data" };
  };
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={isClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div
        className={`relative w-full ${
          typeContent === "Delete" ? "max-w-lg" : "max-w-2xl"
        } bg-white shadow-2xl rounded-2xl z-[1000] border border-slate-200 overflow-hidden`}
      >
        <div className="p-8">
          {/* HEADER */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="font-black uppercase tracking-tighter m-2">
              <p className="text-2xl">
                {typeContent} from{" "}
                <span className="text-blue-500 underline">{tableName}</span>{" "}
                Record
              </p>
            </h2>
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
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="absolute inset-0 bg-red-200 rounded-full blur-xl opacity-20 animate-pulse" />
                <div className="relative bg-red-50 p-5 rounded-full ring-8 ring-red-50/50">
                  <svg
                    className="size-12 text-red-600"
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
                </div>
              </div>
              <div className="space-y-2 px-2">
                <h2 className="text-xl font-bold text-slate-800">
                  Delete this item?
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[280px] mx-auto">
                  You are about to delete{" "}
                  <span className="font-mono font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded italic">
                    #{id}
                  </span>
                  . This action is permanent and cannot be undone.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full pt-4">
                <button
                  onClick={isClose}
                  className="flex-1 order-2 sm:order-1 py-3 px-4 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all active:scale-95"
                >
                  No, Keep it
                </button>
                <button className="flex-1 order-1 sm:order-2 py-3 px-4 rounded-xl font-semibold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-200 transition-all active:scale-95">
                  Yes, Delete!
                </button>
              </div>
            </div>
          ) : (
            /* --- FORM SECTION (ADDER / MODIFIER) --- */
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {currentProject &&
                  Object.entries(currentProject)
                    .filter(
                      ([k, v]: [string, any]) =>
                        k !== "id" && k !== "tableName" && !Array.isArray(v),
                    )
                    .map(([k, v]: [string, any]) => (
                      <div key={k} className="group flex flex-col gap-1.5">
                        {/* Label: Smaller, bolder, and reacts to focus */}
                        <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 transition-colors group-focus-within:text-blue-600">
                          {k.replace(/([A-Z])/g, " $1").trim()}
                        </label>

                        <input
                          type={v.type === "file" ? "file" : "text"}
                          defaultValue={
                            typeContent === "Modifier" ? v.input : ""
                          }
                          placeholder={`Enter ${formatLabel(k)}`}
                          className={`
            w-full px-4 py-2.5 text-sm transition-all duration-200
            bg-white border border-slate-200 rounded-xl
            placeholder:text-slate-300
            hover:border-slate-300
            focus:border-black focus:ring-4 focus:ring-black/5 focus:outline-none
            ${
              v.type === "file"
                ? "file:mr-4 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer text-slate-500"
                : "text-slate-900"
            }
          `}
                        />
                      </div>
                    ))}{" "}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={isClose}
                  className="flex-1 py-3 border border-slate-200 rounded-xl font-bold uppercase text-[11px] cursor-pointer hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => submitHandler(currentProject)}
                  className="flex-1 py-3 bg-black text-white rounded-xl font-bold uppercase text-[11px] cursor-pointer hover:bg-slate-800 transition-colors"
                >
                  {typeContent === "Adder" ? "Upload" : "Save Changes"}
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
