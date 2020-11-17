import './BackwardsTimer.scss';
import { useEffect, useState } from 'react';
import Timer from 'react-compound-timer';

export const BackwardsTimer = ({ open, setOpen }) => {
  const [time, setTime] = useState(0);
  console.log(time);

  useEffect(() => {
    setTime(16 * 60 * 1001);
  }, []);

  if (open) {
    setTimeout(() => {
      setOpen(false);
    }, time);
  }

  return (
    <div className="Timer">
      <div className="Timer__box">
        <div className="Timer__img"></div>
        {open ? (
          <Timer
            initialTime={time}
            direction="backward"
            formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
          >
            {() => (
              <>
                <Timer.Hours />:
                <Timer.Minutes />:
                <Timer.Seconds />
              </>
            )}
          </Timer>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
