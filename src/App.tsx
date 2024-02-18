import { Header, Sidebar } from './Components';

function App() {
  return (
    <div id='app'>
        <Header />
        <main id='main'>
          <Sidebar />
          <section className='canvas-container'>
            <canvas />
          </section>
        </main>
      </div>
  );
}
export default App;
