import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountISValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enterAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enterAmountNum < 1 ||
      enterAmountNum > 5
    ) {
        setAmountIsValid(false);
      return;
    }


    props.onAddToCard(enterAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountISValid&&<p>Please enter a valid amount 1-5</p>}
    </form>
  );
};

export default MealItemForm;
