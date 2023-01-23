import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useDelete = (email) => {
  const { user } = useContext(AuthContext);
  const [isDelete, setIsDelete] = useState("");
  useEffect(() => {
    if (email) {
      fetch(
        `https://automoli-server-mohammdashik.vercel.app/delete/user/?email=${user?.email}`,
        {
          method: "DELETE",
          headers: {
            email: email,
            authorization: localStorage.getItem("automoliToken"),
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsDelete(data.acknowledged);
        });
    }
  }, [email]);
  return [isDelete];
};
export default useDelete;
