import './Modal.scss';
import CN from 'classnames';

export const Modal = ({ open , setOpen }) => {
  return (
    <div
      className={CN("Modal", { 'is-active': open })}
    >
      <button
        href="#"
        className="Modal__close"
        onClick={(event) => {
          event.preventDefault();
          setOpen(false)
        }}
      ></button>
      <h1>Modal</h1>
    </div>
  );
}
