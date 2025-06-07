import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MediaSearchPage from "./MediaSearchPage";
import { getMultimedia } from "../lib/MultimediaApi";
import { MediaType } from "../types/Multimedia";
import { sampleMultimediaListPaginnation } from "../../__mocks__/multimediaSampleData";

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

    // Trigger search
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

    // Trigger search
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

    // Trigger search
    fireEvent.change(input, { target: { value: "jack" } });
    fireEvent.change(select, { target: { value: "movie" } });
    fireEvent.click(screen.getByText("Search"));

    await waitFor(() => {
      expect(getMultimedia).toHaveBeenCalledWith("jack", MediaType.MOVIE);
      expect(getMultimedia).not.toHaveBeenCalledWith("jack", MediaType.ALL);
    });

    expect(await screen.findByText("Jhon Doe")).toBeInTheDocument();
  });

  it("should paginate results when clicking next and previous", async () => {
    (getMultimedia as jest.Mock).mockResolvedValue(
      sampleMultimediaListPaginnation
    );

    render(<MediaSearchPage />);

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "test" } });

    // Trigger search
    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    // Wait for first page
    await waitFor(() => {
      expect(screen.getByText("Track 1")).toBeInTheDocument();
      expect(screen.getByText("Track 10")).toBeInTheDocument();
    });

    // Click "Next" button
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText("Track 11")).toBeInTheDocument();
      expect(screen.getByText("Track 20")).toBeInTheDocument();
    });

    // Click "Previous" button
    const prevButton = screen.getByText("Previous");
    fireEvent.click(prevButton);

    await waitFor(() => {
      expect(screen.getByText("Track 1")).toBeInTheDocument();
    });
  });
});
