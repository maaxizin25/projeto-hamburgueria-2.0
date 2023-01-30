import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { iCartValue, ProductsList, Props } from "./types";
import { UserContext } from "./UserContext";

export const CartContext = createContext({} as iCartValue);

export const CartProvider = ({ children }: Props) => {
  const { filterProductList } = useContext(UserContext);

  const [cart, setCart] = useState<ProductsList[]>([]);
  const [valueOfCart, setValueOfCart] = useState(0);
  const [viewCart, setViewCart] = useState(false);
  const [valueTotalCart, setValueTotalCart] = useState(0);

  useEffect(() => {
    const sumAllValue = (itens: ProductsList[]) => {
      const arraySum = itens.map((e) => e.price * e.qtd);
      const totalSum = arraySum.reduce(
        (first, last) => (first = first + last),
        0
      );
      setValueTotalCart(totalSum);
    };
    sumAllValue(cart);
  });

  function addCart(id: number) {
    const findProduct = filterProductList?.find((e) => e.id === id); // Achou o Produto

    const max = cart.find((e) => e.id === id); // Procurou no carrinho

    if (!max) {
      // Se não tiver no carrinho, você adiciona normalmente.
      setCart(findProduct ? [...cart, { ...findProduct, qtd: 1 }] : []);
      toast.success("Produto adicionado ao carrinho!");
    } else {
      // Caso tenha no carrinho, você muda a qtd do produto para ++
      max.qtd = max.qtd + 1;
    }

    setValueOfCart(valueOfCart + 1);
  }
  function removeCart(product: ProductsList) {
    setCart(cart.filter((e) => e.id !== product.id));
    setValueOfCart(valueOfCart - product.qtd);
    toast.success("Produto removido do carrinho!");
  }
  function removeAll() {
    setCart([]);
    setValueOfCart(0);
    if (cart.length !== 0) {
      toast.success("Todos os produtos foram removidos do carrinho!");
    }
  }
  function setQtdCart(product: ProductsList, sinal: string) {
    if (sinal === "+") {
      product.qtd = product.qtd + 1;
      setValueOfCart(valueOfCart + 1);
    }
    if (sinal === "-") {
      product.qtd = product.qtd - 1;
      setValueOfCart(valueOfCart - 1);
    }
    setCart([...cart]);
  }

  return (
    <CartContext.Provider
      value={{
        valueTotalCart,
        setViewCart,
        viewCart,
        valueOfCart,
        cart,
        addCart,
        removeCart,
        removeAll,
        setQtdCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
