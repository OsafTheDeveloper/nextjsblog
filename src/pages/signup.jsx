import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Router from "next/router";

const signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function formhandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user", data);
      console.log(res);
      if (res.status === 201) {
        setData({
          username: "",
          email: "",
          password: "",
        });
        toast.success("You Registered");
      }
      setTimeout(() => {
        Router.push("/");
      }, 2000);
    } catch (error) {
      console.log(error, "from frontend fromhandler");
      toast.error("SomeThing Went Wrong");
    }
  }

  console.log(data);
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div className="w-[100%] h-[100%] overflow-hidden">
        <div className="signuppage h-[100vh] w-[100vw] overflow-hidden">
          <div className="w-[40%] h-[50%] mt-20 mx-auto">
            <div className="flex items-center justify-center">
              <h1 className="font-semibold loginHeading">Login Page</h1>
            </div>
            <form
              onSubmit={formhandler}
              className="w-[100%] h-[100%] rounded-2xl bg-opacity-20 backdrop-blur-md backdrop-filter shadow-lg border border-gray-200 bg-white text-black items-center py-4 flex flex-col gap-4"
            >
              <label className="font-semibold" htmlFor="username">
                Username
              </label>
              <input
                placeholder="Enter Your Email"
                className="w-[70%] h-[15%] rounded-3xl px-5 "
                type="text"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, username: e.target.value });
                }}
              />
              <label className="font-semibold" htmlFor="email">
                Email{" "}
              </label>
              <input
                placeholder="Enter Your Password"
                className="w-[70%] h-[15%] rounded-3xl px-5"
                type="text"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
              <label className="font-semibold" htmlFor="password">
                Password{" "}
              </label>
              <input
                placeholder="Enter Your Password"
                className="w-[70%] h-[15%] rounded-3xl px-5"
                type="text"
                value={data.password}
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
              <button
                className="px-10 transition duration-150 ease-in-out hover:bg-[rgb(254,254,254,0)] py-2 rounded-3xl bg-cyan-500 font-semibold"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;
