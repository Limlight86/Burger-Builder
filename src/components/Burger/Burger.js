import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

/*
  props should be destructured
  There's a lot going on here, i'll do my best to try to refactor 
  const burger = ({ ingredients }) => {
    const transformedIngredients = Object.keys(myObj).reduce((acc, key) => {
      const ingredientsByType = ingredients[key]
      ingredientsByType.forEach(ing => acc.push(<BurgerIngredient key={`${key}-${ing}`} type={key} />))
    }, [])
    return (
      <div className={styles.Burger}>
        <BurgerIngredient type="bread-top" />
        {!!transformedIngredients.length ? transformedIngredients :  <p>Please start adding Ingredients</p>}
        <BurgerIngredient type="bread-bottom" />
      </div>
    )
  }
*/
const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>  Please start adding Ingredients </p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
