"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="shadow-md text-white font-bold mb-2 text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <ul className="flex space-x-14 py-2 px-2">
        <li>Movie Space | </li>
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/add" ? "active" : ""}`}
            href="/add"
          >
            Add Movie
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
