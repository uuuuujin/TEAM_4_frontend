import styled from 'styled-components';
import TimerImage from '../../assets/images/timer-background.png';

export const PomodoroTimerContainer = styled.div`
  background-image: url(${TimerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 29.5vw;
  height: 29.5vw;
  display: flex;
  justify-content: center;
  // align-items: center;
  position: relative;
`;

export const TimerTextContainer = styled.div`
  display: flex;
  position: absolute;
  top: 52%;
  transform: translate(0, -60%);
`;

export const TimerText = styled.div`
  color: #70ff64;
  font-size: 6.25vw;
  width: 7vh;
  text-align: center;
`;

export const TimerColon = styled(TimerText)`
  width: 30px;
`;
