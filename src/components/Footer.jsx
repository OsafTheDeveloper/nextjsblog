import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full relative footer py-5 bg-[rgb(22,22,22)]">
        <div className="flex items-center gap-3 justify-center py-5 bg-blue-700">
          <label className="text-white  font-semibold" htmlFor="input">
            Subscribe to our Newsletter
          </label>
          <input
            placeholder="Enter Your Email"
            className="w-[250px] h-[40px] px-3  rounded-3xl text-black "
            type="text"
          />
          <button className="px-10 py-3 font-semibold  bg-green-400 rounded-3xl">
            Subscribe
          </button>
        </div>
        <div className="flex items-center justify-around">
          <div className="w-[10%] h-[10%]">
            <Link href={"/"}>
              <img
                className="w-[100%] h-[100%]"
                src="http://res.cloudinary.com/dzeveeijn/image/upload/v1709489248/blogImages/jfydjzt6oo61dbrkvh5m.png"
                alt=""
              />
            </Link>
          </div>
          <div className="links text-[#dadada] flex py-5 gap-3 flex-col">
            <h1 className="text-[#fff] font-bold">UseFul Links</h1>
            <Link
              className="hover:text-white transition duration-150 ease-in-out"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="hover:text-white transition duration-150 ease-in-out"
              href={"/blogs"}
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
              className="hover:text-white transition duration-150 ease-in-out"
              href={"/login"}
            >
              Login
            </Link>
          </div>
          <div>
            <h1 className="text-[#fff] mx-3 font-bold">Let's keep in touch!</h1>
            <div className="sociallinks text-[#dadada] flex gap-3 px-5">
              <i className="ri-facebook-fill cursor-pointer hover:text-[rgb(32,123,243)] transition duration-150 ease-in-out"></i>
              <i className="ri-linkedin-fill cursor-pointer hover:text-[rgb(0,119,181)] transition duration-150 ease-in-out"></i>
              <i className="ri-github-fill cursor-pointer hover:text-white transition duration-150 ease-in-out"></i>
              <i className="ri-instagram-line cursor-pointer hover:text-[rgb(180,55,152)] transition duration-150 ease-in-out"></i>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-white">
            © 2024 Edify College of IT. All Rights Reserved.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
