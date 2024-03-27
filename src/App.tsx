import { Header, Sidebar } from "./Components";
import { useCanvasBoard } from "./Context/CanvasBoard";

function App() {
  const { canvasArray, activeBoard } = useCanvasBoard();

  return (
    <div id="app">
      <Header />
      <main id="main">
        <Sidebar />
        <section className='canvas-container'>
        {canvasArray.map((CanvasComponent, index) => {
          return (
            <CanvasComponent
              key={index}
              style={{
                display: activeBoard - 1 !== index ? " none" : "",
              }}
            />
          );
        })}
        </section>
      </main>
    </div>
  );
}
export default App;
