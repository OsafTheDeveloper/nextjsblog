import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const User = ({ children }) => {
  const [user, setUser] = useState({});
  console.log(user); 

  const userData = async () => {
    try {
      const res = await axios.get("/api/user/profile");
      console.log(res.data.data); 
      setUser(res.data); 
    } catch (error) {
      console.log(error, "from 10 line");
    }
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export default User;
