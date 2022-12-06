import React, { useState } from 'react';

import { FaHandRock } from 'react-icons/fa';
import { GiShears, GiPistolGun, GiShieldImpact, GiMountaintop } from 'react-icons/gi';
import { MdSportsFootball } from 'react-icons/md';
import { IoLogoGameControllerB } from 'react-icons/io';

import { gamesData } from '../utils/SaleGameData';
import CardGlobal from './Card';

const Sales = () => {

    const [games, setGames] = useState(gamesData);

    const filterGames = (genre) => {
        const updatedGames = gamesData.filter((curGenre) => {
            return curGenre.genre === genre;
        });

        setGames(updatedGames);
    };

    return (
        <section className="mb-10">
            <header className="text-white mb-5">
                <h3 className="font-bold text-lg mb-1 md:text-2xl">
                    On Sale
                </h3>
                <p className="text-sm font-light">
                    Only Available on PS4 / PS5
                </p>
            </header>
            <nav className="flex justify-between gap-x-10 overflow-x-scroll scrollbar-none">
                <button 
                    className="cursor-pointer h-[80px] flex flex-col items-center text-white hover:text-[#4361ee] transition duration-150 ease-out"
                    onClick={() => setGames(gamesData)}
                >
                    <IoLogoGameControllerB size={30} />
                    <p>All</p>
                </button>
                <button 
                    className="cursor-pointer h-[80px] flex flex-col items-center text-white hover:text-[#4361ee] transition duration-150 ease-out"
                    onClick={() => filterGames('Action')}
                >
                    <FaHandRock size={30} />
                    <p>Action</p>
                </button>
                <button 
                    className="cursor-pointer h-[80px] flex flex-col items-center text-white hover:text-[#4361ee] transition duration-150 ease-out"
                    onClick={() => filterGames('RPG')}
                >
                    <GiShears size={30} />
                    <p>RPG</p>
                </button>
                <button 
                    className="cursor-pointer h-[80px] flex flex-col items-center text-white hover:text-[#4361ee] transition duration-150 ease-out"
                    onClick={() => filterGames('Shooting')}
                >
                    <GiPistolGun size={30} />
                    <p>Shooting</p>
                </button>
                <button 
                    className="cursor-pointer h-[80px] flex flex-col items-center text-white hover:text-[#4361ee] transition duration-150 ease-out"
                    onClick={() => filterGames('Adventure')}
                >
                    <GiMountaintop size={30} />
                    <p>Adventure</p>
                </button>
                <button 
                    className="cursor-pointer h-[80px] flex flex-col items-center text-white hover:text-[#4361ee] transition duration-150 ease-out"
                    onClick={() => filterGames('Sport')}
                >
                    <MdSportsFootball size={30} />
                    <p>Sport</p>
                </button>
                <button 
                    className="cursor-pointer h-[80px] flex flex-col items-center text-white hover:text-[#4361ee] transition duration-150 ease-out"
                    onClick={() => filterGames('Survival')}
                > 
                    <GiShieldImpact size={30} />
                    <p>Survival</p>
                </button>
            </nav>
            <div className="flex flex-wrap gap-y-3 justify-between md:grid md:grid-flow-row md:grid-cols-6 md:gap-[25px]">
                {
                    games.map((data) => (
                        <CardGlobal 
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            imageUrl={data.imageUrl}
                            company={data.company}
                            type={data.type}
                            price={data.price}
                            genre={data.genre}
                        />
                    ))
                }
            </div>
        </section>
    )
};

export default Sales;