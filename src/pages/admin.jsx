import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const admin = ({ blogData }) => {
  // Use useState To preview The Image
  const [previewimage, setPreviewImage] = useState(null);
  // Use useState To send The Image on clouddinary
  const [image, setImage] = useState("");
  // // Use useState To send The Data on Backend
  const [blogdata, setBlogData] = useState({
    title: "",
    desc: "",
    category: "",
    image: "",
    subdesc: "",
  });
  // Input Handler Trigger The All changes In input field
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogdata, [name]: value });
  };

  //ImageInput Handler Get The Selected File And Convert into url
  const imageHandler = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };
  // Imagefrom Handler To handle The image and Sendimage to Cloudinary
  async function imageFormhandler(e) {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "blog_images");
      data.append("cloud_name", "dzeveeijn");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dzeveeijn/image/upload",
        data
      );
      console.log(res);
      if (res.status === 200) {
        toast.success("Image uploaded");
        // Update the image field in the state
        setBlogData({ ...blogdata, image: res.data.url });
      }
    } catch (error) {
      toast.error("Image not uploaded uploaded");
    }
  }

  // FromHandler Send Data In backend
  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/blog/", blogdata);
      if (res.status === 201) {
        setBlogData({
          title: "",
          desc: "",
          category: "",
          image: "",
          subdesc: "",
        });
        toast.success("Blog Added successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Blog Not Added");
    }
  };
  console.log(blogdata);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[100vw] h-[100vh] overflow-x-hidden bg-zinc-800 ">
        <div className="flex items-center justify-center">
          <h1 className="font-semibold text-white text-[2rem]">
            Admin Dashboard
          </h1>
        </div>
        <div className="forms flex justify-between pt-6 w-[100%] h-[100%] ">
          <div className="w-[70%] h-[90%] bg-black rounded-xl p-4">
            <form
              onSubmit={formHandler}
              className="flex items-center flex-col gap-2"
            >
              <h1 className="text-white font-bold">Blogs Details</h1>
              <label className="font-medium text-white" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                className="w-[50%] py-2 px-2 rounded-lg"
                name="title"
                autoComplete="off"
                value={blogdata.title}
                onChange={inputHandler}
                type="text"
              />
              <label className="font-medium text-white" htmlFor="subdesc">
                SubDesc
              </label>
              <input
                id="subdesc"
                className="w-[50%] py-2 px-2 rounded-lg"
                name="subdesc"
                autoComplete="off"
                value={blogdata.subdesc}
                onChange={inputHandler}
                type="text"
              />
              <label className="font-medium text-white" htmlFor="desc">
                Description
              </label>
              <textarea
                autoComplete="off"
                id="desc"
                className="w-[50%] py-3  px-3 rounded-lg"
                name="desc"
                value={blogdata.desc}
                onChange={inputHandler}
                type="text"
              />
              <label className="font-medium text-white" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                className="w-[50%] py-2 px-2 rounded-lg"
                name="category"
                value={blogdata.category}
                onChange={inputHandler}
                type="text"
              >
                <option>Select Category</option>
                <option>Techonolgy</option>
                <option>Cars</option>
                <option>Science</option>
                <option>Politics</option>
              </select>
              <label className="font-medium text-white" htmlFor="image">
                Image
              </label>
              <input
                autoComplete="off"
                id="image"
                className="w-[50%] py-2 px-2 rounded-lg"
                name="image"
                value={blogdata.image}
                onChange={inputHandler}
                type="text"
              />

              <button
                className="bg-green-600 py-2 px-8 rounded-3xl font-semibold"
                type="submit"
              >
                Add Blog
              </button>
            </form>
          </div>
          <div className="w-1/4 h-4/5 overflow-x-hidden bg-black rounded-xl p-8 flex flex-col justify-center items-center">
            <h1 className="text-white font-semibold">Blog Image</h1>
            <form
              onSubmit={imageFormhandler}
              className="flex flex-col gap-4 p-4"
            >
              <input
                className="text-black bg-white rounded-2xl font-semibold"
                type="file"
                accept="image"
                onChange={imageHandler}
              />
              <button
                className="bg-green-600 font-semibold py-2 px-4 rounded-3xl"
                type="submit"
              >
                Add Image
              </button>
            </form>
            <div className="w-[90%] h-[40%]">
              <img className="w-full h-full" src={previewimage} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[100%] grid grid-cols-3 gap-2">
          {blogData.map((value) => (
            <div key={value._id}>
              <div className="max-w-lg mx-auto">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                  <Link href="/blog">
                    <img className="rounded-t-lg" src={value.image} alt="" />
                  </Link>
                  <div className="p-5">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                      {value.title}
                    </h5>
                    <p className="font-normal text-gray-700 mb-3">
                      {value.subdesc}
                    </p>
                    <Link
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                      href="/blog"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  try {
    const res = await axios.get("http://localhost:3000/api/blog");
    const blogData = res.data.data;
    return {
      props: {
        blogData,
      },
    };
  } catch (error) {
    console.log(error, "from serverprops");
    return {
      props: {
        blogData: null,
      },
    };
  }
}
export default admin;
