import React, { useEffect, useState } from "react";

const ShuffleItems = () => {
  const [items, setItems] = useState([
    "Mango",
    "Apple",
    "Grapes",
    "Orange",
    "Litchi",
    "Banana",
  ]);

  const handleShuffle = () => {
    let shuffleItems = [...items];
    for (let i = shuffleItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffleItems[i], shuffleItems[j]] = [shuffleItems[j], shuffleItems[i]];
    }

    setItems(shuffleItems);
  };

  useEffect(() => {
    const counter = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(counter);
  });

  return (
    <div>
      <h1>List of Items</h1>
      {items.map((el, index) => (
        <li key={index}>{el}</li>
      ))}

      <button onClick={handleShuffle}>Shuffle</button>
    </div>
  );
};

export default ShuffleItems;
