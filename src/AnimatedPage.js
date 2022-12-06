import React, { Fragment } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Login from './pages/Login';

const AnimatedPage = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Fragment>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </Fragment>
        </AnimatePresence>
    )
};

export default AnimatedPage;