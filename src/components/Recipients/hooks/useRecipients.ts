import { useMemo, useState } from "react";
import { GroupedRecipients, Recipient } from "../../../types/recipient";
import { SeedRecipents } from "../../../utils/recipients/SeedRecipents";
import { toggleRecipent } from "./logic/toggleRecipient";
import { groupByDomain } from "./logic/groupByDomain";

export const useRecipents = () => {
  const [recipents, setRecipents] = useState<Recipient[]>(() =>
    SeedRecipents()
  );

  const availableRecipients = recipents.filter(
    (recipent) => !recipent.isSelected
  );
  const selectedRecipients = recipents.filter(
    (recipent) => recipent.isSelected
  );

  const availableGrouped: GroupedRecipients = useMemo(
    () => groupByDomain(availableRecipients),
    [availableRecipients]
  );

  const selectedGrouped: GroupedRecipients = useMemo(
    () => groupByDomain(selectedRecipients),
    [selectedRecipients]
  );

  const toggleSelected = (email: string) => {
    setRecipents((prev) => toggleRecipent(prev, email));
  };

  return { availableGrouped, selectedGrouped, toggleSelected };
};
