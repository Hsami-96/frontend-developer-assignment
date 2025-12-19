interface RecipientItemProps {
  email: string;
  toggleRecipient: () => void;
}

export const RecipientItem = ({
  email,
  toggleRecipient,
}: RecipientItemProps) => {
  return (
    <button
      className="w-full rounded-md px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 transition"
      onClick={toggleRecipient}
    >
      {email}
    </button>
  );
};
