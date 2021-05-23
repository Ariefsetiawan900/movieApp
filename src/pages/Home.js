import React from "react";
import { Row, Banner, Nav, Footer } from "../parts";
import requests from "../config/request";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      {/* <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fecthNetflixOriginals}
        isLargeRow={true}
      /> */}
      <Row
        title="Trending Now"
        fetchUrl={requests.fecthTrending}
        isLargeRow={true}
      />
      <Row title="Top Rated" fetchUrl={requests.fecthTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fecthActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fecthComedyMovies} />
      <Row title="Horor Movies" fetchUrl={requests.fecthHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fecthRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fecthDocumentaries} />
      <Footer />
    </div>
  );
};

export default Home;
