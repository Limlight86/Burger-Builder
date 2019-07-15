import React from "react";
import Button from "../../UI/Button/Button";

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
