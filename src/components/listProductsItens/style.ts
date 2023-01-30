import styled from "styled-components";

export const UlList = styled.ul`
  padding-top: 20px;
  display: flex;
  width: 1600px;
  max-width: 100%;
  margin: 0 auto;
  gap: 56px;
  flex-wrap: wrap;
  padding: 10px;

  li {
    min-width: 300px;
    height: 346px;
    border: 2px solid var(--gray-100);
    border-radius: 5px;
  }
  li:hover {
    border: 2px solid #27ae60;
  }
  li > img {
    object-fit: contain;
    width: 100%;
    height: 177px;
    background-color: var(--gray-0);
  }
  li > h2 {
    font-size: 18px;
  }
  .categoryItem {
    font-size: 12px;
    color: var(--gray-300);
  }
  .priceItem {
    font-size: 14px;
    color: var(--color-primary);
    font-weight: 600;
  }
  button {
    width: 106px;
    height: 40px;
    background: #bdbdbd;
    border: 2px solid #bdbdbd;
    border-radius: 8px;
    color: var(--gray-0);
  }
  button:hover {
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }
  .text-itens {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 19px;
    width: 100%;
  }
  @media (max-width: 660px) {
    flex-wrap: nowrap;
    overflow-y: hidden;
    padding: 10px;
    gap: 20px;
  }
`;
