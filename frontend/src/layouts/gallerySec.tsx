import { useState, useEffect } from "react";
import { Btns } from "../components/btnModifier";
import { Modal } from "../components/modal";
import type { contents } from "../components/modal";

export function GallerySec() {
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<contents | null>(null);

  const fetchGallery = async () => {
    try {
      const res = await fetch("http://localhost:3000/items/Gallery");
      const json = await res.json();

      const data =
        json?.data?.map((g: any) => ({
          id: { value: g.id, type: "text" },
          img: { value: g.img || "", type: "text" },
          alt: { value: g.alt || "Gallery image", type: "text" },
          description: { value: g.description || "", type: "text" },
          created_at: { value: g.created_at || "", type: "text" },
        })) ?? [];

      setGalleryItems(data);
    } catch (error) {
      console.error("Failed to fetch gallery:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
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
            <span className="w-10 h-[2px] bg-black"></span>
            <p className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-400">
              Visual snapshots of my journey and workspace.
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-center pb-1">{/* <Btn /> */}</div>
      </div>

      {galleryItems.length === 0 ? (
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

          <div className="pt-4">
            <button className="cursor-pointer group w-full py-14 border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-4 hover:border-black transition-all duration-500">
              <div className="w-12 h-12 border-2 border-gray-100 rounded-md flex items-center justify-center transition-all group-hover:border-black">
                <span className="text-2xl text-gray-300 group-hover:text-black transition-colors">
                  +
                </span>
              </div>
              <p className="text-[12px] font-black uppercase tracking-[0.3em]">
                upload an image
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((p) => (
            <div key={p.id.value} className="space-y-8">
              <div className="group relative aspect-video bg-white border border-gray-100 overflow-hidden rounded-sm transition-all duration-300 select-none">
                <div className="absolute top-3 right-3 flex gap-2 z-20">
                  {/* <BtnCertificates
                    modalRef={modalRef}
                    certificate={t}
                    certificates={certificates}
                  /> */}
                  <Btns
                    id={p.id.value}
                    table="projects"
                    className=""
                    onTypeSelect={(type) => {
                      setContent(type);
                      setIsOpen(true);
                    }}
                  />
                </div>

                {p.img.value && p.img.value !== "dsada" ? (
                  <img
                    src={p.img.value}
                    alt={p.alt.value}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 cursor-pointer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <svg
                      className="w-16 h-16 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/90 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-widest">
                    {p.alt.value}
                  </p>
                  {p.description.value && (
                    <p className="text-[8px] font-medium text-gray-300 mt-1">
                      {p.description.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Add new p button */}
          <button
            key="add-photo-btn"
            className="group flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-100 rounded-sm transition-all duration-300 ease-in-out cursor-pointer aspect-video shadow-none hover:border-black"
            onClick={() => {
              // Add your modal adder here
              console.log("Add new p");
            }}
          >
            <div className="w-14 h-14 border-2 border-gray-100 flex items-center justify-center group-hover:scale-110 transition-all mb-4 group-hover:border-black">
              <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors group-hover:border-black">
                <svg
                  className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
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
      )}
      <Modal
        isOpen={isOpen}
        typeContent={content}
        isClose={() => setIsOpen(false)}
      />
    </section>
  );
}
