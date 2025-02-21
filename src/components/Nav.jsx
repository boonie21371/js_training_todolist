import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-[750px] border rounded-lg py-5 shadow-lg flex flex-row justify-between items-center border-neutral-300 max-w-7xl mt-5 px-10">
      <h1 className="text-2xl">
        <Link to={"/"} className="text-2xl hover:text-pink-500">
          My Notes
        </Link>
      </h1>
      <ul className="flex flex-row gap-x-5">
        <li>
          {" "}
          <Link to={"/add"} className="text-2xl font-black hover:text-green-500">
            +
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
