import './App.scss';
import { useState } from 'react';
import { ModalWindow } from "./components/ModalWindow/ModalWindow";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      {open ? (
        ""
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

      <ModalWindow
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}

export default App;
