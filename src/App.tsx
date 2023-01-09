import { useEffect, useState } from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import SessionBar from "./components/SessionBar";
import SessionLengths from "./components/SessionLengths";
import {
  sessionCount,
  sessionLengths,
  getBreakLength,
} from "./utils/constants";
import "./App.css";

function App() {
  const [session, setSession] = useState(1);
  const [sessionLength, setSessionLength] = useState(sessionLengths.at(0)!);
  const [breakLength, setBreakLength] = useState(getBreakLength(sessionLength));
  const [work, setWork] = useState(true);
  const [time, setTime] = useState(sessionLength);

  const reset = () => {
    setSession(1);
    setTime(sessionLength);
    setWork(true);
  };

  const updateSession = () => {
    if (session === sessionCount) {
      setSession(1);
    } else {
      setSession((session) => session + 1);
    }
  };

  const updateSessionLength = (length: number) => {
    setSessionLength(length);
    reset();
    updateTime(length);
  };

  const updateWorkMode = () => {
    setWork((work) => !work);
  };

  const updateTime = (time: number) => {
    setTime(time);
  };

  useEffect(() => {
    setBreakLength(getBreakLength(sessionLength));
  }, [sessionLength]);

  return (
    <div className={`App ${work ? "" : "breakMode"}`}>
      <Header reset={reset} />
      {work ? <h1>Work In Progress...</h1> : <h1>On Break!</h1>}
      <Timer
        time={time}
        setTime={updateTime}
        work={work}
        updateWorkMode={updateWorkMode}
        updateSession={updateSession}
        sessionLength={sessionLength}
        breakLength={breakLength}
      />
      <SessionBar session={session} />
      <SessionLengths
        sessionLength={sessionLength}
        updateSessionLength={updateSessionLength}
      />
    </div>
  );
}

export default App;
