import { ChangeEvent } from "react";

interface SearchInputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      data-cy="search-input"
      name={name}
      className="focus:outline-none bg-black-100 border border-stone-500 px-2 py-1 rounded-sm placeholder:text-grey-100 text-white hover:bg-black-200 transition"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
