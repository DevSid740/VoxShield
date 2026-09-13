import { useState } from "react";
import { LiquidButton, SiteNav, WebGLShader } from "./PageVisuals.jsx";
import TestNowPage from "./TestNowPage.jsx";
import HowItWorksPage from "./HowItWorksPage.jsx";

export default function LandingPage() {
  const [page, setPage] = useState("landing");
  if (page === "test") return <TestNowPage onNavigate={setPage} onBack={() => setPage("landing")} />;
  if (page === "how") return <HowItWorksPage onNavigate={setPage} onBack={() => setPage("landing")} />;

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <SiteNav onNavigate={setPage} />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <WebGLShader />
        <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/0.50 backdrop-blur-md p-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.3)]">
          <main className="relative overflow-hidden rounded-[1.25rem] border border-white/15 bg-white/[0.03] py-10">
            <h1 className="font-display mb-3 text-center text-7xl text-white md:text-[clamp(2rem,8vw,7rem)]">Secure your Connection</h1>
            <p className="px-6 text-center text-xs text-white/60 md:text-sm lg:text-lg">Voxshield listens for what a human ear can&apos;t catch - flagging AI-generated and cloned voices on your calls the moment they happen.</p>
            <div className="my-8 flex items-center justify-center gap-1"><span className="relative flex h-3 w-3 items-center justify-center"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" /></span><p className="text-xs text-green-500">Live detection active</p></div>
            <div className="flex justify-center"><LiquidButton onClick={() => setPage("test")} className="border-white/10">Test Now<svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true"><path fill="currentColor" d="M12.943 3.463A.748.748 0 0012.25 3h-5.5a.75.75 0 000 1.5h3.69l-7.22 7.22a.75.75 0 101.06 1.06l7.22-7.22v3.69a.75.75 0 001.5 0v-5.5a.747.747 0 00-.057-.287z" /></svg></LiquidButton></div>
          </main>
        </div>
      </div>
    </div>
  );
}
