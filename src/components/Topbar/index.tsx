import { Link } from "react-router-dom";
import { TbCards } from "react-icons/tb";

import Death from "assets/death.png";
import Fire from "assets/fire.png";
import Land from "assets/land.png";
import Life from "assets/life.png";
import Water from "assets/water.png";
import { PATH } from "consts";

export const TopbarComponent: React.FC = () => {
  return (
    <div className="bg-black-100 desktop:border-b laptop:border-b border-black-300 flex justify-between items-center tablet:flex-col w-full">
      <div className="text-white font-bold text-xl flex items-center tablet:flex-col tablet:w-full">
        <Link
          to={PATH.DASHBOARD}
          className={`tablet:w-full px-8 py-5 hover:bg-black-300 desktop:border-r laptop:border-r tablet:border-b border-black-300 flex items-center gap-1`}
        >
          Search Card <TbCards />
        </Link>
        <Link
          to={PATH.MYCARD}
          className="tablet:w-full px-8 py-5 hover:bg-black-300 desktop:border-r laptop:border-r tablet:border-b border-black-300 flex items-center gap-1"
          data-cy="my-card-btn"
        >
          My Card <TbCards />
        </Link>
      </div>
      <div className="flex gap-2 pr-5 tablet:hidden">
        <img src={Land} alt="land" width={36} />
        <img src={Water} alt="water" width={36} />
        <img src={Death} alt="death" width={36} />
        <img src={Fire} alt="fire" width={36} />
        <img src={Life} alt="life" width={36} />
      </div>
    </div>
  );
};
