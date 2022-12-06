import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import CartItem from './CartItem';

const Cart = () => {

    const cartItems = useSelector(state => state.cart.items)

    return (
        <section>
            <div className="fixed top-0 left-0 w-[100%] h-[100vh] z-[300] bg-backdropBg"></div>
            <motion.div
                // initial={{ opacity: 0, y: 200 }}
                // animate={{ opacity: 1, y: 0}}
                // exit={{ opacity: 0, x: 200 }}
            >
                <div className="w-[90%] md:w-[30%] px-4 py-6 fixed left-[50%] top-[40%] translate-x-[-50%] translate-y-[-40%] z-[500] bg-[#212529] rounded-lg">
                    <header className="text-white mb-5 text-center font-bold text-lg">
                        Your Game Cart
                    </header>
                    <div className="mb-3">
                        {
                            cartItems.map((item) => (
                                <CartItem 
                                    key={item.id}
                                    item={{
                                        id: item.id,
                                        title: item.title,
                                        quantity: item.quantity,
                                        total: item.totalPrice,
                                        price: item.price
                                    }}
                                />
                            ))
                        }
                    </div>
                    <div className="text-center">
                        <button className="px-6 py-1 border rounded-lg font-bold border-[#4361ee] text-white hover:bg-white hover:text-[#4361ee] transition duration-150">
                            Purchase
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
};

export default Cart;