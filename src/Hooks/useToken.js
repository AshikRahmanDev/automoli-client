import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  console.log(email);
  useEffect(() => {
    if (email) {
      fetch(
        `https://automoli-server-mohammdashik.vercel.app/jwt/?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.automoliToken) {
            localStorage.setItem("automoliToken", data.automoliToken);
            setToken(data.automoliToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
