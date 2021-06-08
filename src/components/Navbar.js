import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-blue-400 py-3 flex'>
            <a href='#main' className='text-2xl text-white pl-3'>Technical Blog</a>
            <ul className='ml-auto pr-4 flex'>
                <li><a href="#blog" className='nav-link'>Blog</a></li>
                <li><a href="#about" className='nav-link'>About</a></li>
                <li><a href="#Contact" className='nav-link'>Contact</a></li>
                <li><a href="#login" className='nav-link'>Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;