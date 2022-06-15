import React from "react";

interface Props {
  title: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
}

const FooterSingleCol: React.FC<Props> = ({
  title,
  first,
  second,
  third,
  fourth,
}) => {
  return (
    <div>
      <h3 className="font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4">
        {title}
      </h3>
      <ul>
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
        <li>{fourth}</li>
      </ul>
    </div>
  );
};

export default FooterSingleCol;
