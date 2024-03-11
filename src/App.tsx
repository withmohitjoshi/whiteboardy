import { useState } from 'react';
import { Header, Sidebar } from './Components';
import Canvas from './Components/Canvas';

function App() {
  const [currentBoard, setCurrentBoard] = useState(1);
  const [canvasArray, setCanvasArray] = useState([Canvas]);
  return (
    <div id='app'>
      <Header canvasArray={canvasArray} {...{ setCurrentBoard, currentBoard }} />
      <main id='main'>
        <Sidebar {...{ setCanvasArray }} />
        <section className='canvas-container'>
          {canvasArray.map((CanvasComponent, index) => {
            return (
              <CanvasComponent
                key={index}
                style={{
                  display: currentBoard - 1 !== index ? ' none' : '',
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
