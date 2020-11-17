import './BackwardsTimer.scss';
import { useEffect, useState } from 'react';
import Timer from 'react-compound-timer';

export const BackwardsTimer = ({ open }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(16 * 60 * 1001);
  }, []);

  return (
    <div className="Timer">
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
  );
};
