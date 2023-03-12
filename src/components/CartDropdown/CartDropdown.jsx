import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import { useCartContext } from "../../Context/CartContext";

import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useCartContext();

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
