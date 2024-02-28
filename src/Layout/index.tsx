import { Spin } from "components";
import { NavbarContainer, TopbarContainer } from "containers";
import { StatusbarContainer } from "containers/Statusbar";
import { RootState, useAppSelector } from "store";

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  const { loading } = useAppSelector((store: RootState) => store.load);
  return (
    <main className="w-full h-full flex">
      <NavbarContainer />
      <aside className="w-main h-full tablet:w-full">
        <TopbarContainer />
        <StatusbarContainer />
        {children}
      </aside>
      {loading ? (
        <div className="w-full h-full fixed flex items-center justify-center bg-black-100 bg-opacity-50 backdrop-blur-sm">
          <Spin />
        </div>
      ) : null}
    </main>
  );
};

export const WithLayout = (Component: React.FC) => () => {
  return (
    <LayoutComponent>
      <Component />
    </LayoutComponent>
  );
};
