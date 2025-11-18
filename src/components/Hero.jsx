import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

function Hero({ onPrimaryCta }) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-slate-950 text-white">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-400/10 to-amber-400/10 blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 pt-24 text-center md:px-10 md:pt-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Built for the Entrepreneur
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          The best sales team in Brazil
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
          Using AI to revolutionize sales and elevate human performance. Configure your sales team in a few clicks. Monitor, analyze and optimize in real time.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="flex flex-wrap items-center justify-center gap-4">
          <button onClick={onPrimaryCta} className="group inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:bg-indigo-600">
            Start now
            <svg className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            Test the beta
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }} className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <span>100% secure</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
          <span>Easy to understand metrics</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
          <span>Plug-and-play integrations</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
          <span>AI + human hybrid</span>
        </motion.div>
      </div>

      {/* Spline animation area */}
      <div className="pointer-events-auto absolute inset-x-0 bottom-0 top-1/3">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to ensure text readability, non-blocking pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
    </section>
  );
}

export default Hero;
