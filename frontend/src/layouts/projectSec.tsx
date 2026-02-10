export function ProjectSec() {
  return (
    <>
      <div
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16"
        id="projects"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-5xl font-black tracking-tighter uppercase">
              Projects
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <span></span>
              <p className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-300">
                Recent projects I built myself
              </p>
            </div>
          </div>

          {/* <!-- delete and add buttons --> */}
          <div className="flex gap-6 items-center">{/* <Btn /> */}</div>
        </div>

        {/* <!-- content parts --> */}
        <div className="w-full">
          {/* v-if="projects.length === 0" */}
          <div className="w-full">
            <div>
              <div className="group border-2 border-dashed border-gray-200 py-32 flex flex-col items-center justify-center text-center rounded-md">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter select-none leading-none">
                  No Systems <br />
                  Deployed Yet
                </h3>
              </div>
              {/* v-if="user?.role === 'admin' && isAuthenticated && isExpanded" */}

              <div className="pt-4">
                {/* @click="modalRef.ModalAdder(getProjectInputField, 'projects')" */}

                <button className="cursor-pointer group w-full py-14 border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-4 hover:border-black transition-all duration-500">
                  <div className="w-12 h-12 border-2 border-gray-100 rounded-md flex items-center justify-center transition-all">
                    <span className="text-2xl">+</span>
                  </div>
                  <p className="text-[12px] font-black uppercase tracking-[0.3em]">
                    upload an project
                  </p>
                </button>
              </div>
            </div>
          </div>
          {/* v-if="projects.length >= 1" */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/*    v-for="project in visibleProjects" */}

              <div>
                <div className="absolute top-4 right-4 flex gap-2 z-30">
                  {/* <!-- BUTTON --> */}
                  {/* <BtnProjects  /> */}
                </div>

                <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  v-if="project.img.value" :src="project.img.value"
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" />
                  <div
                    v-else
                    className="flex flex-col items-center text-gray-300"
                  >
                    <svg
                      className="w-12 h-12 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                      <p> {/* {{ project.project_type.value }}*/} </p>
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mt-1 leading-tight">
                      {/* {{ project.title.value }} */}
                    </h3>
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed font-medium mb-6 line-clamp-3">
                    {/* {{ project.short_description.value }} */}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {" "}
                    {/* v-for="tag in formatTags(project.usedtech.value)" */}
                    {/* :key="tag.id" */}
                    <span className="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {/* >{{ tag }} */}
                    </span>
                  </div>

                  <div className="mt-auto flex gap-3">
                    {" "}
                    {/* :href="project.live_url.value" */}
                    <a
                      target="_blank"
                      className="flex-1 inline-flex exclude items-center justify-center px-4 py-3 bg-black text-white text-[11px] font-black uppercase tracking-widest rounded-lg hover:bg-white border border-black hover:text-black duration-300 transition-all text-center"
                    >
                      View Live
                    </a>
                    {/* :href="project.github_link.value" */}
                    <a
                      target="_blank"
                      className="flex-1 inline-flex exclude items-center justify-center px-4 py-3 border border-gray-100 text-black text-[11px] bg-white hover:bg-gray-300 font-black uppercase tracking-widest rounded-lg transition-all duration-300 text-center"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              {/* v-if="user?.role === 'admin' && isAuthenticated && (isExpanded || projects.length < 3)" */}
              {/*          key="add-project-btn" */}
              <div className="group bg-white border-2 border-dashed border-gray-100 rounded-xl overflow-hidden hover:border-black transition-all duration-500 flex flex-col h-full w-full">
                <div className="h-48 w-full border-b-2 border-dashed border-gray-100 bg-gray-50/50 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gray-300 group-hover:text-black transition-all duration-500 transform group-hover:rotate-90"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-300">
                      New Deployment
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mt-1">
                      Add New Project
                    </h3>
                  </div>
                  <div className="mt-auto">
                    <div className="w-full py-3 border-2 border-dashed border-black bg-black text-white exclude text-[11px] font-black uppercase tracking-widest rounded-lg text-center hover:bg-black hover:text-white transition-all cursor-pointer">
                      Create Repository
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
