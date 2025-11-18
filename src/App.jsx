import Hero from "./components/Hero";
import ValueProp from "./components/ValueProp";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  const handleCta = () => {
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Hero onPrimaryCta={handleCta} />
      <ValueProp />
      <Features />
      <Benefits />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
