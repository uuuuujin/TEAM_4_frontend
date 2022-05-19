import styled from 'styled-components';

export const CharacterContainer = styled.div`
  width: 150px;
  text-align: center;
  display: inline-block;
`;

export const InvertedTriangleIcon = styled.img`
  width: 30px;
  cursor: pointer;
`;

export const Nickname = styled.p`
  margin: 0;
  -webkit-text-stroke: 0.8px #000;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
`;

export const CharacterWrap = styled.div`
  position: relative;
  height: 218px;
`;

export const ShelfImg = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const CharacterImgWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -74%);
`;

export const CharacterImg = styled.img`
  width: 150px;
  height: 150px;
`;
