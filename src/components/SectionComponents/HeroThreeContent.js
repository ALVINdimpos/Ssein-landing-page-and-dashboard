import React, { useContext } from "react";
import classes from "./HeroThreeContent.module.css";
import CartContext from "../store/cartcontext";

const HeroThreeContent = (props) => {
  // Using useContext hooks
  const cartCtx = useContext(CartContext);
  //END

  //Converting prices to two decimal places

  const price = `₦${props.price.toFixed(2)}`;

  //END

  //Adding data values to be managed to the useContext
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      src: props.src,
    });
  };
  //END

  //Layout and structure of the Hero three (Third section) content
  return (
    <div className={classes.dish_content}>
      <div className={classes.dish_image_div}>
        <img src={props.src} alt="Dish" />
      </div>
      <div className={classes.dish_text_div}>
        <p>{props.name}</p>
      </div>
    </div>
  );
  //END
};

export default HeroThreeContent;
