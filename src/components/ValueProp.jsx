import { motion } from "framer-motion";

function ValueProp() {
  return (
    <section className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            More than a platform: a full elite sales team, trained to think like the owner
          </h2>
          <p className="mt-4 max-w-3xl text-white/80">
            Sales Squad combines AI precision with human intuition. Configure roles, playbooks and automations in minutes. Your team executes with consistency while you focus on growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ValueProp;
