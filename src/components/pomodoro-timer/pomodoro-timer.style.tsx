import styled from 'styled-components';
import TimerImage from '../../assets/images/timer-background.png';

export const PomodoroTimerContainer = styled.div`
  background-image: url(${TimerImage});
  //background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 580px;
  height: 580px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -52%);
`;

export const TimerTextContainer = styled.div`
  display: flex;
`;

export const TimerText = styled.div`
  color: #f9ffba;
  font-size: 84px;
  width: 50px;
  text-align: center;
`;

export const TimerColon = styled(TimerText)`
  width: 20px;
`;
