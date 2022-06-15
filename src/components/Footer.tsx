// components
import FooterSingleCol from "./FooterSingleCol";

const Footer = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-5">
        <FooterSingleCol
          title="Products"
          first="App"
          second="Analytics"
          third="Token List"
          fourth="Defi"
        />
        <FooterSingleCol
          title="Products"
          first="App"
          second="Analytics"
          third="Token List"
          fourth="Defi"
        />
        <FooterSingleCol
          title="Products"
          first="App"
          second="Analytics"
          third="Token List"
          fourth="Defi"
        />
        <FooterSingleCol
          title="Products"
          first="App"
          second="Analytics"
          third="Token List"
          fourth="Defi"
        />
        <FooterSingleCol
          title="Products"
          first="App"
          second="Analytics"
          third="Token List"
          fourth="Defi"
        />
      </div>
    </div>
  );
};

export default Footer;
