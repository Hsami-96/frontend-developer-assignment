import { Recipient } from "../../../../types/recipient";

export const toggleRecipent = (
  recipents: Recipient[],
  email: string
): Recipient[] =>
  recipents.map((recipent) =>
    recipent.email === email
      ? { ...recipent, isSelected: !recipent.isSelected }
      : recipent
  );
