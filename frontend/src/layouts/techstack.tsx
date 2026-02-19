import { useState, useEffect } from "react";
import { Btns } from "../components/btnModifier";
import { Btn } from "../components/btn";

import { Modal } from "../components/modal";
import type { contents } from "../components/modal";

interface TechItem {
  id: { value: number; type: string };
  name: { value: string; type: string };
  svg: { value: string; type: string };
}

interface CategoryData {
  title: string;
  label: string;
  techstack: TechItem[];
}

export function TechstackSec() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<contents | null>(null);

  const [techstackData, setTechstackData] = useState<CategoryData[]>([
    { title: "Frontend", label: "Frontend Development", techstack: [] },
    { title: "Backend", label: "Backend Development", techstack: [] },
    { title: "Database", label: "Database Management", techstack: [] },
    { title: "Tools", label: "Development Tools", techstack: [] },
  ]);

  const fetchTechstack = async () => {
    try {
      // Fetch all categories
      const [frontendRes, backendRes, databaseRes, toolRes] = await Promise.all(
        [
          fetch("http://localhost:3000/items/Frontend"),
          fetch("http://localhost:3000/items/Backend"),
          fetch("http://localhost:3000/items/Database"),
          fetch("http://localhost:3000/items/Tool"),
        ],
      );

      const [frontendData, backendData, databaseData, toolData] =
        await Promise.all([
          frontendRes.json(),
          backendRes.json(),
          databaseRes.json(),
          toolRes.json(),
        ]);

      // Map data to our structure
      const mappedFrontend =
        frontendData?.data?.map((item: any) => ({
          id: { value: item.id, type: "text" },
          name: { value: item.frontend_name || "Unknown", type: "text" },
          svg: { value: item.frontend_svg || "", type: "text" },
        })) ?? [];

      const mappedBackend =
        backendData?.data?.map((item: any) => ({
          id: { value: item.id, type: "text" },
          name: { value: item.backend_name || "Unknown", type: "text" },
          svg: { value: item.backend_svg || "", type: "text" },
        })) ?? [];

      const mappedDatabase =
        databaseData?.data?.map((item: any) => ({
          id: { value: item.id, type: "text" },
          name: { value: item.database_name || "Unknown", type: "text" },
          svg: { value: item.database_svg || "", type: "text" },
        })) ?? [];

      const mappedTools =
        toolData?.data?.map((item: any) => ({
          id: { value: item.id, type: "text" },
          name: { value: item.tool_name || "Unknown", type: "text" },
          svg: { value: item.tool_svg || "", type: "text" },
        })) ?? [];

      // Update state with all categories
      setTechstackData([
        {
          title: "Frontend",
          label: "Frontend Development",
          techstack: mappedFrontend,
        },
        {
          title: "Backend",
          label: "Backend Development",
          techstack: mappedBackend,
        },
        {
          title: "Database",
          label: "Database Management",
          techstack: mappedDatabase,
        },
        { title: "Tools", label: "Development Tools", techstack: mappedTools },
      ]);
    } catch (error) {
      console.error("Failed to fetch techstack:", error);
    }
  };

  useEffect(() => {
    fetchTechstack();
  }, []);

  return (
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
            <span className="w-10 h-[2px] bg-black"></span>
            <p className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-400">
              Techstacks and tools I'm familiar with.
            </p>
          </div>
        </div>

        <div className="flex gap-6 items-center pb-1">
          <div className="flex gap-4 items-center">
            <Btn />
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {techstackData.map((category, categoryIndex) => (
          <div key={category.title}>
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center">
              <span className="mr-4">{category.title}</span>
              <div className="h-px flex-1 bg-gray-100"></div>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Render tech items */}
              {category.techstack.map((s, index) => (
                <div key={s.id.value}>
                  <div className="drag-card group relative bg-white flex items-center p-4 rounded-sm border border-gray-100 hover:border-black transition-all duration-300 select-none">
                    <div className="absolute -top-2 -right-2 flex gap-1 z-30">
                      {/* Button controls - to be implemented later */}
                      <Btns
                        id={s.id.value}
                        table="projects"
                        className=""
                        onTypeSelect={(type) => {
                          setContent(type);
                          setIsOpen(true);
                        }}
                      />
                    </div>

                    <div className="shrink-0 w-12 h-12 bg-white exclude flex items-center justify-center border border-gray-100 pointer-events-none">
                      {s.svg.value ? (
                        <img
                          src={s.svg.value}
                          alt={s.name.value}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                      )}
                    </div>

                    <div className="ml-4 pointer-events-none">
                      <h3 className="text-sm font-bold uppercase tracking-wide">
                        {s.name.value}
                      </h3>
                      <p className="text-[10px] text-gray-500 font-bold uppercase mt-0.5">
                        Expertise: {category.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Tech button - only show if less than 4 items or admin */}
              {category.techstack.length < 4 && (
                <button
                  key={`add-${category.title}`}
                  className="group flex items-center p-4 rounded-sm border-2 border-dashed border-gray-100 hover:border-black transition-all cursor-pointer h-full min-h-[82px] duration-300"
                  onClick={() => {
                    // Add your modal adder here
                    console.log(`Add tech to ${category.title}`);
                  }}
                >
                  <div className="w-15 h-12 border-2 border-gray-100 flex items-center justify-center transition-colors group-hover:border-black">
                    <svg
                      className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors"
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
                  <div className="ml-4 text-left">
                    <h3 className="text-sm font-black uppercase text-gray-300 group-hover:text-black transition-colors">
                      Add {category.title} Tech
                    </h3>
                  </div>
                </button>
              )}
            </div>
            <Modal
              isOpen={isOpen}
              typeContent={content}
              isClose={() => setIsOpen(false)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
