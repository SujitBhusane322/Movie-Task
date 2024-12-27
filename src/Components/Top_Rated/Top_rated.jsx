import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import { imageUrl } from "../ContextData/Context";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

const Top_rated = () => {
  const [page, setpage] = useState(1);
  const [movies, setMovies] = useState([]);
  const { baseUrl } = useContext(imageUrl);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`
        );
        setMovies(res.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [page]);

  return (
    <>
      <Header />
      <div className="grid grid-cols-4 gap-4 px-4 py-4">
        {movies.map((movie, index) => (
          <Link
            to={`/single-page/${movie.id}`}
            className="mb-4  bg-white p-4 rounded-xl hover:bg-gray-300  "
            key={index}
          >
            <div>
              <img
                src={`${baseUrl}${movie.poster_path}`}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
            <div>
              <ul className="text-center text-2xl font-semibold ">
                <li>{movie.title}</li>
                <li>Rating: {movie.vote_average}</li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        onChange={(page) => {
          setpage(page);
        }}
        defaultCurrent={1}
        total={400}
        align="center"
        pageSize={20}
        showSizeChanger={false}
      />
    </>
  );
};

export default Top_rated;
