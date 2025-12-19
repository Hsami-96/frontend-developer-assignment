import React from "react";
import { useRecipents } from "./hooks/useRecipients";

export const Recipients = () => {
  const { groupedByDomain, singleRecipients } = useRecipents();
  return (
    <div data-testid="recipients-container" style={{ padding: "2rem" }}>
      <h2>Recipients</h2>

      {Object.entries(groupedByDomain).map(([domain, recs]) => (
        <div key={domain} style={{ marginBottom: "1rem" }}>
          <h3>{domain}</h3>
          <ul>
            {recs.map((r) => (
              <li key={r.email}>{r.email}</li>
            ))}
          </ul>
        </div>
      ))}

      {singleRecipients.length > 0 && (
        <div>
          <h3>Other Recipients</h3>
          <ul>
            {singleRecipients.map((r) => (
              <li key={r.email}>{r.email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
