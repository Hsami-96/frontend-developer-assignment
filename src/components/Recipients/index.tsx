import { AvailableCard } from "./AvailableRecipents";
import { useRecipents } from "./hooks/useRecipients";
import { SelectedCard } from "./SelectedRecipents";

export const Recipients = () => {
  const {
    availableGrouped,
    selectedGrouped,
    toggleRecipient,
    toggleDomain,
    search,
    setSearch,
    addRecipent,
    suggestions,
  } = useRecipents();

  return (
    <div
      className="min-h-screen bg-slate-100 flex items-center justify-center recipients-container"
      data-testid="recipients-container"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

      <div className="relative w-full max-w-6xl rounded-2xl bg-white shadow-2xl p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Available */}
          <AvailableCard
            availableGrouped={availableGrouped}
            toggleRecipient={toggleRecipient}
            toggleDomain={toggleDomain}
            search={search}
            setSearch={setSearch}
            addRecipient={addRecipent}
            suggestions={suggestions}
          />

          {/* Selected */}
          <SelectedCard
            selectedGrouped={selectedGrouped}
            toggleRecipient={toggleRecipient}
            toggleDomain={toggleDomain}
          />
        </div>
      </div>
    </div>
  );
};
