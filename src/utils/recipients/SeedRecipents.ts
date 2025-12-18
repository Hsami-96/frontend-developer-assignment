import recipents from "../../assets/recipientsData.json";
import { Recipient } from "../../types/recipient";

export const SeedRecipents = (): Recipient[] => {
  return recipents.map((recipent) => {
    const email = recipent.email;
    const domain = email.split("@")[1];
    const isSelected = recipent.isSelected;
    return {
      email,
      domain,
      isSelected,
    };
  });
};
