import Link from "next/link";
import React from "react";
const Header = (props) => {
  return (
    <>
      <div className="w-[100%] h-[100%] overflow-hidden">
        <div className="header">
          <div className="mt-[20%] main-heading flex items-center text-white justify-center  flex-col w-full absolute">
            <h1 className="">WelCome To Your Website</h1>
            <h6>Gain Knowledge </h6>
          </div>
        </div>
        <div className="flex items-center justify-center absolute bottom-[15%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <Link href={"/blog"}>
            <button className="px-6 py-3 bg-[white] font-semibold hover:bg-[rgb(254,254,254,0)]  hover:text-white transition duration-150 ease-in-out rounded-3xl">
              More Blogs
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
