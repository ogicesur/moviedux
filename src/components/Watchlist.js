import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ watchlist, movies, toggleWatchlist }) {
    return (
        <div>
            <h1 className="title">Your Watchlist</h1>
            <div className="watchlist">
                {
                    watchlist.map((id) => {
                    const movie = movies.find((m) => m.id === id);
                    return (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            isWatchtlisted={true}
                            toggleWatchlist={toggleWatchlist}
                        />
                    );
                }
                )
                }
            </div>
        </div>
    );

}
