import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <>
      <div className="w-[100%] h-[100%] overflow-hidden">
        <div className="header">
          <div className="mt-[20%] main-heading flex items-center text-white justify-center  flex-col w-full absolute">
            <h1 className="">WelCome To Your Website</h1>
            <h6>Gain Knowledge </h6>
          </div>
        </div>
        <nav className="flex absolute bottom-[85%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 items-center justify-between px-5 w-[80%] rounded-3xl bg-white bg-opacity-20 backdrop-blur-md backdrop-filter shadow-lg border border-gray-200">
          <div className="logo w-[7%] h-[7%]">
            <img
              className="w-full h-full"
              src="http://res.cloudinary.com/dzeveeijn/image/upload/v1709489248/blogImages/jfydjzt6oo61dbrkvh5m.png"
              alt="Logo"
            />
          </div>
          <div className="links flex items-center gap-5">
            <Link
              className="hover:text-white transition duration-150 ease-in-out"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="hover:text-white transition duration-150 ease-in-out"
              href={"/blog"}
            >
              Blogs
            </Link>
            <Link
              className="hover:text-white transition duration-150 ease-in-out"
              href={"/signup"}
            >
              Signup
            </Link>
            <Link
              className="hover:text-white transition duration-150 ease-in-out "
              href={"/login"}
            >
              Login
            </Link>
          </div>
        </nav>
        <div className="flex items-center justify-center absolute bottom-[15%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <Link href={"/blog"}>
            <button className="px-6 py-3 bg-[white] font-semibold hover:bg-[rgb(254,254,254,0)] hover:text-white transition duration-150 ease-in-out rounded-3xl">
              More Blogs
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
