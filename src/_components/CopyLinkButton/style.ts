import styled from "styled-components";

const CopyButton = styled.button<{ copied: boolean }>`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 0.9rem;
  background-color: ${({ copied }) => (copied ? "#28a745" : "#007bff")};
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.2s ease-in-out;
  min-width: 120px;
  cursor: pointer;

  &:hover {
    background-color: ${({ copied }) => (copied ? "#218838" : "#0056b3")};
  }

  ${({ copied }) =>
    copied &&
    `
    transform: scale(1.05);
    animation: bounce 0.3s ease-out;
  `}

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default CopyButton;