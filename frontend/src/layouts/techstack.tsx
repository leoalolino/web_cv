export function TechstackSec() {
  return (
    <>
      <section
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16"
        id="techstacks"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 gap-4">
          <div>
            <h2 className="text-5xl font-black tracking-tighter uppercase transition-colors duration-300">
              TechStack
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <span></span>
              <p className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-400">
                Techstacks and tools I'm familiar with.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-center pb-1">
            <div className="flex gap-4 items-center">
              {/* <Btn v-if="techstackInputField" /> */}
              {/* <!-- Buttons --> */}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          // v-for="(category, i) in techstackInputField" :key="i"
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center">
              <span className="mr-4">{/* {{ category.title.value }} */}</span>
              <div className="h-px flex-1"></div>
            </h3>
            // v-model="category.techstack" // item-key="id.value" // tag="div"
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              v-bind="dragOptions"
            >
              <div>
                {/* v-show="isExpanded || index < 4" */}
                <div className="drag-card group relative bg-white flex items-center p-4 rounded-sm border border-gray-100 transition-all duration-300 select-none">
                  <div className="absolute -top-2 -right-2 flex gap-1 z-30">
                    {/* <btn-techs */}
                    {/*   :techstack="stack" */}
                    {/*   :techstacks="techstackInputField" */}
                    {/*   :modalRef="modalRef" */}
                    {/*   :categoryTitle="category.title.value" */}
                    {/* /> */}
                    {/* <!-- buttons --> */}
                  </div>

                  <div className="shrink-0 w-12 h-12 bg-white exclude flex items-center justify-center border border-gray-100 pointer-events-none"></div>

                  <div className="ml-4 pointer-events-none">
                    <h3 className="text-sm font-bold uppercase tracking-wide">
                      {/* {{ stack.name.value }} */}
                    </h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-0.5">
                      Expertise: {/* {{ category.label.value }} */}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                {/* v-if=" */}
                {/*       user?.role === 'admin' && */}
                {/*       isAuthenticated && */}
                {/*       (isExpanded || category.techstack.length < 4) */}
                {/*     " */}
                {/*     @click=" */}
                {/*       modalRef.ModalAdder( */}
                {/*         getTemplateForCategory(category.title.value), */}
                {/*         category.title.value, */}
                {/*       ) */}
                {/*     " */}
                <button className="group flex items-center p-4 rounded-sm border-2 border-dashed border-gray-100 transition-all cursor-pointer h-full min-h-[82px] exclude duration-300">
                  <div className="w-12 h-12 border-2 border-gray-100 flex items-center justify-center transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-width="4" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div className="ml-4 text-left">
                    <h3 className="text-sm font-black uppercase text-gray-100">
                      Add Tech
                    </h3>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
