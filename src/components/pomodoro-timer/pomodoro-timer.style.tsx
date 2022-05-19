import styled from 'styled-components';
import TimerImage from '../../assets/images/timer-background.png';

export const PomodoroTimerContainer = styled.div`
  background-image: url(${TimerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 550px;
  height: 550px;
  display: flex;
  justify-content: center;
  // align-items: center;
  position: relative;
`;

export const TimerTextContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translate(0, -63%);
`;

export const TimerText = styled.div`
  color: #f9ffba;
  font-size: 120px;
  width: 70px;
  text-align: center;
`;

export const TimerColon = styled(TimerText)`
  width: 30px;
`;
