import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import { useCartContext } from "../../Context/CartContext";

import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useCartContext();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
