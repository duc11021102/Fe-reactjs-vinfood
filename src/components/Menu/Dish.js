import React from "react";
import styles from "./Dish.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import { useRouteLoaderData } from "react-router-dom";

const Dish = (props) => {
  const token = useRouteLoaderData("root");

  const cartCtx = useContext(CartContext);
  const priceFloat = parseFloat(props.price);
  const price = `$${priceFloat.toFixed(2)}`;

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: 1,
      price: props.price,
    });
    console.log({
      id: props.id,
      title: props.title,
      amount: 1,
      price: props.price,
    });
  };

  return (
    <article key={props.id} className={`${styles["menu-item"]}`}>
      <img src={props.img} alt={props.title} className={styles.photo} />
      <div className={`${styles["item-info"]}`}>
        <header>
          <h4>{props.title}</h4>
          <h4 className={styles.price}>{price}</h4>
        </header>
        {token && (
          <button
            type="button"
            onClick={addToCartHandler}
            className={`${styles["button-text"]}`}
          >
            Add
          </button>
        )}
      </div>
    </article>
  );
};
export default Dish;
