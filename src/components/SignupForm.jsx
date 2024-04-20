import axios from "axios";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Router from "next/router";

const SignupForm = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });

  const imageHandler = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  async function imageFormHandler(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "user_images");
      formData.append("cloud_name", "dzeveeijn");
      console.log(formData);

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dzeveeijn/image/upload",
        formData
      );

      if (res.status === 200) {
        toast.success("Image uploaded");
        setData({ ...data, image: res.data.url });
      }
    } catch (error) {
      toast.error("Image not uploaded");
    }
  }

  async function formHandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user", data);

      if (res.status === 201) {
        setData({
          username: "",
          email: "",
          password: "",
          image: "",
        });
        toast.success("You Registered");
        setTimeout(() => {
          Router.push("/");
        }, 2000);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Something went wrong");
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <div className="signup-page flex items-center justify-center min-h-screen bg-slate-900">
        <div className="signup-form-container bg-white rounded-2xl shadow-lg border border-gray-200 p-8 w-2/3">
          <h1 className="text-center text-2xl font-semibold mb-6">Sign Up</h1>
          <form onSubmit={formHandler} className="flex flex-col gap-4">
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Your Username"
              className="input-field"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input-field"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input-field"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <label className="font-bold hidden" htmlFor="image">
              Image
            </label>
            <input
              id="image"
              className="w-[50%] py-2 px-2 rounded-lg text-black"
              name="image"
              value={data.image}
              onChange={(e) => {
                setData({
                  ...data,
                  image: e.target.value,
                });
              }}
              type="hidden"
            />
            <button type="submit" className="submit-button">
              Register
            </button>
          </form>
        </div>
        <div className="blog-image-section w-1/3 ml-8">
          <h2 className="text-white font-semibold text-center mb-4">
            Blog Image
          </h2>
          <form
            onSubmit={imageFormHandler}
            className="flex flex-col gap-4 items-center"
          >
            <input type="file" accept="image/*" onChange={imageHandler} />
            <button type="submit" className="upload-button">
              Add Image
            </button>
          </form>
          <div className="image-preview">
            {previewImage && (
              <img src={previewImage} alt="Preview" className="w-full h-full" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
