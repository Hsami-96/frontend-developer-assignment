import React from "react";
import { useRecipents } from "./hooks/useRecipients";
import { AvailableCard } from "./AvailableRecipents";
import { SelectedCard } from "./SelectedRecipents";

export const Recipients = () => {
  const { availableGrouped, selectedGrouped, toggleRecipient, toggleDomain } =
    useRecipents();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

      {/* Main container */}
      <div className="relative w-full max-w-6xl rounded-2xl bg-white shadow-2xl p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Available */}
          <AvailableCard
            availableGrouped={availableGrouped}
            toggleRecipient={toggleRecipient}
            toggleDomain={toggleDomain}
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
