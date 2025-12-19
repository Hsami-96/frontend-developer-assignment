import { renderHook } from "@testing-library/react";
import { useRecipents } from "../useRecipients";
import { SeedRecipents } from "../../../../utils/recipients/SeedRecipents";

describe("useRecipents hook", () => {
  it("returns available recipents grouped by domain", () => {
    const { result } = renderHook(() => useRecipents());

    const seededRecipents = SeedRecipents();
    const availableCount =
      Object.values(result.current.availableGrouped.groupedByDomain).flat()
        .length + result.current.availableGrouped.singleRecipients.length;

    const expectedAvailable = seededRecipents.filter(
      (recipent) => !recipent.isSelected
    ).length;
    expect(availableCount).toEqual(expectedAvailable);
  });

  it("returns selected recipents grouped by domain", () => {
    const { result } = renderHook(() => useRecipents());

    const selectedCount =
      Object.values(result.current.selectedGrouped.groupedByDomain).flat()
        .length + result.current.selectedGrouped.singleRecipients.length;

    const expectedSelected = SeedRecipents().filter((recipent) => recipent.isSelected).length;
    console.log("*** selected: ", selectedCount);
    console.log("*** expected: ", expectedSelected);
    expect(selectedCount).toBe(expectedSelected);
  });
});
