import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { ImEnter } from 'react-icons/im';

import LoginImg from '../assets/login-img.jpg';
import mobileImg from '../assets/mobile-login.jpg';

const Login = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section>
                <img 
                    src={LoginImg} alt="" 
                    className="hidden md:block md:w-[100%] md:h-[100vh] md:brightness-[90%]"
                />
                <img 
                    src={mobileImg}
                    alt=""
                    className="block md:hidden w-[100%] h-[100vh] brightness-[90%]"
                />
                <div className="fixed z-100 top-[80%] left-[50%] translate-x-[-50%] translate-y-[-80%] bg-cardBg rounded-lg shadow backdrop-blur-[5.7px] w-[300px] md:w-auto">
                    <div className="flex flex-col items-center px-4 py-4 md:py-8 md:px-16">
                        <h2 className="text-white text-xl text-center font-bold mb-5 md:text-[3.5rem] md:mb-10">
                            Console Game Store
                        </h2>
                        <p className="text-white text-center mb-5 md:mb-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nam error aut totam quod dicta sequi architecto ad illo a facilis.
                        </p>
                        <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-5">
                            <Link to='/home' className="flex items-center gap-x-3 px-5 py-3 rounded-xl bg-[#48cae4] hover:bg-white hover:scale-[1.05] transition-all duration-[0.2s] ease-out">
                                <ImEnter size={22} />
                                <p className="font-bold text-lg">
                                    Browse Store
                                </p> 
                            </Link>
                            <a href="https://www.facebook.com/profile.php?id=100008542208276"
                                className="flex items-center gap-x-3 px-5 py-3 rounded-xl bg-white hover:bg-[#48cae4] hover:scale-[1.05] transition-all duration-[0.2s] ease-out">
                                <BsFacebook size={22} />
                                <p className="font-bold text-lg">
                                    facebook
                                </p> 
                            </a>
                            <a href="https://github.com/MyatminAung2001"
                                className="flex items-center gap-x-3 px-5 py-3 rounded-xl bg-white hover:bg-[#48cae4] hover:scale-[1.05] transition-all duration-[0.2s] ease-out">
                                <BsGithub size={22} />
                                <p className="font-bold text-lg">
                                    Github
                                </p> 
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
};

export default Login;