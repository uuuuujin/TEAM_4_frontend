import styled from 'styled-components';

export const ResultModalContainer = styled.div`
  padding: 0 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;
`;

export const ProfileModalBgImg = styled.div`
  background-image: url(${process.env.REACT_APP_IMG_URL}/background/background_pop.png);
  background-size: cover;
  width: 372px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
  border: 2px solid #000;
`;
export const SingleCharacter = styled.img`
  width: 150px;
  height: 150px;
  -webkit-user-drag: none;
`;

export const ResultButtonText = styled.span`
  font-family: 'neodgm';
  font-size: 20px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-32%, -50%);
`;

export const DownloadButtonText = styled(ResultButtonText)`
  color: #005fd5;
`;

export const ResultButton = styled.div<{ normalImg: string; hoverImg: string; activeImg: string }>`
  background-image: url(${({ normalImg }) => normalImg});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  width: 180px;
  height: 64px;
  // margin: 0 23px;
  padding: 0;
  position: relative;
  cursor: pointer;

  &:hover {
    background-image: url(${({ hoverImg }) => hoverImg});
    ${ResultButtonText} {
      display: none;
    }
  }

  &:active {
    background-image: url(${({ activeImg }) => activeImg});
    ${ResultButtonText} {
      display: none;
    }
  }
`;
