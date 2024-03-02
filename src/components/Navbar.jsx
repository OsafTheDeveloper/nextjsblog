import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="absolute left-1/2 transform -translate-x-1/2 w-[85%] flex items-center justify-between backdrop-blur-md bg-opacity-30 bg-white px-7 py-3 rounded-[40px] my-2">
        <div className="w-[15%] h-[15%]">
          <img
            className="w-[100%] h-[100%]"
            src="https://edifycit.com/images/newlogo.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-5 text-white">
          <Link href={"/"}>
            <h6 className="transition-colors duration-300 text-[1.1rem] hover:text-black cursor-pointer">Home</h6>
          </Link>
          <Link href={"/blog"}>
            <h6 className="transition-colors duration-300 text-[1.1rem] hover:text-black cursor-pointer">Blogs</h6>
          </Link>
          <Link href={"/signup"}>
            <h6 className="transition-colors duration-300 text-[1.1rem] hover:text-black cursor-pointer">Signup</h6>
          </Link>
          <Link href={"/login"}>
            <h6 className="transition-colors duration-300 text-[1.1rem] hover:text-black cursor-pointer">Login</h6>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
