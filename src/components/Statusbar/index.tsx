interface StatusProps {
  amount: number;
  avgCMC: number;
}

export const StatusbarComponent: React.FC<StatusProps> = ({
  amount,
  avgCMC,
}) => {
  return (
    <div className="bg-black-100 px-5 py-2 border-b border-black-300 flex flex-wrap justify-between items-center">
      <h1 className="text-white font-bold text-xl" >
        Card Amount: <span data-cy="card-amount">{amount}</span> (min: 20, max: 30)
      </h1>
      <h1 className="text-white font-bold text-xl">
        Average ManaCost: <span data-cy="average-mana-cost">{ avgCMC && avgCMC.toFixed(2)}</span> (cmc)
      </h1>
    </div>
  );
};
