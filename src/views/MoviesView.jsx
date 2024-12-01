import React from "react";
import { Outlet } from "react-router-dom";
import Genres from "../components/Genres";
import Header from "../components/Header.jsx";
import styles from './MoviesView.css';

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
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>
        <aside className={styles.genreView}>
          <Genres genres={genres} />
        </aside>
        <main className={styles.detailView}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MoviesView;
