import Features from "./components/Features";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Integrations } from "./components/Integrations";


const Bujeti = () => {
  return (
    <div className="font-dm  bg-[#f7e8d4]">
      <Header />
      <Hero />
      <Features/>
      <Integrations/>
      {/* 
      <UseCases />
      <Reason />
      <FAQ />
      <Trial />
      <Footer /> */}
    </div>
  );
};

export default Bujeti;