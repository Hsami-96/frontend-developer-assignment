import { useMemo, useState } from "react";
import { Recipient } from "../../../types/recipient";
import { SeedRecipents } from "../../../utils/recipients/SeedRecipents";

export const useRecipents = () => {
  const [recipents] = useState<Recipient[]>(() => SeedRecipents());

  const { groupedByDomain, singleRecipients } = useMemo(() => {
    const mappedRecipents: Record<string, Recipient[]> = {};
    for (const r of recipents) {
      mappedRecipents[r.domain] ??= [];
      mappedRecipents[r.domain].push(r);
    }

    const groupedByDomain: Record<string, Recipient[]> = {};
    const singleRecipients: Recipient[] = [];

    for (const [domain, domainRecipents] of Object.entries(mappedRecipents)) {
      if (domainRecipents.length > 1) {
        groupedByDomain[domain] = domainRecipents;
      } else {
        singleRecipients.push(domainRecipents[0]);
      }
    }
    return { groupedByDomain, singleRecipients };
  }, [recipents]);

  return { recipents, groupedByDomain, singleRecipients };
};
