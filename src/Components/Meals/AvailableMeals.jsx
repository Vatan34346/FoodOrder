import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  { id: "m1", name: "Sushi", description: "fish + veggied", price: 22.99 },
  { id: "m2", name: "Shinitsel", description: "german meal", price: 16.5 },
  { id: "m3", name: "Burger", description: "meet+bread", price: 17.85 },
  { id: "m4", name: "Cheees burger", description: "meet+bread", price: 10.25 },
  {
    id: "m5",
    name: "Royal cheesburger",
    description: "meet+bread",
    price: 8.63,
  },
];

const AvailableMeals = (porps) => {
  const mealList = DUMMY_MEALS.map((item) => (
    <MealItem
      id={item.id}
      key={item.id}
      name={item.name}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
