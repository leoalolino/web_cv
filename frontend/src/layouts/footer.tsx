export function FooterSec() {
  return (
    <>
      <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[10px] font-medium uppercase tracking-widest text-gray-300 mt-1">
              © 2026 All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center space-x-8">
            <a className="text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-blue-700 transition-all hover:scale-120 duration-300 flex">
              <svg
                className="w-3 h-3 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <div className="hidden md:block">
            <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-gray-300">
              Design & built for fun<span className="text-gray-300"></span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
