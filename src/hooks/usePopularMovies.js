import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = useSelector(store=>store.movies.popularMovies);

    const getPopularMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
        API_OPTIONS
      );
  
      const json = await data.json();
     
      dispatch(addPopularMovies(json?.results));
      
      
    };
  
    useEffect(() => {
      if(!popularMovies) getPopularMovieVideos();
    }, []);
}

export default usePopularMovies;