import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { RecipientItem } from "../RecipientItem";
import { Recipient } from "../../../types/recipient";

type DomainRecipientsProps = {
  domain: string;
  recipients: Recipient[];
  toggleRecipient: (email: string) => void;
  toggleDomain: (domain: string) => void;
};

export const DomainRecipients = ({
  domain,
  recipients,
  toggleRecipient,
  toggleDomain,
}: DomainRecipientsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-1"
        >
          <FontAwesomeIcon
            icon={isOpen ? faCircleChevronDown : faCircleChevronRight}
          />
        </button>

        <button
          type="button"
          onClick={() => toggleDomain(domain)}
          className="font-medium text-slate-800 hover:underline"
        >
          {domain}
        </button>
      </div>

      {isOpen && (
        <div className="pl-6 space-y-1">
          {recipients.map((recipient) => (
            <RecipientItem
              key={recipient.email}
              email={recipient.email}
              toggleRecipient={() => toggleRecipient(recipient.email)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
