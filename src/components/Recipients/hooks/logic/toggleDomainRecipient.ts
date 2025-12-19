import { Recipient } from "../../../../types/recipient";

export const toggleDomainRecipent = (
  recipents: Recipient[],
  domain: string
): Recipient[] => {
  const domainRecipient = recipents.filter(
    (recipent) => recipent.domain === domain
  );

  const allSelectedRecipentsFromDomain = domainRecipient.every(
    (recipent) => recipent.isSelected
  );
  console.log("toggle domain called?");
  const recipentsToReturn = recipents.map((recipent) => {
    if (recipent.domain === domain) {
      return { ...recipent, isSelected: !allSelectedRecipentsFromDomain };
    }
    return recipent;
  });

  return recipentsToReturn;
};
