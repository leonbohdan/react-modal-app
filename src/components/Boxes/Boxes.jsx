import './Boxes.scss';
import { useEffect, useState } from 'react';
import CN from 'classnames';

export const Boxes = ({ setSum, boxes, setBoxes }) => {
  const [active, setActive] = useState(false);

  console.log(boxes);
  console.log(active);

  const selectBox = ({ id, get }) => {
    setSum(get);

    setBoxes(
      boxes.map((box) => {
        if (box.active) {
          box.active = false;
        }

        return box;
      }),
    );

    setBoxes(
      boxes.map((box) => {
        if (box.id === id) {
          box.active = !box.active;
        }

        return box;
      }),
    );
  };

  return (
    <div className="Boxes">
      {boxes.map((box) => (
        <div
          className={CN("Boxes__box", { "is-active": box.active })}
          key={box.id}
          onClick={() => {
            selectBox(box);
          }}
        >
          <div className="Boxes__up">Пополнить на</div>
          <div className="Boxes__up--sum">{`$ ${box.up}`}</div>
          <div className="Boxes__get">Получить</div>
          <div className="Boxes__get--sum">{`$ ${box.get}`}</div>
        </div>
      ))}
    </div>
  );
};
