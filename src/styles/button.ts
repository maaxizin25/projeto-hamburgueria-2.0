import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.disabled
      ? "var(--gray-100)"
      : props.color
      ? `var(${props.color})`
      : "var(--color-primary)"};
  height: 60px;
  border-radius: 8px;
  color: ${(props) =>
    props.colorText ? `var(${props.colorText})` : "var(--gray-0)"};
  font-weight: 600;
`;
