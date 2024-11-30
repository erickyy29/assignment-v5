import { useEffect, useState } from 'react';
import axios from 'axios';
import './Hero.css';

function Hero() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async function getRandomMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}`
      );

      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];

      setMovie(randomMovie);
    })();
  }, []);

  return (
    <div className="featured-content-container">
      {movie && (
        <div
          className="featured-content"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), #151515), url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
          }}
        >
          <h1 className="featured-title">{movie.original_title}</h1>
          <p className="featured-text">{movie.overview.length > 200 ? movie.overview.substring(0, 200) + "..." : movie.overview}</p>
          <button className="featured-button">RENT NOW</button>
        </div>
      )}
    </div>
  );
}

export default Hero;
