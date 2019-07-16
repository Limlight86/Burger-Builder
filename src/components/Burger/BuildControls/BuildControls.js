import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
/*
implicit return for this component and the map within it
 props should be destructured in the function param
 ex: const buildControls = ({ price, ingredientAdded, ingredientRemoved, disabled, purchaseable, ordered }) => (
   //COMPONENT STUFF
 )
 The map parameter `ctrl` can also be destructured
 This is also where you'd change the ingredient add/remove to use the modifier argument that I mentioned in the container 
 see example below
    {controls.map(({ label, type }) => {
    return (
      <BuildControl
        key={label}
        label={label}
        added={() => ingredientUpdated(type, 1)}
        removed={() => ingredientUpdated(type, -1)}
        disabled={disabled[type]}
      />
    );
  })}
*/
const buildControls = props => {
  return (
    <div className={styles.BuildControls}>
      <p>
        <strong>Current Price: ${props.price}</strong>
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button
        className={styles.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
