import { describe, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  it("renders input", async () => {
    const props = {
      term: "",
      onSearch: vi.fn(),
    };

    const { container } = render(<SearchBox {...props} />);
    const input = container.querySelector('input[type="text"]');
    await userEvent.type(input!, "domain");
    expect(props.onSearch).toHaveBeenCalled();
  });

  it("trim empty strings", async () => {
    const props = {
      term: "",
      onSearch: vi.fn(),
    };

    const { container } = render(<SearchBox {...props} />);
    const input = container.querySelector('input[type="text"]');
    await userEvent.type(input!, "  ");
    expect(props.onSearch).not.toHaveBeenCalled();
  });
});
