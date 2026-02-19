import { useState, useEffect } from "react";
import { Btns } from "../components/btnModifier";
import { Modal } from "../components/modal";
import type { contents } from "../components/modal";

export function ExperienceSec() {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [expandedTasks, setExpandedTasks] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<contents | null>(null);

  const fetchExperience = async () => {
    try {
      const res = await fetch("http://localhost:3000/items/Experience");
      const json = await res.json();

      const data =
        json?.data?.map((e: any) => ({
          id: { value: e.id, type: "text" },
          company_name: {
            value: e.company_name || "Unknown Company",
            type: "text",
          },
          company_logo: { value: e.company_logo || "", type: "text" },
          job_title: {
            value: e.job_title || "Untitled Position",
            type: "text",
          },
          responsibilities: { value: e.responsibilities || "", type: "text" },
          start_date: { value: e.start_date || "", type: "text" },
          end_date: { value: e.end_date || "Present", type: "text" },
        })) ?? [];

      setExperiences(data);
    } catch (error) {
      console.error("Failed to fetch experiences:", error);
    }
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  const toggleTaskExpansion = (index: number) => {
    setExpandedTasks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const getVisibleTasks = (e: any, index: number) => {
    if (!e.responsibilities.value) return [];

    // Split responsibilities by new lines or periods
    const tasks = e.responsibilities.value
      .split(/[\n.]+/)
      .map((task: string) => task.trim())
      .filter((task: string) => task.length > 0);

    if (expandedTasks.includes(index)) {
      return tasks;
    }
    return tasks.slice(0, 6);
  };

  const formatDateRange = (startDate: string, endDate: string) => {
    if (!startDate) return "Date not specified";

    const formatSingleDate = (dateStr: string) => {
      try {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        });
      } catch {
        return dateStr;
      }
    };

    const start = formatSingleDate(startDate);
    const end = endDate === "Present" ? "Present" : formatSingleDate(endDate);

    return `${start} — ${end}`;
  };

  return (
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
        <div className="flex gap-6 items-center">{/* <Btn  /> */}</div>
      </div>

      <div className="space-y-6">
        {experiences.length === 0 ? (
          <div>
            <div className="flex items-center justify-center w-full min-h-[400px] border-2 border-dashed border-gray-200 rounded-md">
              <span className="text-center uppercase font-black text-xl md:text-5xl tracking-tighter opacity-20">
                Experience not available
              </span>
            </div>
          </div>
        ) : (
          <>
            {experiences.map((e, index) => {
              const visibleTasks = getVisibleTasks(e, index);
              const hasMoreTasks =
                e.responsibilities.value &&
                e.responsibilities.value
                  .split(/[\n.]+/)
                  .filter((t: string) => t.trim()).length > 6;

              return (
                <div
                  key={e.id.value}
                  className="relative border border-gray-200 p-8 transition-all group overflow-hidden"
                >
                  {/* btn */}
                  <div className="absolute top-5 right-5 flex gap-2 z-20">
                    {/* <BtnCertificates
                    modalRef={modalRef}
                    certificate={t}
                    certificates={certificates}
                  /> */}
                    <Btns
                      id={e.id.value}
                      table="projects"
                      className=""
                      onTypeSelect={(type) => {
                        setContent(type);
                        setIsOpen(true);
                      }}
                    />
                  </div>
                  <div className="flex items-stretch gap-8">
                    <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gray-50 border border-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-2">
                      {e.company_logo.value ? (
                        <img
                          src={e.company_logo.value}
                          alt={e.company_name.value}
                          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      ) : (
                        <div className="text-[10px] font-black text-gray-300 text-center">
                          {e.company_name.value
                            .split(" ")
                            .map((word: string) => word[0])
                            .join("")
                            .toUpperCase() || "NO LOGO"}
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col h-full">
                        <div>
                          <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">
                            {e.job_title.value}
                          </h3>
                          <p className="text-blue-600 text-[13px] font-black uppercase tracking-widest mt-2">
                            {e.company_name.value}
                          </p>

                          <div className="flex items-center gap-4 mt-3">
                            <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-[9px] font-black uppercase tracking-tighter rounded border border-green-500/20">
                              {e.end_date.value === "Present"
                                ? "Current"
                                : "Past"}
                            </span>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                              {formatDateRange(
                                e.start_date.value,
                                e.end_date.value,
                              )}
                            </p>
                          </div>
                        </div>

                        {visibleTasks.length > 0 && (
                          <div className="mt-6 grid grid-cols-1 gap-y-3">
                            {visibleTasks.map(
                              (task: string, taskIdx: number) => (
                                <div
                                  key={taskIdx}
                                  className="text-[12px] flex items-start leading-tight"
                                >
                                  <span className="text-blue-600 mr-2 font-bold">
                                    •
                                  </span>
                                  <span className="font-bold uppercase tracking-tight">
                                    {task}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        )}

                        {hasMoreTasks && (
                          <div className="mt-4">
                            <button
                              onClick={() => toggleTaskExpansion(index)}
                              className="text-[9px] font-black text-blue-500 uppercase tracking-[0.2em] cursor-pointer hover:underline"
                            >
                              {expandedTasks.includes(index)
                                ? "[-] Close"
                                : "[+] Details"}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* <BtnExperiences :modalRef="modalRef" :experience="e" :experiences="expData" /> */}
                  </div>
                </div>
              );
            })}

            {/* Add experience button */}
            <div key="add-button">
              <button className="cursor-pointer group w-full py-10 border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-3 hover:border-black transition-all duration-500">
                <div className="w-20 h-20 border-2 border-gray-100 rounded flex items-center justify-center transition-all group-hover:border-black">
                  <span className="text-xl text-gray-300 group-hover:text-black transition-colors">
                    +
                  </span>
                </div>
                <p className="text-[11px] font-black uppercase tracking-[0.3em]">
                  Add experience
                </p>
              </button>
            </div>

            <Modal
              isOpen={isOpen}
              typeContent={content}
              isClose={() => setIsOpen(false)}
            />
          </>
        )}
      </div>
    </section>
  );
}
