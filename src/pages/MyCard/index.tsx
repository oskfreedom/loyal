import { WithLayout } from "layout";
import { MyCardContainer } from "containers";

const MyCard: React.FC = () => {
  return <MyCardContainer />;
};

export const MyCardPage = WithLayout(MyCard);
