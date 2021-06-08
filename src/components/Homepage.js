import React from 'react';
import About from './About';
import Blog from './Blog';
import Footer from './Footer';
import Navbar from './Navbar';

const homepage = () => {
    return (
        <div>
            <Navbar />
            <Blog />
            <About />
            <Footer />
        </div>
    );
};

export default homepage;