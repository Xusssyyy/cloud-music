import React from "react";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
import Rank from "../application/Rank";
import { Routes, Route } from "react-router-dom";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Recommend />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/singers" element={<Singers />} />
        <Route path="/rank" element={<Rank />} />
      </Route>
    </Routes>
  );
}

// const route = [
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         index: true,
//         element: <Recommend />,
//       },
//       {
//         path: "/singers",
//         element: <Singers />,
//       },
//       {
//         path: "/rank",
//         element: <Rank />,
//       },
//     ],
//   },
// ];

export default MyRouter;
