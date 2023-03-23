import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIconStyles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
