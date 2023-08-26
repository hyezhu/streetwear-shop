import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";
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
        {cartItems.length ? cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        )) : <EmptyMessage>You have no items in your cart</EmptyMessage>}
        <Button onClick={goToCheckOutHandler}>Checkout</Button>
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
