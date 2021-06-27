import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Food delivered to You</h2>
      <p>
        Choose your food from selection and enjoy lunch or hvae dinner at home.
      </p>
      <p>All or meals are cooked with high quality and just in time.</p>
    </section>
  );
};

export default MealsSummary;
