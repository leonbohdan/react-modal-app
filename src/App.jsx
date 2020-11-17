import './App.scss';
import { useState } from 'react';
import { Modal } from './components/Modal/Modal';

function App() {
  const [open, setOpen] = useState(false);

  console.log(open);

  return (
    <div className="App">

      {open ? (
        ''
      ) : (
        <button
          type="button"
          className="App__button"
          onClick={() => {
            setOpen(true);
          }}
        >
          Открыть модалку
        </button>
      )}

      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
