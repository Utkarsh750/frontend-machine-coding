import axios from "axios";
import { useEffect, useState } from "react";

export function Debouncing() {
  const api = "https://api.postalpincode.in/pincode/";

  const [pin, setPin] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      axios
        .get(api + pin)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    }, 2000);

    return () => {
      clearTimeout(debounce);
    };
  }, [pin]);
  return (
    <>
      <h1>Debouncing Function</h1>

      <input
        type="text"
        placeholder="type here"
        onChange={(e) => setPin(e.target.value)}
      />
    </>
  );
}
