import React from 'react';
import pic2 from './images/image-product-1-thumbnail.jpg';
import pic9 from './images/icon-delete.svg';

const Cart = ({ showCart, cartAmount, clearCart, cartRef }) => {
  if (!showCart) return null;

  return (
    <div className={cartAmount > 0 ? 'cart1' : 'cart'} ref={cartRef}>
      <h1>Cart</h1>
      {cartAmount > 0 ? (
        <>
          <div>
            <img src={pic2} alt="Pic" />
            <div>
              <p>Fall Limited Edition Sneakers </p>
              <p>
                $125.00 x {cartAmount} <em>${125 * cartAmount}.00</em>
              </p>
            </div>
            <img
              src={pic9}
              alt="delete"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                clearCart();
              }}
            />
          </div>
          <button>Checkout</button>
        </>
      ) : (
        <p>You have nothing in the cart.</p>
      )}
    </div>
  );
};

export default Cart;
