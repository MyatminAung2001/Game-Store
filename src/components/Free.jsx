import React from 'react';
import { motion } from 'framer-motion';

import { freeGames } from '../utils/FreeGameData';

const Free = () => {
    return (
        <section className="pb-10">
            <header className="text-white font-bold text-lg mb-2 md:text-2xl">
                Free To Play
            </header>
            <div className="flex flex-wrap gap-y-3 justify-between m-auto md:w-auto md:grid md:grid-flow-col md:grid-cols-6 md:gap-[25px]">
                {
                    freeGames.map((data) => (
                        <motion.div
                            whileHover={{ scale: 1.05 }} 
                            key={data.id}
                            className="h-[200px] w-[110px] md:w-auto md:h-[300px] cursor-pointer border border-[#495057] rounded-lg"
                        >
                            <img 
                                src={data.imageUrl} 
                                alt="" 
                                className="w-[100%] mb-1 md:mb-2"
                            />
                            <div className="flex flex-col justify-center mx-1">
                                <header className="text-white text-[12px] text-sm md:text-base text-ellipsis whitespace-nowrap overflow-hidden">
                                    {data.title}
                                </header>
                                <em className="mb-2 text-[8px] md:text-xs text-[#d5c5c8]">
                                    {data.company}
                                </em>
                                <p className="mb-2 text-[8px] md:text-xs text-[#d5c5c8] mb-10px border border-[#495057] rounded-[10px] flex justify-center items-center w-[40px] p-[3px]">
                                    {data.type}
                                </p>
                            </div>
                            <div className="w-[95%] m-auto flex flex-col justify-end">
                                <button className="cursor-pointer text-[8px] md:text-sm font-semibold px-[3px] py-[2px] md:p-[3px] uppercase w-[100%] bg-[#4361ee] rounded-[10px] text-white">
                                    {data.price}
                                </button>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
};

export default Free;