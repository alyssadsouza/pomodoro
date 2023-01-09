import "../App.css";
import { sessionCount } from "../utils/constants";

interface SessionBarProps {
  session: number;
}

function SessionBar({ session }: SessionBarProps) {
  const renderCircles = (count: number, complete: boolean) => {
    var circles = [];
    for (var i = 0; i < count; i++) {
      circles.push(
        <div className={`circle ${complete ? "complete" : ""}`} key={i}></div>
      );
    }
    return circles;
  };

  return (
    <div className="SessionBar">
      {renderCircles(session, true)}
      {renderCircles(sessionCount - session, false)}
    </div>
  );
}

export default SessionBar;
