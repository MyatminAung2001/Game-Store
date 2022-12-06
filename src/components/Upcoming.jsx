import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Upcoming = () => {

    const [preOrders, setpreOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fectchData = async () => {
            const response = await fetch(
                'https://game-store-51cac-default-rtdb.firebaseio.com/PreOrder.json'
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();
            const loadedPreOrders = [];

            for (const key in responseData) {
                loadedPreOrders.push({
                    id: key,
                    imageUrl: responseData[key].imageUrl,
                    title: responseData[key].title,
                    company: responseData[key].company,
                    price: responseData[key].price,
                    detail: responseData[key].detail
                })
            }

            setpreOrders(loadedPreOrders);
            setIsLoading(false);
        }

        fectchData();
    }, []);

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const preOrdersList = preOrders.map((preOrder) => (
        <motion.div
            whileHover={{ scale: 1.05 }} 
            key={preOrder.id}
            className="h-[200px] w-[110px] md:w-auto md:h-[300px] cursor-pointer border border-[#495057] rounded-lg"
        >
            <img 
                src={preOrder.imageUrl} 
                alt="" 
                className="w-[100%] mb-1 md:mb-2"
            />
            <div className="flex flex-col justify-center mx-1">
                <header className="text-white text-[12px] text-sm md:text-base text-ellipsis whitespace-nowrap overflow-hidden">
                    {preOrder.title}
                </header>
                <em className="mb-2 text-[8px] md:text-xs text-[#d5c5c8]">
                    {preOrder.company}
                </em>
                <p className="mb-2 text-[8px] md:text-xs text-[#d5c5c8] mb-10px border border-[#495057] rounded-[10px] flex justify-center items-center w-[40px] p-[3px]">
                    {preOrder.price}
                </p>
            </div>
            <div className="w-[95%] m-auto flex flex-col justify-end">
                <button className="cursor-pointer text-[8px] md:text-sm font-semibold px-[3px] py-[2px] md:p-[3px] uppercase w-[100%] bg-[#4361ee] rounded-[10px] text-white">
                    {preOrder.detail}
                </button>
            </div>
        </motion.div>
    ));

    return (
        <section className="mb-10">
            <header className="text-white font-bold text-lg mb-2 md:text-2xl">
                Coming Soon
            </header>
            <div className="flex flex-wrap gap-y-3 justify-between m-auto md:w-auto md:grid md:grid-flow-col md:grid-cols-6 md:gap-[25px]">
                {preOrdersList}
            </div>
        </section>
    )
};

export default Upcoming;