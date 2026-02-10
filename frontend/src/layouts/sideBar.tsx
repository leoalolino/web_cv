export function SidebarSec() {
  return (
    <>
      <div>
        <section className="hidden lg:block fixed w-full max-w-sm border-r border-t border-gray-100 h-svh top-0">
          <div className="w-full justify-center items-center flex-col mt-14">
            <div className="group">
              <div className="border border-gray-200 h-45 w-45 rounded-full mx-4 z-100 transition-all duration-200 overflow-hidden">
                {/* @click="((toggledProfile = !toggledProfile), (isModify = false))" */}

                <img
                  id="filename"
                  src=""
                  className="size-full object-cover"
                  alt="Profile"
                />
              </div>
              // v-if="toggledProfile" // @click="((isModify = !isModify),
              cancelUpload())"
              <span className="absolute translate-x-8 -translate-y-10 rounded-md hover:text-black cursor-pointer border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="none"
                    d="M13 3c-3.855 0-7 3.145-7 7c0 2.41 1.23 4.55 3.094 5.813C5.527 17.343 3 20.883 3 25h2c0-4.43 3.57-8 8-8c2.145 0 4.063.879 5.5 2.25l-4.719 4.719l-.062.312l-.688 3.532l-.312 1.468l1.469-.312l3.53-.688l.313-.062l10.094-10.094c1.16-1.16 1.16-3.09 0-4.25a3.02 3.02 0 0 0-4.219-.031l-3.968 3.969a10.1 10.1 0 0 0-3.032-2A7.02 7.02 0 0 0 20 10c0-3.855-3.145-7-7-7m0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5m13 10c.254 0 .52.082.719.281a.977.977 0 0 1 0 1.406l-9.688 9.688l-1.781.375l.375-1.781l9.688-9.688A.93.93 0 0 1 26 15"
                  />
                </svg>
              </span>
              <div
                v-if="toggledProfile && isModify"
                className="justify-start flex flex-row mx-8 mt-1 absolute cursor-pointer"
              >
                <label htmlFor="profile">
                  {/* {{ img ? 'upload new image' : 'upload image' }} */}
                </label>
                <input id="profile" type="file" name="profile" hidden />
                {/* v-if="currentFile" */}

                <div>
                  {/* @click="cancelUpload" */}

                  <button className="p-1 rounded-md font-bold capitalize cursor-pointer duration-300 bg-red-500 text-white hover:bg-red-400">
                    cancel
                  </button>
                  {/* @click="uploadImage" */}

                  <button className="p-1 rounded-md font-bold capitalize cursor-pointer duration-300 bg-green-500 text-white hover:bg-green-400">
                    Done
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-col justify-start mx-5 mt-4">
              <span className="flex gap-2">
                <h1 className="font-black tracking-tight text-black capitalize text-lg">
                  Johannes Leo Q. Alolino
                </h1>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M12 1L14.47 3.32L17.89 2.87L19.06 6.08L22.25 7.37L21.65 10.74L23.5 13.6L20.89 15.82L20.66 19.23L17.29 19.89L15.3 22.65L12 21.43L8.7 22.65L6.71 19.89L3.34 19.23L3.11 15.82L0.5 13.6L2.35 10.74L1.75 7.37L4.94 6.08L6.11 2.87L9.53 3.32L12 1Z"
                    fill="#0095F6"
                  />
                  <path
                    d="M9.5 11.5L11 13L14.5 9.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-md font-black capitalize tracking-normal text-gray-300">
                <p className="hover:text-black cursor-pointer w-26.5 transition-all duration-300">
                  @Leo Alolino
                </p>
              </span>

              <div className="space-x-2 flex capitalize">
                <button className="mt-4 p-2 cursor-pointer w-38 exclude rounded-lg font-black transition-all duration-300 bg-green-500 hover:bg-green-400 !text-white">
                  <a href="#contact">Hire Me</a>
                </button>
                {/* @click="modalRef.showPhotoById()" */}

                <button className="mt-4 p-2 w-35 capitalize exclude rounded-lg bg-sky-500 hover:bg-sky-400 font-black text-md text-white transition-all duration-500 cursor-pointer">
                  resume
                </button>
                {/* @click="$emit('triggerDarkMode')" */}

                <button className="group relative w-10 mt-4 h-10 cursor-pointer flex items-center justify-center border border-gray-200 hover:border-black transition-all duration-500 rounded-md">
                  <svg
                    v-if
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-black transition-transform duration-500 rotate-0 group-hover:rotate-90"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                  <svg
                    v-else
                    viewBox="0 0 24 24"
                    className="w-5 h-5 exclude transition-transform duration-500 scale-100"
                    fill="#FFFFFF"
                    stroke="currentColor"
                    stroke-width="0"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="border-gray-100 border-t mt-7 px-2 mx-4">
            <nav className="mt-8 flex flex-col h-64 px-4">
              <ul className="flex flex-col gap-2">
                {/* v-for="link in Links" */}

                <li className="border border-gray-100 rounded-md overflow-hidden transition-all duration-500">
                  <a className="block w-full p-2 capitalize font-bold text-sm transition-colors">
                    {/* {{ link.linkname }} */}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
}
