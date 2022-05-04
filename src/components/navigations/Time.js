import React from "react";
import { useEffect, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());
  const current = new Date();
  const day = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <div className="time-container">
        <span>{day}</span>
        <span>{date.toLocaleTimeString()}</span>
      </div>
    </>
  );
};

export default Time;
