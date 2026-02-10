export function ChatBot() {
  return (
    <>
      <div className="fixed bottom-0 right-0 z-[100] flex flex-col items-end pointer-events-none">
        {/* v-if="isOpen" */}
        <div className="pointer-events-auto mr-4 mb-8 w-80 md:w-[380px] overflow-hidden rounded-md border border-gray-100 bg-white transition-all duration-500">
          <div className="p-5 pb-4 flex justify-between items-center border-b border-gray-50">
            <div>
              <h3 className="text-xl font-black capitalize tracking-tighter">
                Chat with me
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="size-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">
                  Developer Online
                </p>
              </div>
            </div>
            {/* @click="isOpen = false" */}

            <button className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer p-1">
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="px-5 py-3">
            <p className="text-[9px] font-black uppercase tracking-widest mb-2 text-gray-400">
              Quick Inquiries:
            </p>
            <div className="flex flex-col gap-1.5">
              <button className="text-left text-[10px] font-bold uppercase border border-gray-100 p-2.5 rounded-xl hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all cursor-pointer">
                {/* // {{ suggest }} */}
              </button>
            </div>
          </div>

          <div className="p-5 pt-1">
            <div className="relative">
              <textarea
                placeholder="YOUR MESSAGE..."
                className="w-full p-4 pr-12 rounded-2xl border border-gray-100 text-[12px] font-black uppercase tracking-widest focus:outline-none focus:border-blue-500 transition-all resize-none"
              ></textarea>
              <button className="absolute right-3.5 bottom-3.5 text-blue-500 hover:scale-110 transition-transform cursor-pointer">
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pointer-events-auto relative">
          {/* @click="isOpen = !isOpen" */}

          <button className="group relative flex items-center justify-center size-16 rounded-full transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] cursor-pointer">
            <div className="relative z-10 size-full rounded-full border-4 transition-all duration-500 flex items-center justify-center">
              <div className="transition-opacity duration-300">
                <svg
                  className="size-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
