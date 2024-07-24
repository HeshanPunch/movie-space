"use client";

import axios from "axios";
import React from "react";

//TODO hookup delete and edit
const MovieTile = ({ id, title, actors, year }) => {
  const onDelete = (id) => {
    try {
      axios.delete(`/api/movies/${id}`);
      console.log("Deleted", id);
    } catch (error) {
      console.log("❌Error deleting", error.message);
    }
  };

  return (
    <div className="m-2 shadow-lg border border-gray-200 rounded-lg p-4 bg-white ">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p>Actors: {actors.join(", ")}</p>
      <p>Released Year: {year}</p>
      {/* <button
        className="bg-blue-800  text-sm text-white font-bold uppercase rounded-lg hover:bg-blue-600 p-2 my-2"
        onClick={}
      >
        Edit
      </button> */}
      <button
        className="bg-red-800  text-sm text-white font-bold uppercase rounded-lg hover:bg-red-600 p-2 my-2 ml-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default MovieTile;
