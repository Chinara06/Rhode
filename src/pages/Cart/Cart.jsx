import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem } from '../../redux/cart/cart';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const parsePrice = (priceString) => {
        return parseFloat(priceString.replace('$', '').replace(',', '')) || 0;
    };

    return (
        <div className="cart">
            <div className="container">
                <div className="cart__row">
                    <div className="cart__cards">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => {
                                const itemPrice = parsePrice(item.price);
                                const itemQuantity = item.quantity || 1;
                                const totalPrice = itemPrice * itemQuantity;

                                return (
                                    <div className="cart__card" key={item.id}>
                                        <div className="cart__img">
                                            <img src={item.image} alt={item.title} width={150} height={150} />
                                        </div>
                                        <div className="cart__title">
                                            {item.title}
                                        </div>
                                        <div className="cart__number">
                                            <button
                                                className="cart__number-minus"
                                                onClick={() => dispatch(decrementItem(item.id))}
                                            >-</button>
                                            <p className="cart__number-count">{itemQuantity}</p>
                                            <button
                                                className="cart__number-plus"
                                                onClick={() => dispatch(incrementItem(item.id))}
                                            >+</button>
                                        </div>
                                        <div className="cart__price">
                                            ${totalPrice.toFixed(2)}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p>Your cart is empty</p>
                        )}
                    </div>
                    <div className="cart__check" >
                        <button>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;