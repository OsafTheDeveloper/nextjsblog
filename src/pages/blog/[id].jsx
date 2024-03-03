import axios from "axios";
import React from "react";

const Single = ({ blogData }) => {
  return (
    <div className="">
      <div className="container mx-auto px-6 py-6 ">
        <div>
          
        </div>
        <div className="w-[30%] h-[30%] mx-auto mb-6">
          <img
            className="w-[100%] h-[100%] rounded-xl"
            src={blogData.image}
            alt={blogData.title}
          />
          <h1 className="font-semibold text-2xl text-center mb-6">
            {blogData.title}
          </h1>
        </div>
        <div>
          <h2 className="font-semibold text-lg">
            Category: {blogData.category}
          </h2>
        </div>
        <div>
          <p className="text-lg">{blogData.desc}</p>
        </div>
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
