import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    /* these can be combined into one loop, and you can make use of implicit returns
    const sum = Object.keys(ingredients).reduce((acc, key) => acc + ingredients[key], 0)
    */
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }
  /* 
  this function and the remove ingredient function are exactly identical except for a plus and minus sign. You could prolly refactor to something like 
    updateIngredientHandler = (type, modifier) => {
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount + (1 * modifier);
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const priceModifier = INGREDIENT_PRICES[type] * modifier;
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceModifier;
      this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
      this.updatePurchaseState(updatedIngredients);
    };
  */
  addIngredientHanlder = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  /* implicit returns for these next three functions 
    ex: const purchaseHandler = () => this.setState({ purchasing: true })
  */
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("You continue");
  };

  render() {
    /*
    There's alot of places where you're calling `this.state` to access different state properties
    They should be destructured here so you can just call them by their property name 
    const { purchasing, ingredients, totalPrice, purchaseable } = this.state 
    Also, its generally not best practice to mutate state properties, I'd prolly do something like this 

    const disabledInfo = Object.keys(ingredients).reduce((acc, key) => {
      acc[key] = ingredients[key] <= 0
      return acc
    }, {})

    Last thing, if you're destructuring Component when you import it from React, you should also destructure Fragment 
    import React, { Component, Fragment } from 'react'
    */    
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            modalClosed={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice.toFixed(2)}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHanlder}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice.toFixed(2)}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
