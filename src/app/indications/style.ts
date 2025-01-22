import styled from "styled-components";

export const Header = styled.header`
  margin: 20px auto;
`;

export const Main = styled.main`
  form {
    label,
    input {
      text-align: left;
    }

    label {
      color: var(--primary);
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Input = styled.input`
  margin-top: 10px;
  text-align: center;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 10px;
`;

export const Message = styled.p`
  text-align: center;
  color: red;
  font-size: 14px;
`;
