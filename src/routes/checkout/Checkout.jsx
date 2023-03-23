import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { CheckoutContainer, CheckoutHeader, Total } from './CheckoutStyles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  //   const total = cartItems.reduce((s, c) => (s + c.price) * c.quantity, 0);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <div>
          <span>Product</span>
        </div>
        <div>
          <span>Description</span>
        </div>
        <div>
          <span>Quantity</span>
        </div>
        <div>
          <span>Price</span>
        </div>
        <div>
          <span>Remove</span>
        </div>
      </CheckoutHeader>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
