export function GallerySec() {
  return (
    <>
      <section
        id="gallery"
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-gray-100 gap-4">
          <div>
            <h2 className="text-5xl font-black tracking-tighter uppercase transition-colors duration-300">
              Gallery
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="w-10 h-[2px]"></span>
              <p className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-400">
                Visual snapshots of my journey and workspace.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-center pb-1">{/* <Btn /> */}</div>
        </div>
        {/* v-if="visiblePhotos.length === 0" */}
        <div>
          <div>
            <div
              key="empty-state"
              className="group w-full border-2 border-dashed border-gray-200 min-h-[400px] flex justify-center items-center px-4 rounded-md"
            >
              <div className="max-w-6xl w-full text-center p-8 md:p-12">
                <h2 className="uppercase font-black text-xl md:text-3xl lg:text-5xl tracking-tighter leading-none text-gray-300">
                  <span className="flex flex-col justify-center">
                    <h3 className="tracking-wide">
                      This person hasn't uploaded a picture yet <br />
                    </h3>
                  </span>
                </h2>
              </div>
            </div>

            {/* v-if=" */}
            {/*    isExpanded && visiblePhotos.length === 0 && user?.role === 'admin' && isAuthenticated */}
            {/*  " */}

            <div className="pt-4">
              <button className="cursor-pointer group w-full py-14 border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-4 hover:border-black transition-all duration-500">
                <div className="w-12 h-12 border-2 border-gray-100 rounded-md flex items-center justify-center transition-all">
                  <span className="text-2xl">+</span>
                </div>
                <p className="text-[12px] font-black uppercase tracking-[0.3em]">
                  upload an image
                </p>
              </button>
            </div>
          </div>
        </div>
        <div v-else className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* v-for="photo in visiblePhotos" :key="photo.id" */}
            <div className="group relative aspect-video bg-white border border-gray-100 overflow-hidden rounded-sm transition-all duration-300 select-none">
              {/* v-if="isDeleteMode" @click="modalRef.ModalDeletor(photo.id, */}
              {/* 'gallery')" */}
              <button className="absolute top-4 right-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-colors z-20">
                <svg
                  className="w-4 h-4"
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
              </button>
              {/* v-if="photo.img.value && photo.img.value !== 'dsada'" */}
              {/* @click="modalRef.showPhotoByid()" */}
              {/* :src="photo.img.value" */}
              {/* :alt="photo.alt.value" */}
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 cursor-pointer" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/90 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-white/10">
                <p className="text-[10px] font-black uppercase tracking-widest">
                  {/* {{ photo.alt.value }} */}
                </p>{" "}
              </div>
            </div>
            {/* v-if=" */}
            {/*   (user?.role === 'admin' && isAuthenticated && isExpanded && visiblePhotos.length > 0) || */}
            {/*   visiblePhotos.length < 2 */}
            {/* " */}
            {/*   @click="modalRef.ModalAdder(GalleryField, 'gallery')" */}
            {/* key="add-photo-btn" */}
            <button className="group flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-100 rounded-sm transition-all duration-300 ease-in-out cursor-pointer aspect-video shadow-none">
              <div className="w-14 h-14 border-2 border-gray-100 flex items-center justify-center group-hover:scale-110 transition-all mb-4">
                <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-sm font-black uppercase tracking-wide text-gray-400 group-hover:text-black">
                Add Moment
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
