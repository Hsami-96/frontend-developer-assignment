import { SeedRecipents } from "./SeedRecipents";

jest.mock("../../assets/recipientsData.json", () => ({
  recipents: [
    {
      email: "john@example.com",
      isSelected: true,
    },
    {
      email: "mike@test.io",
      isSelected: false,
    },
  ],
}));

describe("SeedReciepents", () => {
  it("maps recipients and derives domain correctly", () => {
    const result = SeedRecipents();

    expect(result).toEqual([
      {
        email: "john@example.com",
        domain: "example.com",
        isSelected: true,
      },
      {
        email: "jane@test.io",
        domain: "test.io",
        isSelected: false,
      },
    ]);
  });
});
