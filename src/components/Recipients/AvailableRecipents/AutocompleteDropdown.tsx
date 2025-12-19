import { Recipient } from "../../../types/recipient";
import { isEmailValid } from "../hooks/logic/isEmailValid";

type AutocompleteDropdownProps = {
  search: string;
  suggestions: Recipient[];
  onSelect: (email: string) => void;
  onAdd: (email: string) => void;
};

export const AutocompleteDropdown = ({
  onAdd,
  onSelect,
  search,
  suggestions,
}: AutocompleteDropdownProps) => {
  if (!search) return null;
  const canAdd = suggestions.length === 0 && isEmailValid(search);

  return (
    <div className="absolute z-10 mt-2 w-full rounded-lg border border-slate-200 bg-white shadow-md">
      {suggestions.map((recipient) => (
        <button
          key={recipient.email}
          onClick={() => onSelect(recipient.email)}
          className="block w-full px-4 py-2 text-left text-sm hover:bg-slate-100"
        >
          {recipient.email}
        </button>
      ))}

      {canAdd && (
        <button
          onClick={() => onAdd(search)}
          className="block w-full px-4 py-2 text-left text-sm font-medium text-indigo-600 hover:bg-slate-50"
        >
          Add “{search}”
        </button>
      )}
    </div>
  );
};
