import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const movieNameRef = useRef();

  const searchHandler = async () => {
    const searchMovie = movieNameRef.current.value.trim();
    if (!searchMovie) {
      setError('Please enter a movie name.');
      return;
    }

    setError(null); 

    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${searchMovie}&page=1`
      );
      setMovies(res.data.results || []); 
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
      setMovies([]); 
    }
  };

  return (
    <>
      <div className="flex justify-around bg-gray-700 p-3 font-roboto">
        <div className="text-4xl text-orange-500">MovieDb</div>
        <div className="flex gap-5">
          <div>
            <div className="flex gap-4 list-none text-2xl  ">
              <Link to="/" className="hover:text-blue-600  text-white">
                Popular
              </Link>
              <Link to="/top-rated" className="hover:text-blue-600 text-white">
                Top Rated
              </Link>
              <Link to="/upcoming-movies" className="hover:text-blue-600 text-white">
                Upcoming
              </Link>
            </div>
          </div>
          <div>
            <input
              type="text"
              ref={movieNameRef}
              placeholder="Movie Name"
              className="h-10 pl-2"
            />
            <button
              className="bg-gray-900 p-3 ml-3 text-white hover:bg-blue-600 rounded-md"
              onClick={searchHandler}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Display error message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Display search results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 p-4 rounded-md text-white">
            <h3 className="text-xl">{movie.title}</h3>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="mt-2 rounded-md"
              />
            )}
            <p className="mt-2">{movie.overview || 'No description available.'}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
