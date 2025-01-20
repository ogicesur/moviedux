import React, { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleRating = (event) => {
    setRating(event.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesRating = (movie, rating) => {
    return rating === "" || movie.rating >= rating;
  };

  const matchesSearch = (movie, search) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesGenre(movie, genre) &&
      matchesSearch(movie, search) &&
      matchesRating(movie, rating)
  );
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={search}
        onChange={handleSearch}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenre}
          >
            <option value="All Genres">All Genres</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Fantasy</option>

            <option value="Horror">Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRating}
          >
            <option value="">All</option>
            <option value="8">Good</option>
            <option value="4">Ok</option>
            <option value="0">Bad</option>
          </select>
        </div>
      </div>
      <h2>Movies</h2>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isWatchtlisted={watchlist.includes(movie.id)}
            toggleWatchlist={toggleWatchlist}
          />
          // MovieCard({ movie } // This is the same as above
        ))}
      </div>
    </div>
  );
}
