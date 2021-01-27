import logo from './logo.svg';
import './App.css';
import Row from "./Row";
import request from "./Request";
import Banner from "./Banner";
import React from "react";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
        <Nav/>
      <Banner/>
      <Row title= "Netflix originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title= "Trending now" fetchUrl={request.fetchTrending}/>
      <Row title= "Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title= "Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title= "Comedy" fetchUrl={request.fetchComedyMovies}/>
      <Row title= "Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title= "Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title= "Documentaries" fetchUrl={request.fetchDocumentaries}/>

    </div>
  );
}

export default App;
