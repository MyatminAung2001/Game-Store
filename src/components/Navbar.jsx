import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoLogoGameControllerB } from 'react-icons/io';
import { FaCartPlus } from 'react-icons/fa';

import PlayStationImg from '../assets/Play-Station-Logo.png';
import { cartActions } from '../store/cart-slice';

const Navbar = () => {

    const dispatch = useDispatch();
    const cartQuantity = useSelector(state => state.cart.totalQuantity);

    const toggleCartHandler = () => {
        dispatch(cartActions.toggle());
    }

    return (
        <nav className="fixed z-[1000] w-[100%] h-50px px-5 py-3 md:px-16 md:py-2 bg-[#212529] flex justify-between items-center">
            <div>
                <Link to='/' className="text-white flex items-center gap-3">
                    <IoLogoGameControllerB size={25} />
                    <p className="hidden md:block md:text-2xl md:font-bold">
                        Console Game Store
                    </p>
                </Link>
            </div>
            <div className="md:flex md:items-center gap-5">
                <img 
                    src={PlayStationImg} 
                    alt="playstationImg" 
                    className="hidden md:block md:w-[150px]"
                />
                <motion.motionbutton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleCartHandler}
                    className="text-white cursor-pointer flex items-center gap-x-3 border border-[#4361ee] hover:bg-[#4361ee] transition ease-out duration-200 rounded-[50px] px-4 py-1 md:py-2"
                >
                    <FaCartPlus size={25} />
                    <p>
                        Cart: <span>{cartQuantity}</span>
                    </p>
                </motion.motionbutton>
            </div>
        </nav>
    )
};

export default Navbar;