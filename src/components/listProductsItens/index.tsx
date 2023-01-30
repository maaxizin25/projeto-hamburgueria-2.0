import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { UserContext } from "../../providers/UserContext";
import { UlList } from "./style";

export const ListProductsItens = () => {
  const { filterProductList } = useContext(UserContext);
  const { addCart } = useContext(CartContext);

  function onAddItem(id: number) {
    addCart(id);
  }

  return (
    <UlList>
      {filterProductList?.map((e) => (
        <li key={e.id}>
          <img src={e.img} alt="" />
          <div className="text-itens">
            <h2>{e.name}</h2>
            <p className="categoryItem">{e.category}</p>
            <p className="priceItem">R$ {e.price.toFixed(2)}</p>
            <button onClick={() => onAddItem(e.id)}>Adicionar</button>
          </div>
        </li>
      ))}
    </UlList>
  );
};
