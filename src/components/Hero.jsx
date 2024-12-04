import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Hero.css";

function Hero() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&include_adult=false`
        );        

        const movies = response.data.results;

        if (movies && movies.length > 0) {
          const randomMovie = movies[Math.floor(Math.random() * movies.length)];
          setMovie(randomMovie);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    getRandomMovie();
  }, []);

  return (
    <div className="featured-content-container">
      {movie && movie.backdrop_path && (
        <div
          className="featured-content"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`,
          }}
        >
          <h1 className="featured-title">{movie.original_title}</h1>
          <p className="featured-text">
            {movie.overview.length > 200
              ? movie.overview.substring(0, 200) + "..."
              : movie.overview}
          </p>

          <div className="featured-button-container">
            <button className="featured-button">Add To Cart</button>
            <button className="featured-button">
              <Link to={`/movies/details/${movie.id}`}>More Info</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
