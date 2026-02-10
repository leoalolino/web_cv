export function FooterSec() {
  return (
    <>
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16 text-black">
        <div className="flex justify-between items-end mb-12 pb-6 border-b border-gray-100">
          <div>
            <h2 className="text-5xl font-black uppercase tracking-tighter">
              Experience
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="w-10 h-[2px] bg-black"></span>
              <p className="text-[12px] font-bold text-gray-300 uppercase tracking-[0.3em]">
                Experiences History
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            {/* <Btn :items="visibleExperiences" /> */}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            v-if="visibleExperiences.length === 0"
            <div className="flex items-center justify-center w-full min-h-[400px] border-2 border-dashed border-gray-200 rounded-md">
              <span className="text-center uppercase font-black text-xl md:text-5xl tracking-tighter opacity-20">
                Experience not available
              </span>
            </div>
          </div>
          {/* v-for="(exp, i) in visibleExperiences" */}

          <div className="relative border border-gray-200 p-8 transition-all group overflow-hidden">
            <div className="flex items-stretch gap-8">
              <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gray-50 border border-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-2">
                {/* v-if="exp.company_logo.value" */}
                {/* :src="exp.company_logo.value" */}

                <img className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                {/* else */}
                <div className="text-[10px] font-black text-gray-300">
                  NO LOGO
                </div>
              </div>

              <div className="w-[1px] bg-gray-100 self-stretch"></div>

              <div className="flex-1">
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">
                      {/* {{ exp.job_title.value }} */}
                    </h3>
                    <p className="text-blue-600 text-[13px] font-black uppercase tracking-widest mt-2">
                      {/* {{ exp.company.value }} */}
                    </p>

                    <div className="flex items-center gap-4 mt-3">
                      <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-[9px] font-black uppercase tracking-tighter rounded border border-green-500/20">
                        Part-Time
                      </span>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {/* {{ exp.period.value }} */}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-y-3">
                    {/* v-for="(task, taskIdx) in getVisibleTasks(exp, i)" */}
                    {/* :key="taskIdx" */}

                    <div className="text-[12px] flex items-start leading-tight">
                      <span className="text-blue-600 mr-2 font-bold">•</span>
                      <span className="font-bold uppercase tracking-tight">
                        {/* {{ task }} */}
                      </span>
                    </div>
                  </div>
                  {/* v-if="exp.tasks.value.length > 6" */}

                  <div className="mt-4">
                    {" "}
                    {/* @click="toggleTaskExpansion(i)" */}
                    <button className="text-[9px] font-black text-blue-500 uppercase tracking-[0.2em] cursor-pointer hover:underline">
                      {/* {{ expandedTasks.includes(i) ? '[-] Close' : '[+] Details' }} */}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* :modalRef="modalRef" :experience="exp" :experiences="expData" */}
              {/* <BtnExperiences /> */}
            </div>
          </div>
          {/* v-if="isExpanded && user?.role === 'admin' && isAuthenticated" key="add-button" */}
          <div>
            {/* @click="modalRef.ModalAdder(expList, 'experiences')" */}

            <button className="cursor-pointer group w-full py-10 border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-3 hover:border-black transition-all duration-500">
              <div className="w-10 h-10 border-2 border-gray-100 rounded flex items-center justify-center transition-all">
                <span className="text-xl">+</span>
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em]">
                Add experience
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
