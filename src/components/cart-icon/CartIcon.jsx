import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
