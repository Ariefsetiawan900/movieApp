import React, { useState, useEffect } from "react";
import api from "../config/api";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import Star from "../asset/img/star.svg";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [detailMov, setDetailMov] = useState({
    nameD: "",
    rating: "",
    desc: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const request = await api.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
    console.log(trailerUrl);
  }, [fetchUrl, detailMov]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
      clear();

    } else {
      setDetailMov({
        ...detailMov,
        nameD: movie.name,
        desc: movie.overview,
        rating: movie.vote_average,
      });
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const clear = () => {
    setDetailMov({
      nameD: "",
      rating: "",
      desc: "",
    });
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            onClick={() => handleClick(movie)}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            title={movie.name}
          />
        ))}
      </div>
      {trailerUrl && (
        <>
          <Youtube videoId={trailerUrl} opts={opts} />
          <div>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {detailMov.nameD}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={Star}
                style={{ width: "25px", marginRight: "8px" }}
                alt="Rating"
              />
              <p style={{ fontSize: "1.5rem" }}>({detailMov.rating})</p>
            </div>
            <p>{detailMov.desc}</p>
          </div>
        </>
      )}
      
    </div>
  );
};

export default Row;
