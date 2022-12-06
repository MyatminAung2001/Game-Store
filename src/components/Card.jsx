import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { cartActions } from '../store/cart-slice';

const CardGlobal = (props) => {

    const dispatch = useDispatch();

    const { title, price, id } = props;

    const addToCartHandler = () => {
        dispatch(
            cartActions.addItemToCart({
                id,
                title,
                price
            })
        )
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }} 
            key={props.id}
            className="h-[190px] w-[100px] md:h-[300px] md:w-auto cursor-pointer border border-[#495057] rounded-lg"
        >
            <img src={props.imageUrl} alt="" className="w-[100%] mb-1 md:mb-2 object-contain rounded-t-lg"/>
            <div className="flex flex-col justify-center mx-1">
                <header className="text-white text-[12px] text-sm md:text-base text-ellipsis whitespace-nowrap overflow-hidden">
                    {title}
                </header>
                <em className="mb-2 text-[8px] md:text-xs text-[#d5c5c8]">
                    {props.company}
                </em>
                <p className="mb-2 text-[8px] md:text-xs text-[#d5c5c8] mb-10px border border-[#495057] rounded-[10px] flex justify-center items-center w-[40px] p-[3px]">
                    {props.type}
                </p>
            </div>
            <div className="w-[95%] m-auto flex flex-col justify-end">
                <button 
                    onClick={addToCartHandler}
                    className="cursor-pointer text-[8px] md:text-sm font-semibold px-[3px] py-[2px] md:p-[3px] uppercase w-[100%] bg-[#4361ee] rounded-[10px] text-white"
                >
                    $ {price}
                </button>
            </div>
        </motion.div>
    )
};

export default CardGlobal;