import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="relative">
        <nav className="absolute left-1/2 transform -translate-x-1/2 w-[85%] flex items-center justify-between backdrop-blur-md bg-opacity-30 bg-white px-7 py-3 rounded-[40px] my-1">
          <div className="w-[15%] h-[15%]">
            <img
              className="w-full h-full hover:cursor-pointer"
              src="https://edifycit.com/images/newlogo.png"
              alt="Logo"
            />
          </div>
          <div className="flex items-center gap-5 text-black">
            <Link href={"/"}>
              <h6 className="transition-colors hover:text-indigo-300 duration-300 text-[1.1rem]  cursor-pointer">
                Home
              </h6>
            </Link>
            <Link href={"/blog"}>
              <h6 className="transition-colors hover:text-indigo-300 duration-300 text-[1.1rem]  cursor-pointer">
                Blogs
              </h6>
            </Link>
            <Link href={"/signup"}>
              <h6 className="transition-colors duration-300 text-[1.1rem] hover:text-indigo-300 cursor-pointer">
                Signup
              </h6>
            </Link>
            <Link href={"/login"}>
              <h6 className="transition-colors duration-300 text-[1.1rem] hover:text-indigo-300 cursor-pointer">
                Login
              </h6>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
