// icons
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

// components
import Card from "./Card";

const About = () => {
  return (
    <div className="w-full bg-black text-white text-center">
      <div className="max-2-[1240px] mx-auto px-4 py-16">
        <h1 className="py-4">A Growing Protocol Ecosystem</h1>
        <p className="py-4 text-xl">
          The Defi protocol system empowers developers, liquidity providers and
          traders to participate in a financial marketplace that is open and
          accesible to all.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            icon={<SiHiveBlockchain size={40} />}
            title="Reliable, tamper-proof network"
            description="Use decentralation, trusted node, premium data and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract."
          />
          <Card
            icon={<SiFsecure size={40} />}
            title="Seamless connection to any API"
            description="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."
          />
          <Card
            icon={<SiStrapi size={40} />}
            title="Proven, ready-made solutions"
            description="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
          />
          <Card
            icon={<VscServerProcess size={40} />}
            title="Secure off-chain computation"
            description="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
