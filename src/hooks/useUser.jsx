import { getUser } from "../api/user";
import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser({
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((result) => {
        setUser(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching getUser:", error.message);
      });
  }, []);

  return user;
};

export default useUser;