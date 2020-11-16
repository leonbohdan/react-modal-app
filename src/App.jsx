import './App.scss';
import { Modal } from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <button className="App__button">Открыть модалку</button>
      <Modal />
    </div>
  );
}

export default App;
