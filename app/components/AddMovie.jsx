"use client";
import React, { useState } from "react";
import axios from "axios";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [actors, setActors] = useState([]);
  const [year, setYear] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/movies", {
      title,
      actors,
      year,
    });
    try {
    } catch (error) {
    } finally {
    }

    setTitle("");
    setActors([]);
    setYear();
  };

  const inputClassName = "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  const labelClassName = "block text-gray-700"

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className={labelClassName}>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Fast and Furious"
            className={inputClassName}
          />
        </div>

        <br />
        <label className={labelClassName}>
          Actors (comma separated):
          <input
            type="text"
            name="actors"
            value={actors}
            onChange={(e) => setActors(e.target.value.split(","))}
            placeholder="The Rock, Vin Diesel"
            className={inputClassName}
          />
        </label>
        <br />
        <label className={labelClassName}>
          Year of Release:
          <input
            type="text"
            name="year"
            value={year}
            onChange={(e) => setYear(+e.target.value)}
            placeholder="2003"
            className={inputClassName}
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-green-800  text-sm text-white font-bold uppercase rounded-lg hover:bg-red-600 p-2 my-2 ml-2"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
