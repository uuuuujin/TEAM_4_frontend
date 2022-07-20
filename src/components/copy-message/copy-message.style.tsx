import styled from 'styled-components';

export const StateBarContainer = styled.span`
  display: inline-block;
  padding: 0.5em 1em;
  border: 3px solid #000;
  border-radius: 20px;
  background-color: #ffd500;
  letter-spacing: 0.08rem;
  font-size: 18px;
  font-weight: bold;

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
