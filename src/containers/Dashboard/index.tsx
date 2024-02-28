import { CardComponent } from "components/Card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppActions, AppDispatch, RootState, useAppSelector } from "store";

export const DashboardContainer: React.FC = () => {
  const { cards } = useAppSelector((store: RootState) => store.card);
  const dispatch = useDispatch<AppDispatch>();
  const addCard = (cardName: string) => {
    dispatch(AppActions.card.addCard(cardName));
  };
  useEffect(() => {
    dispatch(AppActions.card.clearCard());
  }, []);
  return (
    <div className="w-full flex flex-wrap overflow-auto h-[calc(100vh-114px)]">
      <div className=" mx-auto grid max-w-6xl grid-cols-2 gap-6 p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => {
          return (
            <CardComponent
              card={card}
              key={index}
              onClick={addCard}
              buttonLabel="+ Add Card"
            />
          );
        })}
      </div>
    </div>
  );
};
