import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  console.log(user,"from 8")
  const { id } = router.query;

  const fetchUser = async () => {
    try {
      const res = await axios.get(`/api/user/${id}`);
      console.log(res.data.data);
      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);
  return (
    <div>
      {
        <div>
          <h1>{user.username}</h1>
        </div>
      }
    </div>
  );
};

export default Profile;
