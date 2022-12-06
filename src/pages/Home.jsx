import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import Sales from '../components/Sales';
import MainContent from '../components/TopRated';
import Upcoming from '../components/Upcoming';
import Ads from '../components/Ads';
import Free from '../components/Free';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

const Home = () => {

    const showCart = useSelector(state => state.cart.cartIsVisible);

    return (
        <motion.div
            initial={{ opacity: 0, y: -200}}
            animate={{ opacity: 1, y: 0, transition: { y: { type: "spring", duration: 2}} }}
            exit={{ opacity: 0, y: 200, transition: { y: { type: "twin", duration: 2}} }}
        >
            <Navbar />
            <section className="h-[100%] bg-[#212529] pt-[5rem] pl-5 pr-5 md:pt-[7rem] md:pl-[15rem] md:pr-[15rem] pb-0">
                {showCart && <Cart/>}
                <MainContent />
                <Upcoming />
                <Sales />
                <Ads />
                <Free />
            </section>
            <Footer />
        </motion.div>
    )
};

export default Home;