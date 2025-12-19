import { useMemo, useState } from "react";
import { GroupedRecipients, Recipient } from "../../../types/recipient";
import { SeedRecipents } from "../../../utils/recipients/SeedRecipents";
import { toggleRecipent } from "./logic/toggleRecipient";
import { groupByDomain } from "./logic/groupByDomain";
import { toggleDomainRecipent } from "./logic/toggleDomainRecipient";
import { isEmailValid } from "./logic/isEmailValid";

export const useRecipents = () => {
  const [recipents, setRecipents] = useState<Recipient[]>(() =>
    SeedRecipents()
  );
  const [search, setSearch] = useState("");

  const availableRecipients = recipents.filter(
    (recipent) => !recipent.isSelected
  );
  const selectedRecipients = recipents.filter(
    (recipent) => recipent.isSelected
  );

  const filteredAvailable = useMemo(() => {
    if (!search.trim()) return availableRecipients;

    const query = search.toLowerCase();

    return availableRecipients.filter(
      (recipient) =>
        recipient.email.toLowerCase().includes(query) ||
        recipient.domain.includes(query)
    );
  }, [availableRecipients, search]);

  const suggestions = useMemo(() => {
    if (!search.trim()) return [];

    const query = search.toLowerCase();

    return availableRecipients.filter((recipent) =>
      recipent.email.toLowerCase().includes(query)
    );
  }, [availableRecipients, search]);

  const availableGrouped: GroupedRecipients = useMemo(
    () => groupByDomain(filteredAvailable),
    [filteredAvailable]
  );

  const selectedGrouped: GroupedRecipients = useMemo(
    () => groupByDomain(selectedRecipients),
    [selectedRecipients]
  );

  const toggleRecipient = (email: string) => {
    console.log("*** email ", email);
    setRecipents((prev) => toggleRecipent(prev, email));
  };

  const toggleDomain = (domain: string) => {
    setRecipents((prev) => toggleDomainRecipent(prev, domain));
  };

  const addRecipent = (email: string) => {
    if (!isEmailValid(email)) return [];

    const emailExists = recipents.some(
      (recipent) => recipent.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) return;

    const domain = email.split("@")[1];

    setRecipents((prev) => [
      ...prev,
      {
        email,
        domain,
        isSelected: false,
      },
    ]);
  };

  return {
    availableGrouped,
    selectedGrouped,
    toggleRecipient,
    toggleDomain,
    search,
    setSearch,
    addRecipent,
    suggestions,
  };
};
