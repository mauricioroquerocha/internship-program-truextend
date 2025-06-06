import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MediaSearchPage from "./MediaSearchPage";
import { getMultimedia } from "../lib/MultimediaApi";
import { MediaType } from "../types/Multimedia";

jest.mock("../lib/MultimediaApi", () => ({
  getMultimedia: jest.fn(),
}));

describe("MediaSearchPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders input and buttons", () => {
    render(<MediaSearchPage />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("all")).toBeInTheDocument();
  });

  it("shows error when searching with empty input", async () => {
    render(<MediaSearchPage />);
    fireEvent.click(screen.getByText("Search"));

    expect(
      await screen.findByText("Search query is required.")
    ).toBeInTheDocument();
  });

  it("calls getMultimedia with correct params", async () => {
    (getMultimedia as jest.Mock).mockResolvedValue([
      { artistName: "Jhon Doe" },
    ]);

    render(<MediaSearchPage />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "jack" } });
    fireEvent.click(screen.getByText("Search"));

    await waitFor(() => {
      expect(getMultimedia).toHaveBeenCalledWith("jack", MediaType.ALL);
    });

    expect(await screen.findByText("Jhon Doe")).toBeInTheDocument();
  });

  it("calls getMultimedia with different media type", async () => {
    (getMultimedia as jest.Mock).mockResolvedValue([
      { artistName: "Jhon Doe" },
    ]);

    render(<MediaSearchPage />);
    const input = screen.getByPlaceholderText("Search...");
    const select = screen.getByTestId("dropdown");

    fireEvent.change(input, { target: { value: "jack" } });
    fireEvent.change(select, { target: { value: "movie" } });
    fireEvent.click(screen.getByText("Search"));

    await waitFor(() => {
      expect(getMultimedia).toHaveBeenCalledWith("jack", MediaType.MOVIE);
      expect(getMultimedia).not.toHaveBeenCalledWith("jack", MediaType.ALL);
    });

    expect(await screen.findByText("Jhon Doe")).toBeInTheDocument();
  });
});
