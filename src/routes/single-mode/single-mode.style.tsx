import styled from 'styled-components';

export const Container = styled.div<{ pomoState: string }>`
  height: 100vh;
  background-image: url(${process.env.REACT_APP_IMG_URL}/background/background_tree_day.png),
    url(${process.env.REACT_APP_IMG_URL}/background/background_land_day.png),
    url(${process.env.REACT_APP_IMG_URL}/background/background_sky_day.png);
  background-size: cover, cover, cover;
  background-position: bottom, bottom, center;
  background-repeat: no-repeat, no-repeat, no-repeat;
`;

export const TimerContainer = styled.div`
  // width: 550px;
  // margin: 0 auto;
  position: absolute;
  top: 52%;
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
