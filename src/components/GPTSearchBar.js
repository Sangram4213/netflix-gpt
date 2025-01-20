import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GROQ_API_KEY } from "../utils/constants";
import lang from "../utils/languageConstants";
import { addGptMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();

  const langType = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in tmdb

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json?.results;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only gave me names of 5 movies, coma seprated like the expample result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya. And Movie name should be in Array. In response only give the name of movies string without any other text.";

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: gptQuery,
            },
          ],
          model: "llama3-8b-8192",
          temperature: 1,
          // max_tokens: 1024,
          top_p: 1,
          stream: false,
          stop: null,
        }),
      }
    );

    const json = await response.json();

    const gptMovies = json.choices[0].message?.content.split(",");

    // TODO : handle it with error page.
    if (!json.choices) return;

    // For each movie I will search API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResult = await Promise.all(promiseArray);

    console.log(tmdbResult);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
    );
  };

  return (
    <div
      className="pt-[10%] flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langType].gptSearchPlaceholder}
        />
        <button
          className="m-4 col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langType].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
