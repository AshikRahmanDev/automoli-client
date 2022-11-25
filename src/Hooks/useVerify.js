const useVerify = (email) => {
  if (email) {
    fetch(`http://localhost:5000/verify/?email=${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }
  const data = [];
  return data;
};
export default useVerify;
