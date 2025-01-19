import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  const popularMovies = useSelector(store=>store?.movies?.popularMovies);

  const upcomingMovies = useSelector(store=>store?.movies?.upcomingMovies)
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"UpComing"} movies={upcomingMovies} />
        <MovieList title={"Trending"} movies={movies} />
        <MovieList title={"Action"} movies={movies} />
        <MovieList title={"Comedy"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
