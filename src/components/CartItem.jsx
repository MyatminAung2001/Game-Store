import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const CartItem = (props) => {

    const dispatch = useDispatch();

    const { title, quantity, total, price, id } = props.item;

    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart(id))
    };

    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price
        }))
    };

    return (
        <div className="flex flex-col items-center mb-3 py-2">
            <h3 className="text-white flex gap-x-3 mb-2">
                {title}
                <span>
                    x {quantity}
                </span>
            </h3>
            <p className="text-white flex gap-x-5">
                $ {total.toFixed(2)}{' '}
                <span className="flex gap-x-5">
                    <button
                        className="border px-5 font-bold border-[#4351ee] rounded-lg" 
                        onClick={addItemHandler} 
                    >
                        +
                    </button>
                    <button 
                        className="border px-5 font-bold border-[#4351ee] rounded-lg" 
                        onClick={removeItemHandler}
                    >
                        -
                    </button>
                </span>
            </p>
        </div>
    )
};

export default CartItem;