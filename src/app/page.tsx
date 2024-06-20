import Contacte from "@/components/common/Contacte";
import Hero from "@/components/common/Hero";
import OurClients from "@/components/common/OurClients";
import OurClientsLogos from "@/components/common/OurClientsLogos";
import Plans from "@/components/common/Plans";
import Projcts from "@/components/common/Projcts";
import Why from "@/components/common/Why";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurClientsLogos />
      <Why />
      <Projcts />
      <OurClients />
      <Plans/>
      <Contacte />
    </div>
  );
}
