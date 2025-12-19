import { GroupedRecipients } from "../../../types/recipient";
import { DomainRecipients } from "../DomainRecipients";
import { RecipientItem } from "../RecipientItem";

interface SelectedCardProps {
  selectedGrouped: GroupedRecipients;
  toggleRecipient: (email: string) => void;
  toggleDomain: (domain: string) => void;
}
export const SelectedCard = ({
  selectedGrouped,
  toggleRecipient,
  toggleDomain,
}: SelectedCardProps) => {
  return (
    <div className="flex h-[600px] flex-col rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 p-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Selected recipients
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          {Object.entries(selectedGrouped.groupedByDomain).map(
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

          {selectedGrouped.singleRecipients.length > 0 &&
            selectedGrouped.singleRecipients.map((singleRecipent) => (
              <RecipientItem
                key={singleRecipent.email}
                email={singleRecipent.email}
                toggleRecipient={() => toggleRecipient(singleRecipent.email)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
