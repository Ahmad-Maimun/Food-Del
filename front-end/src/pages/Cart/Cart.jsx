import { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

function Cart() {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return <div></div>;
}

export default Cart;
