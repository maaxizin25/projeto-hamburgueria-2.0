import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  max-width: 100%;
  height: 80px;
  background-color: var(--gray-0);
  display: flex;
  align-items: center;

  .container-header {
    width: 1600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .areaInputAndButtons {
    display: flex;
    gap: 20px;
  }
  .areaInput {
    display: flex;
    background-color: white;
    padding: 5px 8px;
    border-radius: 4px;
    border: 1px solid var(--gray-100);
  }
  .areaInputMobile {
    display: flex;
    background-color: white;
    padding: 5px 8px;
    border-radius: 4px;
    border: 1px solid var(--gray-100);
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    width: 70%;
  }
  input {
    width: 100%;
    border: none;
  }
  .areaButtons {
    display: flex;
    position: relative;
    gap: 10px;
  }
  .areaButtons > img {
    width: 28px;
  }
  .counterCart {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 12px;
    background-color: var(--color-primary);
    color: white;
    border-radius: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  img {
    cursor: pointer;
  }
  .searchMinimal {
    display: none;
  }
  .logo-img {
    padding-left: 10px;
  }

  @media (max-width: 480px) {
    .areaInput {
      display: none;
    }
    .counterCart {
      top: -13px;
    }
    .searchMinimal {
      display: flex;
    }
  }
`;
