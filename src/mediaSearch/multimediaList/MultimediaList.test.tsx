import { render, screen } from "@testing-library/react";
import MultimediaList from "./MultimediaList";
import { sampleMultimediaList } from "../../../__mocks__/multimediaSampleData";

describe("MultimediaList", () => {
  it("renders multimedia cards when data is present", () => {
    render(
      <MultimediaList
        multimediaList={sampleMultimediaList}
        loading={false}
        page={1}
        setPage={() => {}}
        pageCount={1}
      />
    );

    expect(screen.getByText("Song One")).toBeInTheDocument();
    expect(screen.getByText("Artist Two")).toBeInTheDocument();
    expect(screen.queryByText("No results found.")).not.toBeInTheDocument();
  });

  it("renders skeletons while loading", () => {
    render(
      <MultimediaList
        multimediaList={sampleMultimediaList}
        loading={true}
        page={1}
        setPage={() => {}}
        pageCount={1}
      />
    );

    const skeletons = screen.getAllByTestId("skeleton-card");
    expect(skeletons.length).toBeGreaterThanOrEqual(1);
  });

  it("renders 'No results found' when no data", () => {
    render(
      <MultimediaList
        multimediaList={[]}
        loading={false}
        page={1}
        setPage={() => {}}
        pageCount={1}
      />
    );

    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });

  it("renders 'No results found' when multimediaList is undefined", () => {
    render(
      <MultimediaList
        loading={false}
        page={1}
        setPage={() => {}}
        pageCount={1}
      />
    );

    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });
});
