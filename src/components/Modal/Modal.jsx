import './Modal.scss';
import CN from 'classnames';
import { BackwardsTimer } from '../Timer/BackwardsTimer';

export const Modal = ({
  open,
  setOpen
}) => {
  return (
    <div className={CN("Modal", { "is-active": open })}>
      <button
        href="#"
        className="Modal__close"
        onClick={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
      ></button>

      <div className="Modal__trigger">+100%</div>

      <BackwardsTimer open={open} />

      <h1 className="Modal__name">Увеличьте свой депозит!</h1>

      <p className="Modal__total">
        <span className="Modal__total--sum">$150,00</span> будет зачислено вам
        на счет
      </p>

      <button className="Modal__button">Пополнить</button>

      <p className="Modal__info">
        При пополнении счета с банковской карты списание средств происходит по
        курсу банка клиента
      </p>

      <a
        className="Modal__more"
        href="/"
        onClick={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
      >
        Подробнее
      </a>
    </div>
  );
}
