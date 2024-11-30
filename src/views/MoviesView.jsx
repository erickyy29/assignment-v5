import React from "react";
import { Outlet } from "react-router-dom";
import Genres from "../components/Genres";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function MoviesView() {
  const genres = [
    { genre: "Action", id: 28 },
    { genre: "Adventure", id: 12 },
    { genre: "Comedy", id: 35 },
    { genre: "Drama", id: 18 },
    { genre: "Horror", id: 27 },
    { genre: "Romance", id: 10749 },
    { genre: "Science Fiction", id: 878 },
    { genre: "Thriller", id: 53 },
    { genre: "Fantasy", id: 14 },
    { genre: "Animation", id: 16 },
  ];

  return (
    <div className="container">

      <Header />

      <div style={{ display: "flex", height: "100vh" }}>
        <aside
          style={{
            flex: "1",
            padding: "10px",
            borderRight: "1px solid #ccc",
            minWidth: "250px",
          }}
        >
          <Genres genres={genres} />
        </aside>

        <main style={{ flex: "4", padding: "10px", display: "flex", flexDirection: "column" }}>
          <Outlet />
        </main>
      </div>

      <Header />
    </div>
  );
}

export default MoviesView;
