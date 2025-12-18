import { useState } from "react";
import { Recipient } from "../../../types/recipient";

export const useRecipents = () => {
  const [recipents, setRecipents] = useState<Recipient[]>([]);

  return { recipents };
};
