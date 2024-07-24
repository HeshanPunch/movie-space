import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    const movie = await prisma.movie.delete({
      where: {
        id,
      },
    });
    return NextResponse.json("Movie Deleted", movie);
  } catch (error) {
    return NextResponse.json(
      { message: "Delete Error", error },
      { status: 500 }
    );
  }
};
