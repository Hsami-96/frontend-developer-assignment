import React from "react";
import { useRecipents } from "./hooks/useRecipients";

export const Recipients = () => {
  const { availableGrouped, selectedGrouped, toggleSelected } = useRecipents();

  return (
    <div
      data-testid="recipients-container"
      style={{ padding: "2rem", display: "flex", gap: "3rem" }}
    >
      <section style={{ flex: 1 }}>
        <h3>Available Recipients</h3>

        {Object.entries(availableGrouped.groupedByDomain).map(
          ([domain, recipients]) => (
            <div key={domain} style={{ marginBottom: "1rem" }}>
              <h4>{domain}</h4>
              <ul>
                {recipients.map((recipient) => (
                  <li key={recipient.email}>
                    <button onClick={() => toggleSelected(recipient.email)}>
                      {recipient.email}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}

        {availableGrouped.singleRecipients.length > 0 && (
          <ul>
            {availableGrouped.singleRecipients.map((recipient) => (
              <li key={recipient.email}>
                <button onClick={() => toggleSelected(recipient.email)}>
                  {recipient.email}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section style={{ flex: 1 }}>
        <h3>Selected Recipients</h3>

        {Object.entries(selectedGrouped.groupedByDomain).map(
          ([domain, recipients]) => (
            <div key={domain} style={{ marginBottom: "1rem" }}>
              <h4>{domain}</h4>
              <ul>
                {recipients.map((recipient) => (
                  <li key={recipient.email}>
                    <button onClick={() => toggleSelected(recipient.email)}>
                      {recipient.email}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}

        {selectedGrouped.singleRecipients.length > 0 && (
          <ul>
            {selectedGrouped.singleRecipients.map((recipient) => (
              <li key={recipient.email}>
                <button onClick={() => toggleSelected(recipient.email)}>
                  {recipient.email}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};
