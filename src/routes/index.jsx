import React from "react";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
import Rank from "../application/Rank";
import Album from "../application/Album";
import Singer from "../application/Singer";

import { Routes, Route } from "react-router-dom";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Recommend />} />
        {/* <Route path="/recommend" element={<Recommend />} /> */}
        <Route path="/singers" element={<Singers />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/recommend/:id" element={<Album />} />
        <Route path="/singers/:id" element={<Singer />} />
      </Route>
    </Routes>
  );
}

export default MyRouter;
