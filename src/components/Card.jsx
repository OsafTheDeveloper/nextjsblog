import React from "react";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-3">
        {data.map((val) => (
          <div key={val._id} className="max-w-lg mt-20 mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
              <img className="rounded-t-lg" src={val.image} alt="image" />
              <div className="p-5">
                <h5 className="title-heading text-gray-900 font-bold  tracking-tight mb-2">
                  {val.title}
                </h5>
                <p className="font-normal subdesc-heading text-gray-700 mb-3">
                  {val.subdesc}
                </p>
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                  href={`/blog/${val._id}`}
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

export default Card;
