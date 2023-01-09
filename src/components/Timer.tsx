import { useState, useEffect } from "react";
import "../App.css";
import { displayTime } from "../utils/constants";

interface TimerProps {
  time: number;
  setTime: (time: number) => void;
  work: boolean;
  updateWorkMode: () => void;
  updateSession: () => void;
  sessionLength: number;
  breakLength: number;
}

function Timer({
  time,
  setTime,
  work,
  updateWorkMode,
  updateSession,
  sessionLength,
  breakLength,
}: TimerProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTime(sessionLength);
  }, [sessionLength]);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    if (!isActive) {
      clearInterval(interval);
    }
    if (time === 0) {
      setIsActive(false);
      if (work) {
        setTime(breakLength);
        console.log(breakLength);
      } else {
        setTime(sessionLength);
        updateSession();
      }
      updateWorkMode();
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className="Timer">
      <div className="outer">
        <div className="clock" onClick={() => setIsActive((active) => !active)}>
            {displayTime(time)}
        </div>
      </div>
      <svg className="progress" viewBox="-1 -1 2 2">
        <circle cx="0" cy="0" r="1" />
      </svg>
    </div>
  );
}

export default Timer;
