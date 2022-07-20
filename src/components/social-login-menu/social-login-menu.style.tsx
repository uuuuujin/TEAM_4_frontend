import styled from 'styled-components';

export const SocialLoginMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 120px;

  + div {
    padding-top: 20px;
  }
`;

export const LoginButton = styled.img`
  cursor: pointer;
  width: 376px;

  &.mypage {
    width: 260px;
  }
`;
