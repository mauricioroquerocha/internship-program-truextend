import "./SkeletonCard.css"; // or use CSS modules if preferred

export default function SkeletonCard() {
  return (
    <div data-testid="skeleton-card" className="skeleton-card">
      <div className="skeleton-image" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "0.5rem",
          width: "70%",
        }}
      >
        <div className="skeleton-text title" />
        <div className="skeleton-text subtitle" />
        <div className="skeleton-text price" />
      </div>
    </div>
  );
}
