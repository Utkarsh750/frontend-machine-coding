import React from "react";

const CountDownTimer = () => {
  return (
    <div className="app">
      <h1 className="heading">Countdown Timer</h1>
      <div className="input__container">
        <div className="input__box">
          <input id="hours" placeholder="HH" />
          <input id="hours" placeholder="HH" />
          <input id="hours" placeholder="HH" />
        </div>
        <button className="countdown__timer">Start</button>
      </div>
    </div>
  );
};

export default CountDownTimer;
