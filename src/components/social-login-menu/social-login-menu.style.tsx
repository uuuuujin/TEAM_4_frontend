import styled from 'styled-components';

export const SocialLoginMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 180px;
  padding: 20px 0;
`;

export const LoginButton = styled.img`
  cursor: pointer;
  width: 376px;

  &.mypage {
    width: 260px;
  }
`;
