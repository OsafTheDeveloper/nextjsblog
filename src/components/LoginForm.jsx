import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  async function formHandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user/login", data);
      console.log(res.data.data);
      if (res.status === 200) {
        setData({
          email: "",
          password: "",
        });
        
        toast.success("You Loggedin");
        setTimeout(() => {
          router.push(`/`);
          router.refresh();
        }, 2000);
      }
    } catch (error) {
      console.log(error, "from formHandler");
      toast.error("Something Went Wrong");
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div className="w-full max-w-md mx-auto my-4 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form onSubmit={formHandler} className="flex flex-col">
          <input
            type="email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email address"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-gray-900 mt-4">
              {" "}
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-sm text-blue-500 -200 hover:underline mt-4"
              >
                Signup
              </Link>
            </p>
          </div>
          <Button />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
