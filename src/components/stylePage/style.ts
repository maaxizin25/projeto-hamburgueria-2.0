import styled from "styled-components";

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .logo {
    width: 230px;
  }
  .styleImg {
    width: 181px;
  }
  span {
    display: flex;
    width: 377px;
    height: 95px;
    border: 1px solid var(--gray-100);
    align-items: center;
    gap: 20px;
    padding: 15px;
  }
  span > img {
    padding: 20px;
    border-radius: 5px;
    background: rgba(39, 174, 96, 0.1);
  }
  span > p {
    color: var(--gray-300);
  }
  @media (max-width: 950px) {
    span {
      width: 100%;
    }
    .styleImg {
      display: none;
    }
  }
`;
