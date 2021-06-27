import { Fragment } from "react";
import classes from "./Header.module.css";
import mealIMG from "../../Assets/meals.jpg";
import HeaderCardButton from'./HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealIMG} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
