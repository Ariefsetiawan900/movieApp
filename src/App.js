import React from "react";
import { Row, Banner,Nav,Footer } from "./parts";
import requests from "./config/request";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fecthNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fecthTrending} />
      <Row title="Top Rated" fetchUrl={requests.fecthTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fecthActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fecthComedyMovies} />
      <Row title="Horor Movies" fetchUrl={requests.fecthHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fecthRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fecthDocumentaries} />
      <Footer/>
    </div>
  );
};

export default App;
