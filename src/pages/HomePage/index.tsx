import React from "react";
import { useContext } from "react";
import { Cart } from "../../components/cart";
import { MyHeader } from "../../components/header";
import { ListProductsItens } from "../../components/listProductsItens";
import { CartContext } from "../../providers/CartContext";

export const Homepage = () => {
  const { viewCart } = useContext(CartContext);

  return (
    <>
      <MyHeader />
      <ListProductsItens />
      {viewCart && <Cart />}
    </>
  );
};
