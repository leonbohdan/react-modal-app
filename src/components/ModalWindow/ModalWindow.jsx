import './ModalWindow.scss';
import { useState } from 'react';
import CN from 'classnames';
import { BackwardsTimer } from '../Timer/BackwardsTimer';
import { Boxes } from '../Boxes/Boxes';
import { Select, Modal, Button, Space } from "antd";
import 'antd/dist/antd.css';

export const ModalWindow = ({
  open,
  setOpen
}) => {
  let initialBoxes = [
    { id: 1, up: 50, get: 100, active: false },
    { id: 2, up: 100, get: 200, active: false },
    { id: 3, up: 500, get: 1000, active: false },
  ];

  const { Option } = Select;
  const [boxes, setBoxes] = useState(initialBoxes);
  const [sum, setSum] = useState(0);
  const [cardType, setCardType] = useState('Банковская карта');
  
  console.log(sum);
  console.log(cardType);

  function handleChange(value) {
    setCardType(value);
  }

  function handleClose() {
    setTimeout(() => {
      setBoxes(
        boxes.map((box) => {
          if (box.active) {
            box.active = false;
          }

          return box;
        }),
      );

      setSum(0);
    }, 1000);
  }

  function warning() {
    Modal.warning({
      title: "Операция не доступна!",
      content: "Выберите сумму пополнения!",
    });
  }

  function success() {
    Modal.success({
      title: "Операция успешна!",
      content: (
        <div>
          <p>{`На ваш счет будет зачислено: $${sum}.`}</p>
          <p>{`Способ оплаты: ${cardType}.`}</p>
        </div>
      ),
      onOk() {
        handleClose();
        setTimeout(() => {
          setOpen(false);
        }, 500);
      },
    });
  }

  function handleSubmit() {
    if (sum === 0) {
      warning();
    } else {
      success();
    }
  }

  return (
    <div className={CN("Modal", { "is-active": open })}>
      <button
        href="#"
        className="Modal__close"
        onClick={(event) => {
          event.preventDefault();
          setOpen(false);
          handleClose();
        }}
      ></button>

      <div className="Modal__trigger">+100%</div>

      <BackwardsTimer
        className="Modal__timer"
        open={open}
        setOpen={setOpen}
      />

      <h1 className="Modal__name">Увеличьте свой депозит!</h1>

      <select
        className="Modal__select"
        value={cardType}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      >
        <option className="Modal__option" value="Банковская карта">
          Банковская карта
        </option>
        <option className="Modal__option" value="Биткоин">
          Биткоин
        </option>
        <option className="Modal__option" value="Выставить счет">
          Выставить счет
        </option>
      </select>

      <Boxes setSum={setSum} boxes={boxes} setBoxes={setBoxes} />

      <p className="Modal__total">
        <span className="Modal__total--sum">
          {`$${sum},`}
          <span className="Modal__total--zeros">00</span>
        </span>{" "}
        будет зачислено вам на счет
      </p>

      <button
        className="Modal__button"
        onClick={() => {
          handleSubmit();
        }}
      >
        Пополнить
      </button>

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
