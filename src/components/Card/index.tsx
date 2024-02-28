import { ICard } from "types";

import R from "assets/fire.png";
import G from "assets/land.png";
import U from "assets/water.png";
import W from "assets/life.png";
import B from "assets/death.png";
import Brand from "assets/card.png";

interface CardComponentProps {
  card: ICard;
  onClick: (e: string) => void;
  buttonLabel: string;
}

const Symbol = {
  R: <img src={R} alt="R" className="w-4 h-4" />,
  G: <img src={G} alt="G" className="w-4 h-4" />,
  U: <img src={U} alt="U" className="w-4 h-4" />,
  W: <img src={W} alt="W" className="w-4 h-4" />,
  B: <img src={B} alt="B" className="w-4 h-4" />,
};

export const CardComponent: React.FC<CardComponentProps> = ({
  card,
  onClick,
  buttonLabel,
}) => {
  const manaCost = card.manaCost
    ? card.manaCost.substring(1, card.manaCost.length - 1).split("}{")
    : [];
  return (
    <div data-cy={`${card.name}-deck`} className="px-2 py-2 h-max-content flex flex-col w-full cursor-pointer relative transition-all relative bg-white text-black-100">
      <button
        className="opacity-0 bg-black-100 text-white absolute inset-0 flex items-center justify-center hover:opacity-75 transition-opacity p-5"
        data-cy={`${card.name}-card-add-btn`}
        onClick={() => onClick(card.name)}
      >
        {buttonLabel}
      </button>
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between px-3 border-b border-black-600">
          <h4 className="font-extrabold text-xl">{card.name}</h4>
          <div className="flex items-center flex-row-reverse gap-1 w-[50px] ml-[10px]">
            {manaCost.map((symbol: string, index) => {
              if (!isNaN(Number(symbol)))
                return <span key={index}>{symbol}</span>;
              else
                return (
                  <div className="" key={index}>{Symbol[symbol as keyof typeof Symbol]}</div>
                );
            })}
          </div>
        </div>
        <img
          src={Brand}
          alt="card"
          className="w-full border-b border-black-600"
        />
        <div className="flex items-center justify-between border-b border-black-600 px-3 font-bold">
          {card.type}
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-wrap p-3 border-black-600 font-sans">{card.text}</div>
          
        </div>
        <div className="mt-auto">
            <div className="flex items-center justify-between border-y border-black-600 px-3 py-1">
              <span className="bg-blue-500 text-white px-2 rounded-2xl">
                {card.cmc}CMC
              </span>
              <span>
                {card.power}/{card.toughness}
              </span>
            </div>
            <div className="px-3 font-bold">{card.artist}</div>
          </div>
      </div>
      
    </div>
  );
};
