import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Genres.css";

function Genres({ genres }) {
  const location = useLocation(); // Get the current location

  return (
    <div className="genres-container">
      <h3>Genres</h3>
      <div className="genres-buttons">
        {genres.map((genre) => {
          // Check if the current URL matches the genre's URL
          const isActive = location.pathname === `/movies/genre/${genre.id}`;

          return (
            <button
              key={genre.id}
              className={`genre-button ${isActive ? "active-genre" : ""}`}
            >
              <Link to={`/movies/genre/${genre.id}`} className="genre-link">
                {genre.genre}
              </Link>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Genres;
