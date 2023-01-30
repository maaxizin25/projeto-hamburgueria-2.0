import styled from "styled-components";

export const ContainerCartList = styled.div`
  width: 500px;
  background-color: white;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    background-color: var(--color-primary);
    padding: 22px;
    color: white;
  }
  .header > h2 {
    font-size: 18px;
  }
  .header > p {
    cursor: pointer;
  }
  .cart-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 158px;
    justify-content: center;
    gap: 10px;
  }
  .cart-content > h2 {
    font-size: 18px;
  }
  .cart-content > p {
    font-size: 14px;
    color: var(--gray-300);
  }
  ul {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    border-bottom: 2px solid var(--gray-100);
  }
  li {
    display: flex;
    height: 82px;
    gap: 10px;
  }

  li > img {
    width: 82px;
    height: 100%;
    background-color: var(--gray-100);
    border: 10px solid var(--gray-100);
    border-radius: 8px;
  }
  li > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  li > div > p {
    display: flex;
  }
  li > div > span {
    display: flex;
    justify-content: space-between;
  }
  li > div > span > h2 {
    font-size: 18px;
  }
  li > div > span > img {
    width: 16px;
    cursor: pointer;
  }
  .cart-info {
    font-size: 14px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .cart-info > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cart-info > span > p {
    font-weight: 600;
    font-size: 14px;
    color: var(--gray-300);
  }
  .cart-info > button {
    height: 60px;
    background-color: var(--gray-100);
    color: var(--gray-300);
    font-weight: 600;
    font-size: 16px;
    border: 2px solid var(--gray-100);
    border-radius: 8px;
  }
  .count-products {
    display: flex;
    width: 50px;
    align-items: center;
    gap: 10px;
  }
  .count-products > button {
  }
`;
export const ButtonDisabledQtd = styled.button`
  border-radius: 8px;
  min-width: 30px;
  min-height: 34px;
  font-size: 20px;
  color: red;
  background-color: ${(props) =>
    props.disabled ? "var(--gray-300)" : "#F2F2F2"};
`;
