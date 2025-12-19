import { GroupedRecipients } from "../../../types/recipient";
import { RecipientItem } from "../RecipientItem";
interface AvailableCardProps {
  availableGrouped: GroupedRecipients;
  toggleSelected: (email: string) => void;
}
export const AvailableCard = ({
  availableGrouped,
  toggleSelected,
}: AvailableCardProps) => {
  console.log(availableGrouped);
  return (
    <div className="flex h-[600px] flex-col rounded-xl border border-slate-200 bg-white">
      {/* Header */}
      <div className="border-b border-slate-200 p-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Available recipients
        </h3>

        {/* Search */}
        <div className="relative mt-3">
          <input
            placeholder="Search"
            className="w-full rounded-full border border-slate-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Domain group */}
        <div>
          {Object.entries(availableGrouped.groupedByDomain).map(
            ([domain, recipients]) => (
              <div key={domain} style={{ marginBottom: "1rem" }}>
                <button className="flex w-full items-center gap-2 text-left font-medium text-slate-800">
                  <span className="rotate-90">▶</span>
                  {domain}
                </button>
                <div className="mt-2 space-y-1 pl-6">
                  {recipients.map((recipient) => (
                    <RecipientItem
                      key={recipient.email}
                      email={recipient.email}
                      toggleSelected={() => toggleSelected(recipient.email)}
                    />
                  ))}
                </div>
              </div>
            )
          )}

          {availableGrouped.singleRecipients.length > 0 &&
            availableGrouped.singleRecipients.map((singleRecipent) => (
              <RecipientItem
                key={singleRecipent.email}
                email={singleRecipent.email}
                toggleSelected={() => toggleSelected(singleRecipent.email)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
