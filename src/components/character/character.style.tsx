import styled from 'styled-components';

export const CharacterContainer = styled.div`
  width: 220x;
  text-align: center;
  display: inline-block;
`;

export const TriangleIcon = styled.img`
  width: 25px;
  -webkit-user-drag: none;
`;

export const Nickname = styled.p`
  font-family: 'NotoSans-medium';
  margin: 0;
  -webkit-text-stroke: 1px #151313;
  color: #fff;
  font-size: 20px;
`;

export const CharacterWrap = styled.div`
  position: relative;
  margin-top: 5px;
  height: 218px;
`;

export const ShelfImgWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const ShelfImg = styled.img`
  -webkit-user-drag: none;
  width: 178px;
`;

export const CharacterImgWrap = styled.div`
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -74%);
`;

export const CharacterImg = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;
  -webkit-user-drag: none;
`;
