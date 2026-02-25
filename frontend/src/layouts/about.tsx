interface kind {
  school?: string;
  year?: string;
  finished?: string;
}

const edu: kind[] = [
  {
    school: "Dipolog City institute of technology",
    year: "2018 - 2024",
    finished: "GAS",
  },
  {
    school: "Jose Rizal Memorial State University",
    year: "2024 - 2028",
    finished: "Bachelor of Science in Information Systems",
  },
];
const interested: String[] = [
  "growth",
  "opersource",
  "Coding",
  "testing things",
  "clean minimal designs",
  "gaming",
  "explore new technologies",
];

export function AboutSec() {
  return (
    <>
      <section
        id="about"
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-black uppercase mb-8">
              About Me
            </h2>
            <div className="space-y-6">
              <p className="text-md text-black leading-relaxed">
                I’m a developer dedicated to helping businesses grow by
                automating the repetitive tasks that slow them down. I don’t
                just build stuffs, I build solutions that save you time and make
                your operations run more smoothly. My goal is to ensure that
                every digital tool I create is easy to user friendly,
                professional, and most importantly delivers the results your
                business needs to thrive.
              </p>

              <p className="text-md text-black leading-relaxed">
                My journey in tech is fueled by a simple obsession figuring out
                how to make things work better. I’ve always been driven to take
                complex problems and turn them into simple, functional tools
                that actually get the job done. For me, it’s not just about
                building an application, It's all about creating something
                reliable and polished that makes your work life easier and your
                business look great.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-[0.2em] text-gray-300">
                  <span className="text-gray-300">Located in</span>
                  <h2 className="text-black">Dipolog, PH</h2>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300 mb-6 flex items-center">
                <span className="mr-4">Education</span>
                <div className="h-px bg-gray-100 flex-1"></div>
              </h3>
              <div className="space-y-6">
                {edu.map((e, i) => (
                  <div
                    className="relative pl-6 border-l-2 border-gray-100"
                    key={i}
                  >
                    <h4 className="text-sm font-black uppercase tracking-tight text-black">
                      {e.school}
                    </h4>
                    <h5 className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wide">
                      {e.finished}
                    </h5>
                    <h5 className="text-[10px] text-gray-400 mt-1 font-medium">
                      {e.year}
                    </h5>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-300 mb-6 flex items-center">
                <p className="mr-4 text-black">Interests</p>
                <div className="h-px bg-gray-100 flex-1"></div>
              </h3>
              <div className="flex flex-wrap gap-2">
                {interested.map((i, n) => (
                  <span
                    key={n}
                    className="px-4 py-2 bg-white border border-gray-100 text-md font-black text-black leading-relaxed rounded-full text-[10px] uppercase transition-all duration-300"
                  >
                    <p>{i}</p>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// type isAdmin<role> = role extends "admin" ? "is admin" : "regular user";
//
// type auth = isAdmin<${userfromapi}>;
