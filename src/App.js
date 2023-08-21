import React, { useEffect, useState } from 'react';
import getMovies from './functions/getMovies';
import MovieCard from './components/MovieCard';

const App = () => {
  const [data, setData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [timeout] = useState(225000);

  const getData = async () => {
    try {
      const resp = await getMovies();
      setData(resp);
    } catch (error) {
      setHasError(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, []);

  useEffect(() => {
    setInterval(() => {
      getData()
    }, timeout);
  }, []);

  if (hasError) {
    return(
      <div className="App">
        <p>Issue retrieving movies from database</p>
        <p>Reason: { hasError }</p>
      </div>
    );
  }

  if (data) {
    return(
      // Used .filter on .map but then re-read question which asked for a prop
      /* <div className="App">
        <h1>{ data.title }</h1>
        { 
          data.films.filter((film) => film.duration_seconds > 5500).map(item => (
            <MovieCard key={ item.id } movie={ item }></MovieCard>
          ))
        }
      </div> */

      // using a prop
      <div className="App">
        <header>
          <div class="logo">
            <img alt="" src="https://res.cloudinary.com/flixpremiere/image/upload/c_fill,w_146,q_auto,f_auto,dpr_1,h_99/web/flix-logo-white-192" class="css-9pa8cd"/>
          </div>
          <div class="strapLine">
            Discover the Very Best<br /> from Independent Film
          </div>
        </header>

        <h1>{ data.title }</h1>

        <div class="movieList">
          { 
            data.films.map(item => (
              <MovieCard key={ item.id } minDuration="5500" movie={ item }></MovieCard>
            ))
          }
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <p>Loading Movies...</p>
    </div>
  );
}

export default App;
