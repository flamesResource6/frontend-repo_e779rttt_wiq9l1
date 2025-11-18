import { motion } from "framer-motion";
import { Plug, Activity, Rocket, Bot, FileText, Shield } from "lucide-react";

const features = [
  {
    icon: Plug,
    title: "Integrations",
    desc: "Connect your stack in minutes. CRM, dialers, WhatsApp, email and billing with plug‑and‑play connectors.",
  },
  {
    icon: Activity,
    title: "Monitoring",
    desc: "Real-time dashboards across calls, meetings, pipeline and revenue. Spot bottlenecks instantly.",
  },
  {
    icon: Rocket,
    title: "Performance",
    desc: "AI coaching and scorecards that elevate human performance without heavy processes.",
  },
  {
    icon: Bot,
    title: "Automation",
    desc: "Intelligent workflows to prospect, qualify, follow-up and book meetings at scale.",
  },
  {
    icon: FileText,
    title: "Contracts",
    desc: "Templates, e-signature and tracking to close deals faster and error‑free.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    desc: "Enterprise-grade encryption, role-based access and full audit trails. 100% secure.",
  },
];

function Features() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to sell at the highest level</h3>
          <p className="mt-3 text-white/70">Clarity of data, fast execution, and deep integrations — in one place.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-white/20"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold">{title}</h4>
              <p className="mt-2 text-sm text-white/75">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
