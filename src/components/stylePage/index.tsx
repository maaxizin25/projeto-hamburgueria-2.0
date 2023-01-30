import logoKenzie from "../../assets/logo-kenzie.svg";
import shoppingBag from "../../assets/shopping-bag.svg";
import styleImg from "../../assets/style-login.svg";
import { DescriptionSection } from "./style";

export const StylePage = () => {
  return (
    <DescriptionSection>
      <img className="logo" src={logoKenzie} alt="" />
      <span>
        <img src={shoppingBag} alt="" />
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b>{" "}
          ingredientes.
        </p>
      </span>
      <img className="styleImg" src={styleImg} alt="" />
    </DescriptionSection>
  );
};
