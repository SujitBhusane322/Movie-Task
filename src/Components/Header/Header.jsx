import React, { useRef, useState } from 'react';
import { Link, Links, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [params] = useSearchParams();
  const [error, setError] = useState(null);
  const movieNameRef = useRef();
  const navigate = useNavigate();

  const handleSearch = () => {
    if(!movieNameRef.current) return;
    navigate(`/search?q=${movieNameRef.current.value}`)
  }

  return (
    <>a
      <div className="flex justify-around bg-gray-700 p-3 font-roboto">
        <Link to={'/'} className="text-4xl text-orange-500">MovieDb</Link>
        <div className="flex gap-5 items-center">
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
            onKeyDown={(e) => {
              if(e.key == 'Enter') handleSearch();
            }}
              type="text"
              ref={movieNameRef}
              placeholder="Movie Name"
              className="h-10 pl-2"
              defaultValue={params.get('q') ?? ""}
            />
            <button
              className="bg-gray-900 p-3 ml-3 text-white hover:bg-blue-600 rounded-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Display error message */}
      {error && <p className="text-white text-center">{error}</p>}
    </>
  );
};

export default Header;
