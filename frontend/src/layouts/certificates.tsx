import { useState, useEffect } from "react";
import { Btns } from "../components/btnModifier";
import { Modal } from "../components/modal";
import type { contents } from "../components/modal";
export function CertificateSec() {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const [content, setContent] = useState<contents | null>(null);
  const fetchCertificates = async () => {
    try {
      const res = await fetch("http://localhost:3000/items/Certificate");
      const json = await res.json();

      const data =
        json?.data?.map((c: any) => ({
          id: { value: c.id, type: "text" },
          display_img: { value: c.display_img || "", type: "text" },
          title: { value: c.title || "Untitled Certificate", type: "text" },
          issued_by: { value: c.issued_by || "Unknown Issuer", type: "text" },
          received_at: { value: c.received_at || "", type: "text" },
          certificate_img: { value: c.certificate_img || "", type: "text" },
        })) ?? [];

      setCertificates(data);
    } catch (error) {
      console.error("Failed to fetch certificates:", error);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <section
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-24 text-black"
      id="certificates"
    >
      <div className="mb-12 flex justify-between items-end pb-6 border-b border-gray-100">
        <div>
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            Certifications
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="w-10 h-[2px] bg-black"></span>
            <p className="text-[12px] font-bold text-gray-300 uppercase tracking-[0.3em]">
              Verified Credentials & Specialized Training
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          {/* <btn :items="visibleCerts" /> */}
        </div>
      </div>

      {/* certificates models */}
      <div className="w-full">
        {certificates.length === 0 ? (
          <>
            <div className="group w-full border-2 border-dashed border-gray-200 min-h-[400px] flex justify-center items-center px-4 rounded-md">
              <div className="max-w-6xl w-full text-center p-8 md:p-12">
                <h2 className="uppercase font-black text-xl md:text-3xl lg:text-5xl tracking-tighter leading-none text-gray-300">
                  <span className="flex flex-col justify-center">
                    <h3>
                      Achievements & certifications <br />
                    </h3>
                    <h3>Coming soon!</h3>
                  </span>
                </h2>
              </div>
            </div>
            <div className="pt-4">
              <button className="cursor-pointer group w-full py-14 border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-4 hover:border-black transition-all duration-500">
                <div className="w-12 h-12 border-2 border-gray-100 rounded-md flex items-center justify-center transition-all group-hover:bg-black group-hover:text-white text-gray-200">
                  <span className="text-2xl">+</span>
                </div>
                <p className="text-[12px] font-black uppercase tracking-[0.3em]">
                  Add new achievement
                </p>
              </button>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((c: any) => (
              <div
                key={c.id.value}
                className="group flex items-center p-6 bg-white border border-gray-100 hover:border-black transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 flex gap-2 z-20">
                  {/* <BtnCertificates
                    modalRef={modalRef}
                    certificate={t}
                    certificates={certificates}
                  /> */}

                  <Btns
                    id={c.id.value}
                    table="projects"
                    className=""
                    onTypeSelect={(type) => {
                      setContent(type);
                      setIsOpen(true);
                    }}
                  />
                </div>

                <div className="shrink-0 w-16 h-16 flex items-center justify-center border border-gray-100 group-hover:border-black transition-colors">
                  {c.display_img.value ? (
                    <img
                      src={c.display_img.value}
                      alt={c.title.value}
                      className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                  ) : (
                    <svg
                      className="w-8 h-8 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>

                <div className="ml-6">
                  <h3 className="text-[14px] font-black uppercase tracking-tight text-black leading-tight">
                    {c.title.value}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                    {c.issued_by.value} • {formatDate(c.received_at.value)}
                  </p>

                  <button className="mt-3 inline-flex items-center text-[9px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-600 transition-colors cursor-pointer">
                    Verify Credential
                    <svg
                      className="ml-1.5 w-3 h-3"
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
                  </button>
                </div>
              </div>
            ))}

            {/* Add new credential button */}
            <button className="group flex items-center p-6 bg-white border-2 border-dashed border-gray-100 transition-all duration-500 w-full cursor-pointer h-full hover:border-black">
              <div className="shrink-0 w-16 h-16 flex items-center justify-center border-2 border-gray-100 transition-colors group-hover:border-black duration-500">
                <span className="text-2xl font-light text-gray-300 transition-all duration-500 group-hover:text-black">
                  +
                </span>
              </div>
              <div className="ml-6 text-left">
                <h3 className="text-[14px] font-black uppercase tracking-tight text-black leading-tight">
                  Add New <br />
                  Credential
                </h3>
                <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-1">
                  Verified Record
                </p>
              </div>
            </button>
          </div>
        )}
        <Modal
          isOpen={isOpen}
          typeContent={content}
          isClose={() => setIsOpen(false)}
        />
      </div>
    </section>
  );
}
