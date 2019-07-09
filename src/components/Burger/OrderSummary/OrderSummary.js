import React from "react";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey,i) => {
    return (
      <li key={igKey + i}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A Delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
    </React.Fragment>
  );
};

export default orderSummary;
