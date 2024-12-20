import React from "react";
import Home from "./Components/Home-Page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top_rated from "./Components/Top_Rated/Top_rated";
import Upcoming_movies from './Components/Upcoming-Movies/Upcoming_movies'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<Top_rated />} />
          <Route path="/upcoming-movies" element={<Upcoming_movies/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
