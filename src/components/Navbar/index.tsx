import { LiaSearchSolid } from "react-icons/lia";

import Logo from "assets/logo.png";
import { Select } from "components";
import { SearchInput } from "components/SearchInput";
import { ChangeEvent } from "react";
import { ICardQuery, IQuery, IQueryState } from "types";

interface NavbarProps {
  types: string[];
  subtypes: string[];
  supertypes: string[];
  query: IQueryState;
  addQuery: (condition: IQuery) => void;
  removeQuery: (condition: IQuery) => void;
  setCardCondition: (condition: ICardQuery) => void;
  onSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}

export const NavbarComponent: React.FC<NavbarProps> = ({
  types,
  subtypes,
  supertypes,
  query,
  addQuery,
  removeQuery,
  setCardCondition,
  onSubmit,
}) => {
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardCondition({ key: "name", value: e.target.value });
  };
  const onSetChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardCondition({ key: "set", value: e.target.value });
  };
  return (
    <div className="bg-black-100 w-80 border-r border-black-300 tablet:fixed tablet:-left-75 tablet:z-10 hover:left-0 transition-all duration-150">
      <div className="">
        <img src={Logo} alt="logo" />
      </div>
      <div
        className="flex flex-col overflow-auto h-navbar p-2 gap-2"
      >
        <SearchInput
          name="name"
          placeholder="Name:"
          value={query.name}
          onChange={onNameChange}
        />
        <SearchInput
          name="set"
          placeholder="Set:"
          value={query.set}
          onChange={onSetChange}
        />
        <Select
          data={types}
          label="Types:"
          name="types"
          select={query.types}
          addQuery={addQuery}
          removeQuery={removeQuery}
        />
        <Select
          data={supertypes}
          label="SuperTypes:"
          name="supertypes"
          select={query.supertypes}
          addQuery={addQuery}
          removeQuery={removeQuery}
        />
        <Select
          data={subtypes}
          label="SubTypes:"
          name="subtypes"
          select={query.subtypes}
          addQuery={addQuery}
          removeQuery={removeQuery}
        />
        <button
          data-cy='search-btn'
          className="border border-stone-500 hover:text-black-100 hover:bg-black-300 py-1 rounded-sm bg-black-100 text-white transition flex items-center justify-center gap-1"
          onClick={onSubmit}
        >
          Search
          <LiaSearchSolid />
        </button>
      </div>
    </div>
  );
};
