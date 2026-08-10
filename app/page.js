import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import KeyFeatures from "@/components/KeyFeatures";
import EarnMoney from "@/components/EarnMoney";
import GetStarted from "@/components/GetStarted";
import AppInAction from "@/components/AppInAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0B1225] text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <KeyFeatures />
      <EarnMoney />
      <GetStarted />
      <AppInAction />
      <Footer />
    </main>
  );
}
