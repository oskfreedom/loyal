import { CardComponent } from "components/Card";
import { useDispatch } from "react-redux";
import { AppActions, AppDispatch, RootState, useAppSelector } from "store";

export const MyCardContainer: React.FC = () => {
  const { myCard } = useAppSelector((store: RootState) => store.card);
  const dispatch = useDispatch<AppDispatch>();
  const removeCard = (cardName: string) => {
    dispatch(AppActions.card.removeCard(cardName));
  };
  return (
    <div className="w-full flex flex-wrap overflow-auto justify-center p-5 gap-5">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {myCard.map((card, index) => (
        <CardComponent
          card={card}
          key={index}
          onClick={removeCard}
          buttonLabel="Remove Card"
        />
      ))}
      </div>
    </div>
  );
};
