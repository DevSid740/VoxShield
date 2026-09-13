import { LiquidButton, SiteNav } from "./PageVisuals.jsx";

function Diagram({ type }) {
  if (type === "wave") return <svg viewBox="0 0 600 100" className="h-24 w-full rounded-xl bg-black/40 p-4"><path d="M0 50 C30 10 45 90 75 50 S120 10 150 50 S195 90 225 50 S270 10 300 50 S345 90 375 50 S420 10 450 50 S495 90 525 50 S570 10 600 50" fill="none" stroke="#67e8f9" strokeWidth="3" /></svg>;
  if (type === "mfcc") return <div className="grid grid-cols-12 gap-1 rounded-xl bg-black/40 p-4">{Array.from({ length: 72 }, (_, i) => <span key={i} className="h-2 rounded-sm bg-gradient-to-r from-blue-400 to-fuchsia-400" style={{ opacity: 0.25 + ((i * 7) % 8) / 10 }} />)}</div>;
  if (type === "forest") return <div className="flex h-24 items-end justify-center gap-5 rounded-xl bg-black/40 p-4">{["h-14 w-10", "h-20 w-8", "h-16 w-12", "h-12 w-9"].map((size) => <div key={size} className={`${size} border border-emerald-300/70 bg-emerald-400/10`} />)}</div>;
  return <div className="flex h-24 items-center justify-center rounded-xl bg-black/40"><span className="rounded-full border border-emerald-300/50 bg-emerald-400/10 px-5 py-3 text-sm text-emerald-300">REAL · 94% confidence</span></div>;
}

export default function HowItWorksPage({ onBack, onNavigate }) {
  const stages = [
    ["01", "Capture a voice sample", "Use the Test Now page to record a short microphone sample or upload an MP3, WAV, M4A, or WEBM file.", "wave"],
    ["02", "Convert audio to data", "The sound is represented as a digital waveform: a sequence of measurable amplitude values that the model can process.", "wave"],
    ["03", "Extract MFCC features", "Mel-Frequency Cepstral Coefficients summarize the frequency characteristics of speech and turn the waveform into a compact feature set.", "mfcc"],
    ["04", "Run the classifier", "A trained Random Forest model receives the MFCC features and compares them with patterns learned from real and synthetic voices.", "forest"],
    ["05", "Return the detection", "The future backend returns REAL or FAKE with a confidence percentage. The current Analyze button shows a frontend placeholder.", "result"],
  ];
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <SiteNav onNavigate={onNavigate} onBack={onBack} />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-32 md:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">VoxShield documentation</p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl md:text-8xl">How it works</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-white/60">VoxShield listens to a short voice sample and classifies it as human or AI-generated. Here is the complete path from audio input to model confidence.</p>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Input", "Live microphone or uploaded audio", "The same flow supports both demo inputs."],
            ["Model", "MFCC + Random Forest", "Features are extracted before classification."],
            ["Output", "REAL or FAKE + confidence", "The backend will provide the final prediction."],
          ].map(([title, value, copy]) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><p className="text-xs uppercase tracking-[0.25em] text-white/35">{title}</p><h2 className="mt-4 font-display text-2xl">{value}</h2><p className="mt-3 text-sm leading-6 text-white/50">{copy}</p></article>)}
        </section>

        <section className="mt-16 space-y-5">
          {stages.map(([number, title, copy, type]) => <article key={number} className="grid gap-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[100px_1fr] md:p-8"><div><span className="font-display text-4xl text-white/25">{number}</span><div className="mt-3 h-px w-12 bg-emerald-300/50" /></div><div><h2 className="font-display text-2xl md:text-3xl">{title}</h2><p className="mt-3 max-w-3xl text-sm leading-6 text-white/55">{copy}</p><div className="mt-6"><Diagram type={type} /></div></div></article>)}
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><h2 className="font-display text-2xl">Training data</h2><p className="mt-3 text-sm leading-6 text-white/55">The model uses real voice samples from the IndieFake Dataset and team-collected samples, plus synthetic Indian-accented English and Hindi voices generated with Microsoft Edge text-to-speech. The classes are balanced before training to reduce bias toward the majority class.</p></article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><h2 className="font-display text-2xl">Current and future scope</h2><p className="mt-3 text-sm leading-6 text-white/55">The current frontend demonstrates recording, upload, waveform feedback, and the future analysis interaction. Backend work will connect Flask, librosa, joblib, and the trained model to return live predictions. Phone/VoIP integration, alerts, and call blocking remain future work.</p></article>
        </section>
        <div className="mt-12 flex justify-center"><LiquidButton onClick={() => onNavigate("test")}>Try Now <span aria-hidden="true">→</span></LiquidButton></div>
      </main>
    </div>
  );
}
