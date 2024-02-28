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
  set: string[];
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
  set,
  query,
  addQuery,
  removeQuery,
  setCardCondition,
  onSubmit,
}) => {
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardCondition({ key: "name", value: e.target.value });
  };
  return (
    <div className="bg-black-100 w-80 border-r border-black-300 tablet:fixed tablet:-left-75 tablet:z-10 hover:left-0 transition-all duration-150">
      <div className="">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex flex-col overflow-auto h-navbar p-2 gap-2">
        <SearchInput
          name="name"
          placeholder="Name"
          value={query.name}
          onChange={onNameChange}
        />
        <Select
          data={set}
          label="Sets:"
          name="set"
          select={query.set}
          addQuery={addQuery}
          removeQuery={removeQuery}
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
          data-cy="search-btn"
          className="hover:text-white hover:bg-blue-600 py-1 rounded-sm bg-blue-500 text-white transition flex items-center justify-center gap-1"
          onClick={onSubmit}
        >
          Search
          <LiaSearchSolid />
        </button>
      </div>
    </div>
  );
};
