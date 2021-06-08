import React from 'react';
import AboutBox from './AboutBox';

const about = [
    {
        id: 1,
        title: 'User friendly',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem harum praesentium at magnam sed?'
    },
    {
        id: 2,
        title: 'New Technology',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem harum praesentium at magnam sed?'
    },
    {
        id: 3,
        title: 'Green impact',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem harum praesentium at magnam sed?'
    }
]

const About = () => {
    return (
        <div className='container p-5' id='about'>
            <h2 className='text-3xl text-blue-400 py-3 pl-3'>About us</h2>
            <div className="flex flex-wrap justify-around align-middle">
                {
                    about.map(aboutbox => <AboutBox key={aboutbox.id} aboutbox={aboutbox} />)
                }
            </div>
        </div>
    );
};

export default About;