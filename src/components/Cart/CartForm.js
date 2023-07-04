import { Form } from "react-router-dom";
import classes from "./CartForm.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const CartForm = () => {
  const cartCtx = useContext(CartContext);
  // chuyen price sang xx.xx
  const totalAmount = cartCtx.amount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  // xóa 1 item meal sau khi click vào dấu trừ
  const onRemoveHandler = (id) => {
    cartCtx.deleteItem(id);
  };
  // thêm 1 item meal sau khi click vào dấu cộng
  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          onRemove={onRemoveHandler.bind(null, item.id)}
          onAdd={onAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <div className={classes.modal}>
      <Form className={classes.form}>
        {cartItem}
        <div className={classes.total}>
          <span>Tổng Tiền</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          {hasItems && <button className={classes.button}>Order Now</button>}
        </div>
      </Form>
    </div>
  );
};
export default CartForm;
