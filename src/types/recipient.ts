export type Recipient = {
  email: string;
  domain: string;
  isSelected: boolean;
};

export type GroupedRecipients = {
  groupedByDomain: Record<string, Recipient[]>;
  singleRecipients: Recipient[];
};
