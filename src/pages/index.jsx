import axios from "axios";
import Link from "next/link";
import React from "react";

const Index = ({ data }) => {
  return (
    <div className="overflow-x-hidden">
      <div className="w-[100vw] h-[100vh] object-cover mx-auto">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D"
          alt="Cover Image"
        />
        <div className="absolute bottom-[10%] font-extrabold text-2xl  left-[47%] ">
          <h1 className="text-black ">Swipe Down ↓</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {data.map((value) => (
          <div key={value._id} class="card">
            <div class="card__header">
              <img
                src={value.image}
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div class="card__body">
              <span class="tag tag-blue">{value.category}</span>
              <h4>{value.title}</h4>
              <p>{value.subdesc}</p>
            </div>
            <div className="btn">
              <Link href={"/blog"}>
                <button
                  className="px-8 py-2 rounded-3xl font-semibold bg-blue-400"
                  type="button"
                >
                  Read More
                </button>
              </Link>
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

export default Index;
