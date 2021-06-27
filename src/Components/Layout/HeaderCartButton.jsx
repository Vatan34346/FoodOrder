import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContext";

const HeaderCartButton = (props) => {
  const [btnIsHilghed, setBtnIsHileted] = useState(false);
   
  const cartCTX = useContext(CartContext);
  const {items}=cartCTX;
  const numberOfCartItem = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

 
  const btnClass = `${classes.button} ${btnIsHilghed ? classes.bump : ""}`;

  useEffect(() => {
    if(items.length===0){
      return;
    }
    setBtnIsHileted(true);
   const timer= setTimeout(()=>{
      setBtnIsHileted(false);
    },300);

    return ()=>{
      clearTimeout(timer)
    }
  }, [items]);
  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
