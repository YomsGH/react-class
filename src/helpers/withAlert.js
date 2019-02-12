import React from "react";

// HOC pattern (high order component) https://reactjs.org/docs/higher-order-components.html
const withAlert = ({ event, message }) => {
  return Component => {
    // return a new component
    const AugmentedComponent = props => {
      const newProps = { ...props }; // Règle de React, ne jamais modifier les props, il faut les cloner si on veut en faire qch
      newProps[event] = () => alert(message); // Rajout d'une nouvelle entrée à l'objet newProps qui a le nom de l'event reçu
      return <Component {...newProps} />;
    };
    return AugmentedComponent;
  };
};

export default withAlert;
/**
 * usage example:
 * AugmentedComponent = withAlert({ event: 'onFocus', message: 'bummer' })(MyComponent);
 *
 * <AumgentedComponent>...
 */