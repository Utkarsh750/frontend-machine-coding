import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import StarRating from "./components/StarRating";
import Pagination from "./components/Pagination";
import CountDownTimer from "./components/CountDownTimer";

function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const time = setInterval(() => {
      if (progress < 100) {
        setProgress((p) => p + 1);
      }
    }, 20);

    return () => {
      clearInterval(time);
    };
  }, [progress]);
  return (
    <>
      <div className="App">
        <h1>Front-end Machine Coding Questions</h1>
        {/* <Pagination /> */}
        {/* <StarRating /> */}
        <CountDownTimer />

        {/* Progress Bar */}
        {/* <div className="App">
          <ProgressBar progress={progress} color="red" />{" "}
        </div>
        <div className="App">
          <ProgressBar progress={progress} color="lightgreen" />{" "}
        </div>
        <div className="App">
          <ProgressBar progress={progress} color="lightblue" />{" "}
        </div>
        <div className="App">
          <ProgressBar progress={progress} color="yellow" />{" "}
        </div> */}
      </div>
    </>
  );
}

export default App;
