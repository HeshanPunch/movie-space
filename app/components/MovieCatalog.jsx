import React from "react";
import MovieTile from "./MovieTile";

async function fetchMovies() {
  const response = await fetch("http://localhost:3000/api/movies", {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

const MovieCatalog = async () => {
  const movies = await fetchMovies();

  return (
    <div>
      {movies.map((movie) => (
        <MovieTile
          key={movie.id}
          id={movie.id}
          title={movie.title}
          actors={movie.actors}
          year={movie.year}
        />
      ))}
    </div>
  );
};

export default MovieCatalog;
