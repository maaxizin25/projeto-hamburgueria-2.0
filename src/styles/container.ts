import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media (max-width: 950px) {
    padding: 20px;
    flex-direction: column-reverse;
  }
`;
