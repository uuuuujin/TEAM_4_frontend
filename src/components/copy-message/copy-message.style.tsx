import styled from 'styled-components';

export const StateBarContainer = styled.span`
  display: inline-block;
  padding: 0.5em 1em;
  border: 1px solid #f43f59;
  border-radius: 5px;
  background-color: #ffcad5;
  letter-spacing: 0.08rem;

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
