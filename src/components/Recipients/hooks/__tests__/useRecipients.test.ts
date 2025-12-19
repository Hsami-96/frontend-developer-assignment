import { renderHook } from "@testing-library/react";
import { useRecipents } from "../useRecipients";
import { SeedRecipents } from "../../../../utils/recipients/SeedRecipents";

describe("useRecipents hook", () => {
  it("should load recipents from SeedRecipents", () => {
    const { result } = renderHook(() => useRecipents());

    const seededRecipents = SeedRecipents();

    expect(result.current.recipents).toEqual(seededRecipents);
  });

  it("should correctly group recipients by domain", () => {
    const { result } = renderHook(() => useRecipents());

    const { groupedByDomain, singleRecipients } = result.current;
    console.log(groupedByDomain);

    const totalCount =
      Object.values(groupedByDomain).flat().length + singleRecipients.length;
    expect(totalCount).toBe(result.current.recipents.length);
  });
});
