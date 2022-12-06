import React from 'react';
import { BsFacebook, BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <section className="w-[100%] bg-[#000000] px-8 py-8 md:flex md:justify-evenly items-start">
            <div className="mb-5">
                <p className="text-white font-bold text-xl mb-1 text-center">
                    Console Game Store
                </p>
                <ul className="text-white cursor-pointer text-sm font-light flex justify-between md:flex-col gap-y-3">
                    <li>
                        About
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Email
                    </li>
                </ul>
            </div>
            <div className="mb-5">
                <p className="text-white font-bold text-xl mb-3 text-center">
                    Available On
                </p>
                <ul className="text-white text-sm font-light flex justify-between md:flex-col gap-y-3">
                    <li>
                        PS5
                    </li>
                    <li>
                        PS4
                    </li>
                    <li>
                        X Box Series
                    </li>
                    <li>
                        Nintendo Switch
                    </li>
                </ul>
            </div>
            <div className="mb-10">
                <p className="text-white font-bold text-xl mb-3 text-center">
                    Resources
                </p>
                <ul className="text-white text-sm font-light flex justify-between md:flex-col gap-y-3">
                    <li>
                        React
                    </li>
                    <li>
                        Redux
                    </li>
                    <li>
                        Firebase
                    </li>
                    <li>
                        Tailwind
                    </li>
                </ul>
            </div>
            <div>
                <p className="text-white text-xs text-center mb-3 md:text-base">
                    This page was built by <b>Myatmin Aung</b> with React. <br />
                    Some of UI Designs and Images of this page are inspired by Figma.
                </p>
                <ul className="text-white flex justify-between items-center md:flex-col md:items-start md:gap-y-3">
                    <li className="flex items-center gap-2">
                        <a href="https://www.facebook.com/profile.php?id=100008542208276">
                            <BsFacebook size={30} />
                        </a>
                        Facebook Link
                    </li>
                    <li className="flex items-center gap-2">
                        <a href="https://github.com/MyatminAung2001">
                            <BsGithub size={30} />
                        </a>
                        Github Link
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Footer;