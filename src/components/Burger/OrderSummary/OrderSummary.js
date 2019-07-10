import React from "react";
import Button from '../../UI/Button/Button'

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
      <p><strong>Total: ${props.totalPrice}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.modalClosed}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </React.Fragment>
  );
};

export default orderSummary;
