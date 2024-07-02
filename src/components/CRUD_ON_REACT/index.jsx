import axios from "axios";
import React, { useEffect, useState } from "react";

function CRUDONREACT() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const myDetails = () => {
    axios
      .post("https://6683ac924102471fa4cae5be.mockapi.io/details", {
        name: name,
        age: 23,
        phone: 8709983647,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://6683ac924102471fa4cae5be.mockapi.io/details")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={myDetails}>Get Details</button>

      <div>
        {data.map((item) => (
          <h2>{item.name}</h2>
        ))}
      </div>
    </div>
  );
}

export default CRUDONREACT;
