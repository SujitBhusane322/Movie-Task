import React, { useEffect, useState, useContext } from "react";
import Header from "../Header/Header";
import axios from "axios";
import { imageUrl } from "../ContextData/Context";
import { useParams } from "react-router-dom";
import { Pagination } from 'antd';

const Singlepage = () => {
  const {id} = useParams();
  if(!id) return;

  const [movie, setmovie] = useState({});
  const [cast, setcast] = useState([]);
  const { baseUrl } = useContext(imageUrl);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      //   console.log(res.data);
      setmovie(res.data);
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const fetchCast = async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      console.log(result.data);
      setcast(result.data.cast);
    };
    fetchCast();
  }, []);
  return (
    <>
      <Header />
      
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">CAST</h1>
        <div className="grid grid-cols-6 gap-3">
          {cast.map((actor) => (
            <div className="bg-white p-4 rounded-xl hover:bg-gray-300 border-4 hover:border-orange-500">
              <div key={actor.id}>
                <img
                  src={`${baseUrl}${actor.profile_path}`}
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <ul className=" text-xl font-semibold ">
                <li>{actor.name}</li>
                <li>Charactor:{actor.character}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      
    </>
  );
};

export default Singlepage;
