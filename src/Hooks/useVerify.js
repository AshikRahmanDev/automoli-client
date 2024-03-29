import { useEffect, useState } from "react";

const useVerify = (email) => {
  const [isVerified, setIsVerified] = useState("");
  useEffect(() => {
    if (email) {
      fetch(
        `https://automoli-server-mohammdashik.vercel.app/verify/?email=${email}`,
        {
          method: "PUT",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            setIsVerified(true);
          }
        });
    }
  }, [email]);
  return [isVerified];
};
export default useVerify;
