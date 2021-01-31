import React, { useState, useEffect } from "react";
import instance from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const requests = await instance.get(
        "https://api.themoviedb.org/3" + fetchUrl
      );

      setMovies(requests.data.results);

      return requests;
    }
    fetchData();
  }, [fetchUrl]);

  const opt = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log("HERE ");
      movieTrailer(movie?.name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("URL PARAMS ", urlParams);

          setTrailerUrl(urlParams.get("v"));
        })
        .catch(error => console.error(error.name));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row_posters`}>
        {movies.map(movie => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            src={`${imageUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opt} />}
    </div>
  );
}

export default Row;
