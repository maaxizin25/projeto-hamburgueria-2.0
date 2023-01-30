import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import logout from "../../assets/logout.svg";
import sarchMinimal from "../../assets/minimal-search.svg";
import buttonSearch from "../../assets/button-search.svg";
import { Header } from "./style";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { CartContext } from "../../providers/CartContext";

export const MyHeader = ({}) => {
  const { logoutUser, filterProducts } = useContext(UserContext);
  const { valueOfCart, setViewCart } = useContext(CartContext);

  const [openInput, setOpenInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function submitInput() {
    setOpenInput(false);
    filterProducts(inputValue.trim().toLowerCase());
  }

  return (
    <Header>
      {openInput ? (
        <span className="areaInputMobile">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digitar pesquisa"
            type="text"
          />
          <img onClick={submitInput} src={buttonSearch} alt="" />
        </span>
      ) : (
        <div className="container-header">
          <img className="logo-img" src={logo} alt="" />
          <div className="areaInputAndButtons">
            <img
              onClick={() => setOpenInput(true)}
              className="searchMinimal"
              src={sarchMinimal}
              alt=""
            />
            <span className="areaInput">
              <input
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digitar pesquisa"
                type="text"
              />
              <img onClick={submitInput} src={buttonSearch} alt="" />
            </span>
            <span className="areaButtons">
              <img onClick={() => setViewCart(true)} src={cart} alt="" />
              <img onClick={logoutUser} src={logout} alt="" />
              <span className="counterCart">
                <p>{valueOfCart}</p>
              </span>
            </span>
          </div>
        </div>
      )}
    </Header>
  );
};
