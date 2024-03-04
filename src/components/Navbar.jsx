import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="">
        <nav className="absolute left-1/2 transform -translate-x-1/2 w-[85%] flex items-center justify-between backdrop-blur-md bg-opacity-30 bg-black px-7 rounded-[40px] my-1">
          <div className="w-[8%] h-[8%] ">
            <Link href={"/"}>
              <img
                className="w-[100%] h-[100%] "
                src="http://res.cloudinary.com/dzeveeijn/image/upload/v1709489248/blogImages/jfydjzt6oo61dbrkvh5m.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex items-center gap-5 text-white">
            <Link href={"/"}>
              <h6 className="transition-colors font-bold hover:text-[rgb(157,213,202)] duration-300 text-[1.1rem]  cursor-pointer">
                Home
              </h6>
            </Link>
            <Link href={"/blog"}>
              <h6 className="transition-colors font-bold hover:text-[rgb(157,213,202)] duration-300 text-[1.1rem]  cursor-pointer">
                Blogs
              </h6>
            </Link>
            <Link href={"/signup"}>
              <h6 className="transition-colors font-bold duration-300 text-[1.1rem] hover:text-[rgb(157,213,202)] cursor-pointer">
                Signup
              </h6>
            </Link>
            <Link href={"/login"}>
              <h6 className="transition-colors font-bold duration-300 text-[1.1rem] hover:text-[rgb()] cursor-pointer">
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
