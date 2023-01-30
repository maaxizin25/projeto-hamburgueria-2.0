import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { CartList } from "./cartList";
import { ContainerCart } from "./style";

export const Cart = () => {
  return (
    <ContainerCart>
      <CartList />
    </ContainerCart>
  );
};
