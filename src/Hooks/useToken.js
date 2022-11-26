import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt/?email=${email}`)
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
