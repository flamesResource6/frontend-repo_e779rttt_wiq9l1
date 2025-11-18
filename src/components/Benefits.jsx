import { motion } from "framer-motion";

const benefits = [
  { title: "Accessibility", desc: "Simple, friendly and designed for speed. Onboard your team with zero friction." },
  { title: "Speed", desc: "Automations and AI assistants to move from lead to revenue faster." },
  { title: "System", desc: "Clear process, repeatable playbooks and reliable execution across the funnel." },
  { title: "Clarity", desc: "Metrics that are easy to understand and act on. No noise, just signals." },
];

function Benefits() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why teams choose Sales Squad</h3>
          <p className="mt-3 text-white/70">Built for growth, freedom and results.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6"
            >
              <h4 className="text-lg font-semibold">{b.title}</h4>
              <p className="mt-2 text-sm text-white/75">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
