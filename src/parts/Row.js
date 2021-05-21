import React, { useState, useEffect } from "react";
import api from "../config/api";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await api.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
          key={movie.id}
            src={`${baseURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            title={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
