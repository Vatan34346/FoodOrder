import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const upadetedItem = state.items.concat(action.item);
    const newAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];
    let updatedItem;
    let updateItems;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updatedItem;
    } else {
      updatedItem = { ...action.item };
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: newAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCarItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCarItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updateItems;
    if (existingItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updateItems = [...state.items];
      updateItems[existingCarItemIndex] = updatedItem;
    }

    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartACtion] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHAndler = (item) => {
    dispatchCartACtion({ type: "ADD", item: item });
  };
  const removeItemFromCartHanler = (id) => {
    dispatchCartACtion({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHAndler,
    removeItem: removeItemFromCartHanler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
