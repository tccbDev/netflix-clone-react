import React, {useEffect, useState} from 'react'
import axios from "axios";
import request from "./Request";
import './Banner.css';

function Banner() {

    const [movie , setMovie] = useState([]);
    useEffect(()=>{
        async function fetchData() {
            const requests = await axios.get("https://api.themoviedb.org/3"+request.fetchNetflixOriginals)
          setMovie(requests.data.results[
              Math.floor(Math.random() * requests.data.results.length+1)
              ])

            console.log("REQUEST",requests.data.results);
            console.log("Picked Movie",movie);
            return requests;
        }
        fetchData();
    },[])
return (
    <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
        backgroundPosition :"center center"
    }}>
    <div className="banner__contents">
        <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
            {movie?.overview}
        </div>
    </div>
<div className="banner__fadeBottom">

</div>

    </header>
)
}

export default Banner;
