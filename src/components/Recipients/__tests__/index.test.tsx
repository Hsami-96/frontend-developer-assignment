import { render, screen } from "@testing-library/react";
import { Recipients } from "../index";
import "@testing-library/jest-dom/extend-expect";

describe("Recipients component", () => {
  it("renders the main recipients container", () => {
    render(<Recipients />);

    const container = screen.getByTestId("recipients-container");

    expect(container).toBeInTheDocument();
  });
});
