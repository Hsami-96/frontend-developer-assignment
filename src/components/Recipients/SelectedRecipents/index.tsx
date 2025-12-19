import { GroupedRecipients } from "../../../types/recipient";
import { RecipientItem } from "../RecipientItem";

interface SelectedCardProps {
  selectedGrouped: GroupedRecipients;
  toggleSelected: (email: string) => void;
}
export const SelectedCard = ({
  selectedGrouped,
  toggleSelected,
}: SelectedCardProps) => {
  return (
    <div className="flex h-[600px] flex-col rounded-xl border border-slate-200 bg-white">
      {/* Header */}
      <div className="border-b border-slate-200 p-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Selected recipients
        </h3>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          {Object.entries(selectedGrouped.groupedByDomain).map(
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

          {selectedGrouped.singleRecipients.length > 0 &&
            selectedGrouped.singleRecipients.map((singleRecipent) => (
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
