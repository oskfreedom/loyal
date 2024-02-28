import { StatusbarComponent } from "components";
import { RootState, useAppSelector } from "store";

export const StatusbarContainer: React.FC = () => {
  const { myCard, avgCMC } = useAppSelector((store: RootState) => store.card);
  return <StatusbarComponent amount={myCard.length} avgCMC={avgCMC} />;
};
