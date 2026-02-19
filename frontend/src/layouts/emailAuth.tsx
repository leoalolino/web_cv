interface FormSettings {
  defaultRows: number;
}

const rows: FormSettings = { defaultRows: 4 };
export function EmailSec() {
  return (
    <>
      <section
        id="contact"
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-black uppercase">
                Get in Touch
              </h2>
              <p className="mt-6 text-gray-500 font-medium leading-relaxed max-w-md">
                Are you interested in collaborating or have a question about my
                work? I am currently open to new opportunities and would love to
                hear from you.
              </p>
            </div>

            <div className="mt-12 lg:mt-0">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-6">
                You may also contact me at this social media platforms:
              </h3>
              <div className="flex flex-col gap-4">
                {/* v-for="social in socials" :key="social.name" :href="social.link" */}
                <a className="group flex items-center text-xs font-bold uppercase tracking-widest text-black hover:text-gray-300 transition-all">
                  <span className="w-8 h-px bg-gray-200 mr-4 group-hover:w-12 group-hover:bg-black transition-all"></span>
                  {/* {{ social.name }} */}
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-gray-100">
            {/* <!-- successfuly message indicator --> */}
            {/* v-if="msg" */}

            <div className="mb-4 p-3 rounded text-sm">{/* {{ msg }} */}</div>

            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                  Email Address
                </label>
                <input
                  type="text"
                  v-model="emailOrLogin"
                  placeholder="example@gmail.com"
                  required
                  className="bg-transparent border-b border-gray-200 py-3 outline-none focus:border-blue-400 transition-colors text-sm font-medium"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                  Your Message
                </label>
                <textarea
                  rows={rows.defaultRows}
                  required
                  placeholder="Tell me about your project..."
                  className="bg-transparent border-b border-gray-200 py-3 resize-none outline-none focus:border-blue-400 transition-colors text-sm font-medium h-32"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 w-full exclude bg-black text-white py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all active:scale-[0.98]"
              >
                {/* {{ isLoading ? 'submitting...' : 'Send Inquries' }} */}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
