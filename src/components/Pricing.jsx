import { motion } from "framer-motion";

const tiers = [
  {
    name: "Basic",
    price: "R$ 590",
    period: "/mês",
    features: ["Core dashboards", "Email + WhatsApp integration", "Playbooks library", "Basic automations"],
    highlight: false,
  },
  {
    name: "Advanced",
    price: "R$ 1.490",
    period: "/mês",
    features: ["All Basic features", "Dialer + CRM integrations", "AI coaching", "Advanced automations"],
    highlight: true,
  },
  {
    name: "Expert",
    price: "Personalizado",
    period: "",
    features: ["Custom setup", "Dedicated success", "Security reviews", "Priority support"],
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Plans that scale with you</h3>
          <p className="mt-3 text-white/70">Start small, grow fast. Switch or cancel anytime.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative rounded-2xl border ${t.highlight ? "border-indigo-500/50 bg-indigo-500/10" : "border-white/10 bg-white/5"} p-6`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
              )}
              <h4 className="text-xl font-semibold">{t.name}</h4>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold">{t.price}</span>
                <span className="text-sm text-white/70">{t.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="mt-1 h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold transition ${t.highlight ? "bg-indigo-500 text-white hover:bg-indigo-600" : "bg-white/10 text-white hover:bg-white/15"}`}>
                Choose {t.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
