export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Name: Mauricio Tomas Roque Rocha</h2>
      <h2>Email: mauricio.tomas.roque.rocha@gmail.com</h2>

      <p>
        Thank you for you time. click search button on top to go to the search
        page or click:
      </p>
      <a href="http://localhost:3000/search">Search</a>
    </div>
  );
}
