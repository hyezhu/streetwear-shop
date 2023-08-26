import { CartDropdownContainer, CartItems } from "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button onClick={goToCheckOutHandler}>Checkout</Button>
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
