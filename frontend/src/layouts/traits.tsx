const traits: string[] = [
  "not afraid to own mistakes",
  "Detail-Oriented",
  "Problem Solver",
  "Adaptable Learner",
  "Technical Curiosity",
  "pleasant personality ",
];
export function TraitSec() {
  return (
    <>
      <section
        id="traits"
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16"
      >
        <div className="mb-12">
          <h2 className="text-5xl font-black tracking-tighter text-black uppercase">
            Personal Traits
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="w-10 h-[2px] bg-gray-950"></span>
            <p className="text-[12px] font-black uppercase tracking-[0.3em] text-gray-300">
              Soft Skills & Character Architecture
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-sm bg-transparent">
              <svg
                viewBox="0 0 1024 1024"
                className="w-full h-auto overflow-visible"
              >
                <defs>
                  <path
                    id="orbit1"
                    d="M 512,96 C 577.6,96 640,281.6 640,512 C 640,742.4 577.6,928 512,928 C 446.4,928 384,742.4 384,512 C 384,281.6 446.4,96 512,96 Z"
                  />
                  <path
                    id="orbit2"
                    d="M 872,304 C 838.4,246.4 646.4,286.4 448,401.6 C 249.6,516.8 118.4,662.4 152,720 C 185.6,777.6 377.6,737.6 576,622.4 C 774.4,507.2 905.6,361.6 872,304 Z"
                  />
                  <path
                    id="orbit3"
                    d="M 152,304 C 185.6,246.4 377.6,286.4 576,401.6 C 774.4,516.8 905.6,662.4 872,720 C 838.4,777.6 646.4,737.6 448,622.4 C 249.6,507.2 118.4,361.6 152,304 Z"
                  />
                </defs>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 512 512"
                    to="360 512 512"
                    dur="40s"
                    repeatCount="indefinite"
                  />

                  <path
                    d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z"
                    fill="#f3f4f6"
                  />
                  <path
                    d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z"
                    fill="#f3f4f6"
                  />
                  <path
                    d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z"
                    fill="#f3f4f6"
                  />

                  <circle cx="512" cy="512" r="80" fill="#000000" />

                  <circle r="22" fill="#22c55e">
                    <animateMotion dur="3s" repeatCount="indefinite">
                      <mpath href="#orbit1" />
                    </animateMotion>
                  </circle>
                  <circle r="22" fill="#ef4444">
                    <animateMotion
                      dur="3s"
                      repeatCount="indefinite"
                      begin="-1s"
                    >
                      <mpath href="#orbit2" />
                    </animateMotion>
                  </circle>
                  <circle r="22" fill="#3b82f6">
                    <animateMotion
                      dur="3s"
                      repeatCount="indefinite"
                      begin="-2s"
                    >
                      <mpath href="#orbit3" />
                    </animateMotion>
                  </circle>
                </g>
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300 mb-8 flex items-center">
                <p className="mr-4 text-black">Things i possessed</p>
                <div className="h-px bg-gray-100 flex-1"></div>
              </h2>

              <div className="flex flex-wrap gap-3">
                {traits.map((t) => (
                  <div className="group flex items-center px-5 py-2.5 bg-white border border-gray-100 rounded-full transition-all duration-300 cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-black mr-3 transition-colors"></div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-black transition-colors">
                      <p>{t}</p>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative pl-6 py-2 border-l-2 border-gray-100">
              <p className="text-sm text-black leading-relaxed font-medium italic">
                "I approach development with a focus on clean architecture,
                proactive communication, and a relentless drive for
                pixel-perfect results."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
