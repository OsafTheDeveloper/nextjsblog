import axios from "axios";
import React from "react";

const Single = ({ blogData }) => {
  const data = blogData;
  return (
    <div className="w-[100%] h-[100%] overflow-hidden">
      <div className="mt-[13vh] font-semibold flex items-center justify-center">
        <h1>{data.title}</h1>
      </div>
      <div className="w-[50%] h-[50%] mx-auto">
        <img
          className="w-[100%] h-[100%] rounded-xl"
          src={data.image}
          alt="image"
        />
      </div>
      <div className="w-fit ml-3 bg-blue-700 py-2 px-8 rounded-3xl">
        <h1 className="font-semibold ">{data.category}</h1>
      </div>
      <div className="px-4 pb-10 mt-2">
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  try {
    const res = await axios.get(`http://localhost:3000/api/blog/${id}`);
    const blogData = res.data.data;
    return {
      props: {
        blogData,
      },
    };
  } catch (error) {
    console.log(error, "from react dynamic page");
    return {
      props: {
        blogData: null,
      },
    };
  }
}

export default Single;
