import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { UserContext } from "@/contexts/User";

const Navbar = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/user/logout");
      console.log(res);
      router.reload();
    } catch (error) {
      console.log(error, "from logout function");
    }
  };

  const userProfile = user.data ? (
    <div className="flex flex-col items-center justify-center">
      <div className="w-14 h-14 rounded-full">
        <Link href={`/user/${user.data._id}`}>
          <img
            className="w-full h-full rounded-full"
            alt="userimage"
            src={user.data.image}
          />
        </Link>
      </div>
      <h1>{user.data.username}</h1>
    </div>
  ) : null;

  return (
    <div className="navbar flex w-full items-center justify-between px-20 py-1">
      <div className="w-20 h-20">
        <Link href={"/"}>
          <img
            src="/iBlogs-logo/default.png"
            className="w-full h-full"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-700 duration-300"
          href={"/"}
        >
          Home
        </Link>
        {user.data ? (
          <>
            <button
              onClick={handleLogout}
              className="bg-red-700 py-3 px-5 rounded-3xl text-white"
            >
              Logout
            </button>
            <Link
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-700 duration-300"
              href={"/blog"}
            >
              Blog
            </Link>
          </>
        ) : (
          <>
            <Link
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-700 duration-300"
              href={"/login"}
            >
              Login
            </Link>
            <Link
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-blue-700 duration-300"
              href={"/signup"}
            >
              Signup
            </Link>
          </>
        )}
      </div>
      {userProfile}
    </div>
  );
};

export default Navbar;
