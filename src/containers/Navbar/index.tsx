import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppActions, AppDispatch, RootState, useAppSelector } from "store";

import { NavbarComponent } from "components";
import { ICardQuery, IQuery, IQueryState } from "types";

export const NavbarContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { types, subtypes, supertypes, set } = useAppSelector(
    (store: RootState) => store.card
  );
  useEffect(() => {
    if (types.length === 0) dispatch(AppActions.card.getTypesRequest());
    if (subtypes.length === 0) dispatch(AppActions.card.getSubtypesRequest());
    if (supertypes.length === 0)
      dispatch(AppActions.card.getSupertypesRequest());
    if (set.length === 0)
      dispatch(AppActions.card.getSetRequest());
  }, []);
  const [query, setQuery] = useState<IQueryState>({
    types: [],
    supertypes: [],
    subtypes: [],
    name: "",
    set: [],
  });
  const addQuery = (condition: IQuery) => {
    setQuery({
      ...query,
      [condition.key]: [...query[condition.key], condition.value],
    });
  };
  const removeQuery = (condition: IQuery) => {
    setQuery({
      ...query,
      [condition.key]: query[condition.key].filter(
        (value) => value !== condition.value
      ),
    });
  };
  const setCardCondition = (condition: ICardQuery) => {
    setQuery({
      ...query,
      [condition.key]: condition.value,
    });
  };
  const queryBuilder = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const condition = [];
    query.name && condition.push(`name=${query.name}`);
    query.set.length > 0 && condition.push(`setName=${query.set.join("|")}`);
    query.types.length > 0 && condition.push(`types=${query.types.join("|")}`);
    query.subtypes.length > 0 &&
      condition.push(`subtypes=${query.subtypes.join("|")}`);
    query.supertypes.length > 0 &&
      condition.push(`supertypes=${query.supertypes.join("|")}`);
    dispatch(AppActions.card.getCardRequest(condition.join("&")));
  };
  return (
    <NavbarComponent
      types={types}
      set={set}
      subtypes={subtypes}
      supertypes={supertypes}
      query={query}
      addQuery={addQuery}
      removeQuery={removeQuery}
      setCardCondition={setCardCondition}
      onSubmit={queryBuilder}
    />
  );
};
