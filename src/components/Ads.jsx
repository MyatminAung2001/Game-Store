import React from 'react';

import EditorsChoice from '../assets/Editors Choice.jpg';
import SuperHeroes from '../assets/Super Heroes.jpg';
import Essentials from '../assets/Essentials.jpg';
import PSVR from '../assets/PS VR.jpg';
import PSindies from '../assets/PS Indies.jpg';

const Ads = () => {
    return (
        <section className="mb-10">
            <header className="text-white font-bold text-lg mb-2 md:text-2xl">
                Collection
            </header>
            <div className="flex justify-between gap-x-3 overflow-x-scroll scrollbar none">
                <img src={EditorsChoice} alt="" className="rounded-[12px]" />
                <img src={SuperHeroes} alt="" className="rounded-[12px]" />
                <img src={PSindies} alt="" className="rounded-[12px]" />
                <img src={Essentials} alt="" className="rounded-[12px]" />
                <img src={PSVR} alt="" className="rounded-[12px]" />
            </div>
        </section>
    )
};

export default Ads;