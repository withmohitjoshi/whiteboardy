import { Header, Sidebar } from "./Components";
import Canvas from "./Components/Canvas";

function App() {
  return (
    <div id="app">
      <Header />
      <main id="main">
        <Sidebar />
        <section className="canvas-container">
          <Canvas />
        </section>
      </main>
    </div>
  );
}
export default App;
