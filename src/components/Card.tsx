import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col border text-left rounded-2xl py-12 px-8">
      <div>
        <div className="bg-[#00d8ff] inline-flex p-2 rounded-full">{icon}</div>
        <h3 className="text-xl font-bold py-4">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
