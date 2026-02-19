import { useState } from "react";

type Props = {
  isOpen: boolean;
  isClose: () => void;
  typeContent: "Adder" | "Modifier" | "Delete" | null;
  inputs?: any[];
};

export type contents = "Adder" | "Modifier" | "Delete";

export function Modal({ isOpen, isClose, typeContent, inputs }: Props) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          {inputs?.map(
            (
              i,
              index, // ← Add index here
            ) => (
              <div key={index}>
                {" "}
                {/* ← Add key prop here */}
                {typeContent === "Delete" && isOpen ? (
                  <>
                    {/* @click.self="closeModal" */}
                    {/* v-if="showModalPhoto" */}
                    {/* @click="closeModal" */}
                    <button className="absolute top-10 right-10 text-white hover:text-red-500 transition-colors z-[1000] cursor-pointer">
                      <svg
                        className="size-10"
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
                    {/* v-if="isOpen" */}
                    <div className="w-full flex justify-center items-center">
                      {/* v-if="showModalDeletor" */}
                      <div className="modal-container w-full max-w-xl p-10 border rounded-sm shadow-2xl transition-colors duration-300">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-red-600/10 flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-red-600"
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
                          <h3 className="text-3xl font-black uppercase tracking-tighter">
                            Remove Record
                          </h3>
                        </div>
                        <p className="text-[11px] font-bold uppercase tracking-widest opacity-50 mb-10">
                          Deleting ID:
                          <span className="text-red-600">
                            {/* // {{ currentId }} */}
                          </span>
                          from
                          <span className="text-red-600">
                            {/* // {{ currentTable }} */}
                          </span>
                          .
                        </p>
                        <div className="flex gap-3">
                          {/* @click="closeModal" */}

                          <button className="btn-base bg-transparent border border-gray-500/30 text-gray-500 hover:bg-gray-500/10">
                            Abort
                          </button>
                          {/* @click="deleteHandler" */}

                          <button className="btn-base bg-red-600 text-white hover:bg-red-700">
                            Confirm Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : typeContent === "Adder" ||
                  (typeContent === "Modifier" && isOpen) ? (
                  <>
                    {/* // v-if="showModalAdder || showModalModifier" */}
                    <div className="modal-container w-full max-w-xl p-10 border rounded-sm shadow-2xl transition-colors duration-300">
                      <div className="mb-8">
                        <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">
                          {/* // {{ showModalModifier ? 'Modify' : 'New' }} */}
                          <span className="text-blue-600">
                            {/* {{ inputField[0]?.name?.title || 'Entry' }} */}
                          </span>
                        </h1>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* v-for="field in activeField" */}
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                            {/* {{field.label }} */}
                          </label>
                          {/*             v-if="field.type === 'textarea'" */}
                          {/* v-model="field.value" */}

                          <textarea className="input-base min-h-[100px] resize-none"></textarea>
                          {/* v-else   */}
                          {/* :type="field.type" */}
                          {/* v-model="field.value" */}

                          <input className="input-base" />
                        </div>
                      </div>
                      <div className="flex gap-3 mt-12">
                        <button
                          onClick={isClose}
                          className="btn-base bg-transparent border border-gray-500/30 text-gray-500"
                        >
                          Cancel
                        </button>
                        {/* @click="showModalModifier ? updateHandler() : addHandler() */}

                        <button className="btn-base text-white">
                          Save Entry
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* SHOW MODAL PHOTO */}
                    <div
                      v-if="showModalPhoto"
                      className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
                    >
                      <div className="w-full bg-black shadow-2xl border border-white/10 rounded-sm overflow-hidden">
                        {/* v-if="imgShow" */}
                        {/* :src="imgShow" */}
                        <img className="w-full h-full object-contain max-h-[80vh]" />
                      </div>
                      <div className="mt-8 text-center">
                        <p className="text-white font-black uppercase tracking-[0.5em] text-xs opacity-80">
                          Full Document View
                        </p>
                        {/* @click="closeModal" */}

                        <button className="mt-4 text-[10px] font-black uppercase text-red-500 tracking-widest hover:underline cursor-pointer">
                          Close Preview
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ),
          )}
        </div>
      )}
    </>
  );
}
