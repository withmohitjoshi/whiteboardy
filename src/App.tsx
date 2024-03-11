import { useMemo, useState } from "react";
import { Header, Sidebar } from "./Components";
import Canvas from "./Components/Canvas";

function App() {
  const [activeBoard, setActiveBoard] = useState(0);
  const [boardState, setBoardState] = useState([Canvas]);
  const CurrentBoard = useMemo(
    () => boardState[activeBoard],
    [activeBoard, boardState]
  );
  
  return (
    <div id="app">
      <Header {...{ activeBoard, setActiveBoard, boardState }} />
      <main id="main">
        <Sidebar {...{ setBoardState, setActiveBoard }} />
        <section className="canvas-container">
          <CurrentBoard />
        </section>
      </main>
    </div>
  );
}
export default App;
