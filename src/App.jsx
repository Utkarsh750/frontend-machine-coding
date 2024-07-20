import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import StarRating from "./components/StarRating";
import Pagination from "./components/Pagination";
import CountDownTimer from "./components/CountDownTimer";
import CRUDONREACT from "./components/CRUD_ON_REACT";
import { FAQComponent } from "./components/FAQs/FAQ";
import Todos from "./components/Todos";
import { Debouncing } from "./components/Debouncing";
import ReactSelectApp from "./components/React-Select";
import ShuffleItems from "./components/ShuffledItems";

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
        <ShuffleItems />
        {/* <ReactSelectApp /> */}
        {/* <Pagination /> */}
        {/* <StarRating /> */}
        {/* <CountDownTimer /> */}
        {/* <CRUDONREACT /> */}
        {/* <FAQComponent /> */}
        {/* <Todos /> */}
        {/* <Debouncing /> */}
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
