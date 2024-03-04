import axios from "axios";
import React, { useState } from "react";

const about = () => {
  const [data, setData] = useState({});
  function inputhandler(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  async function formhandler(e) {
    e.preventDefault();
    const res = await axios.post("/api/user", data);
    console.log(res);
  }
  console.log(data);
  return (
    <div className="w-[100vw] h-[100vh] bg-black ">
      <form className="flex flex-col gap-9" onSubmit={formhandler}>
        <input onChange={inputhandler} name="username" type="text" />
        <input onChange={inputhandler} name="email" type="text" />
        <input onChange={inputhandler} name="password" type="text" />
        <button className="bg-red-500" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default about;
