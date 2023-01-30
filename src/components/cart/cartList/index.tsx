import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";
import { ButtonDisabledQtd, ContainerCartList } from "./style";
import trash from "../../../assets/trash.svg";

export const CartList = () => {
  const {
    setQtdCart,
    removeAll,
    removeCart,
    valueTotalCart,
    setViewCart,
    cart,
  } = useContext(CartContext);

  return (
    <ContainerCartList>
      <div className="header">
        <h2>Carrinho de compras</h2>
        <p onClick={() => setViewCart(false)}>X</p>
      </div>
      {cart?.length === 0 ? (
        <div className="cart-content">
          {" "}
          <h2>Sua sacola está vazia</h2> <p>Adicione Itens</p>
        </div>
      ) : (
        <>
          <ul>
            {cart?.map((e) => (
              <li key={e.id}>
                <img src={e.img} alt="" />
                <div>
                  <span>
                    <h2>{e.name}</h2>
                    <img onClick={() => removeCart(e)} src={trash} alt="" />
                  </span>
                  <span className="count-products">
                    <ButtonDisabledQtd
                      disabled={e.qtd === 1 ? true : false}
                      onClick={() => setQtdCart(e, "-")}
                      className="sub-button"
                    >
                      -
                    </ButtonDisabledQtd>
                    <p>{e.qtd}</p>
                    <ButtonDisabledQtd onClick={() => setQtdCart(e, "+")}>
                      +
                    </ButtonDisabledQtd>
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-info">
            <span>
              <h2>Total</h2>
              <p>R$ {valueTotalCart.toFixed(2)}</p>
            </span>
            <button onClick={removeAll}>Remover todos</button>
          </div>
        </>
      )}
    </ContainerCartList>
  );
};
