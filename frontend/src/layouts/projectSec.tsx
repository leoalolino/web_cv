import { useState, useEffect } from "react";
import { Btn } from "../components/btn";
import { Btns } from "../components/btnModifier";
import { Modal } from "../components/modal";
import type { contents } from "../components/modal";

export function ProjectSec() {
  // --- STATE MUST BE INSIDE ---
  const [projects, setprojects] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<contents | null>(null);

  // --- FETCH LOGIC ---
  const fetchProject = async () => {
    try {
      const res = await fetch("http://localhost:3000/items/gallery");
      const json = await res.json();

      const data =
        json?.data?.map((p: any) => ({
          id: { value: p.id, type: "text" },
          project_img: { value: p.img || "", type: "text" },
          project_type: { value: p.project_type || "Web App", type: "text" },
          title: { value: p.title || "Untitled Project", type: "text" },
          short_description: { value: p.description || "", type: "text" },
          description: { value: p.description || "", type: "text" },
          purposes: { value: p.purposes || "General purpose", type: "text" },
          usedtech: Array.isArray(p.usedtech)
            ? p.usedtech
            : p.tech
              ? p.tech.map((t: string) => ({ value: t, type: "text" }))
              : [
                  { value: "React", type: "text" },
                  { value: "Node.js", type: "text" },
                ],
          live_url: { value: p.live_url || "#", type: "text" },
          github_link: { value: p.github_link || "#", type: "text" },
          target_audience: {
            value: p.target_audience || "Everyone",
            type: "text",
          },
          featured: { value: p.featured || "false", type: "text" },
        })) ?? [];

      setprojects(data);
    } catch (e) {
      console.error(`failed to fetch due to: ${e}`);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

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
            <div className="flex justify-between items-center gap-3 mt-2">
              <span className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-300">
                Recent projects I built
              </span>
              <span className="absolute right-10">
                <Btn />
              </span>
            </div>
          </div>
        </div>

        <div className="w-full">
          {projects.length === 0 ? (
            <div className="w-full">
              <div className="group border-2 border-dashed border-gray-200 py-32 flex flex-col items-center justify-center text-center">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter select-none leading-none">
                  No Systems <br /> Deployed Yet
                </h3>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => setContent("Adder")}
                  className="cursor-pointer group w-full py-14 border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-4 hover:border-black transition-all duration-500"
                >
                  <div className="w-12 h-12 border-2 border-gray-100 flex items-center justify-center transition-all">
                    <span className="text-2xl">+</span>
                  </div>
                  <p className="text-[12px] font-black uppercase tracking-[0.3em]">
                    upload a project
                  </p>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p: any) => (
                  <div
                    key={p.id.value}
                    className="flex flex-col h-full border border-gray-100 rounded-md overflow-hidden group"
                  >
                    <div className="absolute flex flex-row z-10 ml-52 gap-3 mt-3">
                      {/* <!-- BUTTON --> */}
                      {/* <BtnProjects /> */}
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
                    <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                      {p.project_img.value ? (
                        <img
                          src={p.project_img.value}
                          alt={p.alt?.value || "Project image"}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      ) : (
                        <div className="text-gray-300">
                          <svg
                            className="w-12 h-12"
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
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-4">
                        <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                          {p.project_type.value ?? "N/A"}
                        </span>
                        <h3 className="text-2xl font-black uppercase tracking-tighter mt-1 leading-tight">
                          {p.title.value ?? "N/A"}
                        </h3>
                      </div>
                      <p className="text-[13px] text-gray-600 leading-relaxed font-medium mb-6 line-clamp-3">
                        {p.short_description.value ?? "N/A"}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {p.usedtech && p.usedtech.length > 0 ? (
                          p.usedtech.map((t: any, i: number) => (
                            <span
                              key={i}
                              className="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                            >
                              {typeof t === "string" ? t : (t.value ?? "N/A")}
                            </span>
                          ))
                        ) : (
                          <span className="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                            React
                          </span>
                        )}
                      </div>

                      <div className="mt-auto flex gap-3">
                        <a
                          href={p.live_url.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-black text-white text-[11px] font-black uppercase tracking-widest rounded-lg hover:bg-white border border-black hover:text-black duration-300 transition-all text-center"
                        >
                          View Live
                        </a>
                        <a
                          href={p.github_link.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-gray-100 text-black text-[11px] bg-white hover:bg-gray-300 font-black uppercase tracking-widest rounded-lg transition-all duration-300 text-center"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* --- ADD NEW CARD --- */}
                <div className="group bg-white border-2 border-dashed border-gray-100 rounded-xl overflow-hidden hover:border-black transition-all duration-500 flex flex-col h-full w-full">
                  <div className="h-48 w-full border-b-2 border-dashed border-gray-100 bg-gray-50/50 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-300 group-hover:text-black transition-all duration-500 transform group-hover:rotate-90"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
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
                      <div className="w-full py-3 border-2 border-dashed border-black bg-black text-white text-[11px] font-black uppercase tracking-widest rounded-lg text-center cursor-pointer">
                        Create Repository
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        typeContent={content}
        isClose={() => setIsOpen(false)}
      />
    </>
  );
}
