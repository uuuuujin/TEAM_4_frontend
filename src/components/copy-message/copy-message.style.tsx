import styled from 'styled-components';

export const StateBarContainer = styled.div`
  width: 250px;
  padding: 1em;
  border-radius: 5px;
  background-color: #4d4d4d;
  color: #fff;
  position: absolute;
  bottom: 20px;
  left: 20px;

  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
