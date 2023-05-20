const { default: styled } = require('styled-components');

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FeedbackBtn = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  margin: 0 8px;
  ${({ name }) =>
    name === 'good' &&
    `
      background-color: #4CAF50;
      color: white;
    `}

  ${({ name }) =>
    name === 'neutral' &&
    `
      background-color: #ccc;
      color: #333;
    `}

  ${({ name }) =>
    name === 'bad' &&
    `
      background-color: #f44336;
      color: white;
    `}

  &:hover {
    opacity: 0.8;
  }
`;

export { BtnWrap, FeedbackBtn };
