import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/yashbharda")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center text-white m-4 bg-gray-700 p-4 text-3xl">
      Github Followers : {data.followers}
      <img className="rounded-full" src={data.avatar_url} alt="git Picture"  width={300}/>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/yashbharda")
  return response.json()
}
