import { Header, Sidebar } from './Components';

function App() {
  return (
    <div id='app'>
      <div className='flex flex-col gap-4'>
        <Header />
        <main id='main'>
          <Sidebar />
          <section className='canvas-container'>
            <canvas />
          </section>
        </main>
      </div>
    </div>
  );
}
export default App;
