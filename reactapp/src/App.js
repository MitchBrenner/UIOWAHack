import logo from './logo.svg';
import React, { setState, useState } from 'react';
import './App.css';

// var movieList = [];
// movieList.push("harry potter");


function App() {
  const[movies, setMovie] = useState(["Harry Potter", "Lord of the Rings", "Smile", "Back to the Future", "King Kong"])

  return (
    <div className="App">
      <Header />
      <div id = "movieSearchDiv">
        <div className='searchMovies'>
          <SearchMovies />
        </div>
        <div className='movies'>
          <MovieRow movies = {movies} />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return(
    <header>
      <h1 id = "title">NextFlix</h1>
    </header>
  )
}

function SearchMovies(){
  return(
    <div className = "movieDiv">
      <h3 id = "searchTitle">Search For Movies</h3>
      <input type = "search" id = "search"/>
    </div>
  )
}

function MovieRow({ movies }){
  return(
    movies.map(movie => {
      return(
        <div className = "movieRow">
          <p className='movie'>{movie}</p>
          <button id = "addMovie">Add</button>
        </div>
      )
    })
  )
}

export default App;
