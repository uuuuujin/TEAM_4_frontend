import styled from 'styled-components';

export const TimerContainer = styled.div`
  // width: 550px;
  // margin: 0 auto;
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CharacterContainer = styled.div`
  position: absolute;
  top: 41%;
  left: calc(50% + 17vw);
`;

export const StateBarContainer = styled.div`
  position: absolute;
  top: calc(50% + 15vw);
  left: 50%;
  transform: translate(-50%, 0);
`;

export const PomoCheckContainer = styled.div`
  width: 140px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 27%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const PomoCheckImage = styled.img`
  width: 24px;
  height: 24px;
`;
