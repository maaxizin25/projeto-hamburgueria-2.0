import styled from "styled-components";

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray-100);
  border-radius: 4px;
  width: 600px;
  padding: 20px;
  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .description-text {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .goToRegister {
    background-color: var(--gray-100);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    border-radius: 8px;
    font-weight: 600;
    color: var(--gray-300);
  }
  .goToLogin {
    font-size: 14px;
    cursor: pointer;
    text-decoration: underline solid var(--gray-300);
    color: var(--gray-300);
  }
  .spanRegister {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .error-input {
    color: var(--negative);
  }
  .buttonRegister {
    margin-top: 20px;
  }
  @media (max-width: 950px) {
    width: 100%;
  }
`;
