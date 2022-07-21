import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import { useAppSelector } from '../../hooks/index.hook';
import { selectTimerCycle } from '../../store/modules/timer/timer.select';
import { PomoCheckContainer, PomoCheckImage } from './pomo-counting.style';

function CheckPomoCycle(): JSX.Element {
  const cycleCount = useAppSelector(selectTimerCycle);
  const offArray = useMemo(() => [...Array(4 - cycleCount)], [cycleCount]);
  const progressArray = useMemo(() => [...Array(cycleCount)], [cycleCount]);

  return (
    <PomoCheckContainer>
      {progressArray.map(() => (
        <PomoCheckImage
          key={nanoid()}
          src={`${process.env.REACT_APP_IMG_URL}/timer/pomo_check_on.png`}
          alt="pomo_check_on"
        />
      ))}
      {offArray.map(() => (
        <PomoCheckImage
          key={nanoid()}
          src={`${process.env.REACT_APP_IMG_URL}/timer/pomo_check_off.png`}
          alt="pomo_check_off"
        />
      ))}
    </PomoCheckContainer>
  );
}

export default CheckPomoCycle;
