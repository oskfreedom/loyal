import { ChangeEvent, useState } from "react";
import { IKey, IQuery } from "types";

interface SelectProps {
  data: string[];
  label: string;
  name: IKey;
  select: string[];
  addQuery: (condition: IQuery) => void;
  removeQuery: (condition: IQuery) => void;
}

export const Select: React.FC<SelectProps> = ({
  data,
  label,
  name,
  select,
  addQuery,
  removeQuery,
}) => {
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState<string[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (inputValue) {
      const filterValue = data
        .filter((value) =>
          value.toUpperCase().includes(inputValue.toUpperCase())
        )
        .filter((value) => !select.includes(value));
      setFilter(filterValue);
    } else {
      setFilter([]);
    }
  };
  const onFilterClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const content = e.currentTarget.textContent;
    setValue("");
    setFilter([]);
    if (content) addQuery({ key: name, value: content });
  };
  const removeSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const content = e.currentTarget.textContent;
    if (content) removeQuery({ key: name, value: content });
  };
  return (
    <div className="flex flex-col min-h-36 border-stone-500">
      <input
        name={name}
        value={value}
        placeholder={label}
        onChange={handleChange}
        className="text-white focus:outline-none py-1 px-2 placeholder:text-grey-300 bg-black-100 border border-stone-500 hover:bg-black-200 focus:bg-black-100 transition"
      />
      <div className="relative border-x border-b rounded-b-md h-full border-stone-500">
        {filter.length > 0 ? (
          <ul className="border-x border-stone-500 z-10 bg-black-100 text-white overflow-auto absolute right-0 left-0 max-h-80">
            {filter.map((option, index) => (
              <li
                className="border-b border-stone-500 px-2 py-1 hover:bg-black-300"
                key={index}
                onClick={onFilterClick}
              >
                {option}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-wrap gap-1 p-1">
          {select.length > 0
            ? select.map((option, index) => (
                <button
                  className="text-white px-2 py-1 bg-black-300 hover:bg-black-600 rounded-sm transition"
                  key={index}
                  onClick={removeSelect}
                >
                  {option}
                </button>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};
