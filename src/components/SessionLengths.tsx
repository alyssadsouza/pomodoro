import "../App.css";
import { sessionLengths } from "../utils/constants";

interface SessionLengthsProps {
  sessionLength: number;
  updateSessionLength: (length: number) => void;
}

function SessionLengths({
  sessionLength,
  updateSessionLength,
}: SessionLengthsProps) {
  return (
    <div className="SessionLengths">
      <div className="buttons">
        {sessionLengths.map((length) => (
          <div
            key={length}
            className={sessionLength === length ? "selected" : ""}
            onClick={() => updateSessionLength(length)}
          >
            {length / 60} min
          </div>
        ))}
      </div>
    </div>
  );
}

export default SessionLengths;
