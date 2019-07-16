import React from "react";
import Button from "../../UI/Button/Button";

/*
  Fragment should be destructured
  While this component is using a lifecycle, it doesn't appear to be doing anything other than console.logging. I think its safe to refactor this a function component
  For your BuildControl, you had a parent component BuildControls.js that mapped over data, and rendered a child component for each iteration (BuildControl.js)
  You should do the same for ingredientSummary
  ex:
  <Fragment>
    <h3>Your Order</h3>
    <p>A Delicious burger with the following ingredients:</p>
    <ul>{
      Object.keys(ingredients).map(key => (
        <IngredientSummary key={key} />
      ))
    }</ul>
    <p>
      <strong>Total: ${this.props.totalPrice}</strong>
    </p>
    <p>Continue to checkout?</p>
    <Button btnType="Danger" clicked={this.props.modalClosed}>
      CANCEL
    </Button>
    <Button btnType="Success" clicked={this.props.purchaseContinue}>
      CONTINUE
    </Button>
</Fragment>

Last note, you shouldn't use an index of a loop as a key. Its an anti-pattern. If the array were the be mutated in anyway, it could lead to rendering issues
 */
class OrderSummary extends React.Component {

  componentWillUpdate(){
    console.log('[OrderSummary] WillUpdate')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey, i) => {
        return (
          <li key={igKey + i}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A Delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total: ${this.props.totalPrice}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.modalClosed}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
