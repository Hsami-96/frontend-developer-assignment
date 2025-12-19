import { GroupedRecipients, Recipient } from "../../../types/recipient";
import { DomainRecipients } from "../DomainRecipients";
import { RecipientItem } from "../RecipientItem";
import { AutocompleteDropdown } from "./AutocompleteDropdown";

interface AvailableCardProps {
  availableGrouped: GroupedRecipients;
  toggleRecipient: (email: string) => void;
  toggleDomain: (domain: string) => void;
  search: string;
  setSearch: (value: string) => void;
  addRecipient: (email: string) => any[];
  suggestions: Recipient[];
}
export const AvailableCard = ({
  availableGrouped,
  toggleRecipient,
  toggleDomain,
  search,
  setSearch,
  addRecipient,
  suggestions,
}: AvailableCardProps) => {
  console.log(availableGrouped);
  return (
    <div className="flex h-[600px] flex-col rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 p-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Available recipients
        </h3>

        {/* Search */}
        <div className="relative mt-3">
          <input
            placeholder="Search"
            className="w-full rounded-full border border-slate-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <AutocompleteDropdown
            search={search}
            suggestions={suggestions}
            onSelect={(email) => {
              toggleRecipient(email);
              setSearch("");
            }}
            onAdd={(email) => {
              addRecipient(email);
              setSearch("");
            }}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          {Object.entries(availableGrouped.groupedByDomain).map(
            ([domain, recipients]) => (
              <DomainRecipients
                key={domain}
                domain={domain}
                recipients={recipients}
                toggleRecipient={toggleRecipient}
                toggleDomain={toggleDomain}
              />
            )
          )}

          {availableGrouped.singleRecipients.length > 0 &&
            availableGrouped.singleRecipients.map((singleRecipent) => (
              <RecipientItem
                key={singleRecipent.email}
                email={singleRecipent.email}
                toggleRecipient={() => toggleRecipient(singleRecipent.email)}
              />
            ))}

          {Object.keys(availableGrouped.groupedByDomain).length === 0 &&
            availableGrouped.singleRecipients.length === 0 && (
              <p className="text-sm text-slate-500">No recipients found</p>
            )}
        </div>
      </div>
    </div>
  );
};
