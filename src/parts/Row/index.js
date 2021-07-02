import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import api from "../../config/api";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import Star from "../../asset/img/star.svg";

import "./style.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [detailMov, setDetailMov] = useState({
    nameD: "",
    rating: "",
    desc: "",
    backdrop: "",
  });

  useEffect(() => {
    setLoading(true);
    try {
      const fetchData = async () => {
        const request = await api.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      };
      fetchData();
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
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
        nameD:
          movie?.name ||
          movie?.original_title ||
          movie?.original_name ||
          movie?.title,
        desc: movie.overview,
        rating: movie.vote_average,
        backdrop: movie.backdrop_path,
      });
      movieTrailer(
        movie?.name ||
          movie?.original_title ||
          movie?.original_name ||
          movie?.title ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
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
        {movies.map((movie, index) => (
          <>
            {loading ? (
              <CircularProgress key={index} color="secondary" />
            ) : (
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
            )}
          </>
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
