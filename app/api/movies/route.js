import prisma from "./../../lib/prismadb";
import { NextResponse } from "next/server";
import { mockMovies } from "../../../fixtures";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { title, actors, year } = body;
    if (!title || !actors || !year) {
      return NextResponse.json(
        { error: "Title, Actors, and Year are required" },
        { status: 400 }
      );
    }
    const newPost = await prisma.movie.create({
      data: {
        title,
        actors,
        year,
      },
    });
    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    console.log("mockMovies", mockMovies);
    if (!mockMovies) {
      return NextResponse.json({ message: "No Movies Found" }, { status: 404 });
    }

    
    const movies = await prisma.movie.findMany();
    console.log('⭐🚀 movies', movies);

    return NextResponse.json(movies);
  } catch (error) {
    return NextResponse.json({ message: "Get Error" }, { status: 500 });
  }
};
