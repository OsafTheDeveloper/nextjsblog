import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import { blogdata } from "@/pages/admin";

const index = ({ data }) => {
  
  return (
    <div className=" overflow-x-hidden relative required:">
      <div className="w-[100vw] object-cover mx-auto">
        <img
          className="w-[100%] h-[100%] "
          src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
          alt=""
        />
        <h1>Swipe Down</h1>
        <div className="flex items-center justify-center">
          <h1 className="absolute bottom-[50%] text-[2.6rem]"></h1>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {data.map((value) => (
          <div key={value._id} className="w-[80%]  mx-auto mt-5">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg">
              <div className="w-[60%] h-[60%] my-0 mx-auto">
                <img className="rounded-t-lg" src={value.image} />
              </div>
              <div className="p-5">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  {value.title}
                </h5>
                <p className="font-normal text-gray-700 mb-3">
                  {value.subdesc}
                </p>
                <Link
                  href={`/blog/${value._id}`}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  try {
    const res = await axios.get("http://localhost:3000/api/blog");
    const data = res.data.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error, "from 21 line index serverside");
    return {
      props: {
        data: null,
      },
    };
  }
}
export default index;
