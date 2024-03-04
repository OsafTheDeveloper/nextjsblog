import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600">
        <div className="container pt-9">
          <div className="mb-9 flex justify-center gap-5 text-[2rem]">
            <Link href={"/"}>
              <i className="ri-facebook-fill hover:text-[rgb(8,98,247)] transition-all ease-in-out delay-150 text-[rgb(82,82,82)]"></i>
            </Link>
            <Link href={"/"}>
              <i class="ri-github-fill hover:text-[rgb(0,0,0)] transition-all ease-in-out delay-150 text-[rgb(82,82,82)]"></i>
            </Link>
            <Link href={"/"}>
              <i class="ri-instagram-line hover:text-purple-700 transition-all ease-in-out delay-150 text-[rgb(82,82,82)]"></i>
            </Link>
          </div>
        </div>

        <div className="w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          © 2024 Copyright:
          <Link className="text-neutral-800 dark:text-neutral-400" href="/">
            Osaf Haider
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
