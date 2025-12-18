import { renderHook } from "@testing-library/react";
import { useRecipents } from "../useRecipients";
import { SeedRecipents } from "../../../../utils/recipients/SeedRecipents";

describe("useRecipents hook", () => {
  it("should load recipents from SeedRecipents", () => {
    const { result } = renderHook(() => useRecipents());

    const seededRecipents = SeedRecipents();

    expect(result.current.recipents).toEqual(seededRecipents);
  });
});
