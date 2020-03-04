import styled from "styled-components";

export const Button = styled.button`
  --shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  background-color: #285aff;
  border: none;
  border-radius: 12px;
  box-shadow: var(--shadow);
  max-width: 240px;
  font-size: 28px;
  line-height: 100%;
  height: 54px;
  transition: all 0.15s ease;
  outline: none;
  width: 100%;

  &:hover {
    background-color: #2251ed;
    transform: scale(1.05);
  }

  &:focus {
    box-shadow: var(--shadow), 0px 0px 0px 2px #4589ff;
  }

  &:active {
    background-color: #002d9c;
    transform: translateY(6px);
  }
`;
