import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        backgroundColor: "#282c34",
        color: "white",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Internship Program Truextend
        </Link>
      </h1>

      <nav>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "1rem",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link to="/search" style={{ color: "white", textDecoration: "none" }}>
          Search media
        </Link>
      </nav>
    </header>
  );
};

export default Header;
