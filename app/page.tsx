import Hero from "@/components/Hero";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-100 selection:bg-red-600 selection:text-white">
      <Hero />
      <PortfolioShowcase />
      <ContactFooter />
    </main>
  );
}
