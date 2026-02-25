import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { clsx } from "clsx";
import { SidebarSec } from "./layouts/sideBar.tsx";
import { ProjectSec } from "./layouts/projectSec.tsx";
import { CertificateSec } from "./layouts/certificates.tsx";
import { AboutSec } from "./layouts/about.tsx";
import { ExperienceSec } from "./layouts/experience.tsx";
import { TechstackSec } from "./layouts/techstack.tsx";
import { TraitSec } from "./layouts/traits.tsx";
import { GallerySec } from "./layouts/gallerySec.tsx";
import { EmailSec } from "./layouts/emailAuth.tsx";
import AnimationSec from "./layouts/animation.tsx";
import DragonCursor from "./layouts/cursor.tsx";
import { ChatBot } from "./layouts/chatBot.tsx";
import { FooterSec } from "./layouts/footer.tsx";
import ClickEffect from "./layouts/click.tsx";

export function App() {
  const [devMode, setDevMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [include, setInclude] = useState(false);

  const statusDev = localStorage.getItem("devMode");

  useEffect(() => {
    if (!devMode) {
      setTimeout(() => {
        setInclude(!include);
      }, 5000);
    }
  }, []);

  return (
    <>
      <div className="justify-between flex border-t border-gray-100">
        {statusDev === "true" ? (
          <section>
            <AnimationSec devMode={devMode} />
            {include && (
              <>
                <DragonCursor />
                <ClickEffect />
              </>
            )}
          </section>
        ) : (
          <>
            <aside>
              <SidebarSec
                darkMode={darkMode}
                btnDev={devMode}
                toggle={() => setDevMode(!devMode)}
                click={() => setDarkMode(!darkMode)}
              />
            </aside>
            <main className="mx-6">
              {/* <ChatBot /> */}
              <AboutSec />
              <TraitSec />
              <ProjectSec />
              <CertificateSec />
              <ExperienceSec />
              <TechstackSec />
              <GallerySec />
              <EmailSec />
              <FooterSec />
            </main>
          </>
        )}
      </div>
    </>
  );
}
try {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (e) {
  if (e instanceof Error) {
    console.log(e.message);
  } else {
    console.log("Unknown error:", e);
  }
}
