import axios from "axios";
import  Router  from "next/router";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
const auth = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  console.log(data);
  async function formHandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/admin/auth", data);
      if (res.status === 200) {
        setData({
          email: "",
          password: "",
        });
        toast.success("Welcome Admin");
        setTimeout(() => {
          Router.push("/admin/");
        }, 2000);
      }
    } catch (error) {
      console.log(error, "from fromHandler");
      toast.error("SomeThing Went Wrong");
    }
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div className="w-[100%] h-[100%] overflow-hidden">
        <div className="loginpage h-[100vh] w-[100vw] overflow-hidden">
          <div className="w-[40%] h-[50%] mt-20 mx-auto">
            <div className="flex items-center justify-center">
              <h1 className="font-semibold">Admin Auth</h1>
            </div>
            <form
              onSubmit={formHandler}
              className="w-[100%] h-[100%] rounded-2xl bg-opacity-20 backdrop-blur-md backdrop-filter shadow-lg border border-gray-200 bg-white text-black items-center py-4 flex flex-col gap-4"
            >
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                placeholder="Enter Your Email"
                className="w-[70%] h-[15%] rounded-3xl px-5 "
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
                className="px-10 transition duration-150 ease-in-out hover:bg-[rgb(254,254,254,0)] py-2 rounded-3xl bg-blue-600 font-semibold"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default auth;
