import React from 'react';
import bitcoin from '../img/bitcoin.jpg';
import land from '../img/land.jpg';
import walton from '../img/walton.jpg';
import iphone from '../img/iphone.jpeg';
import BlogPost from './BlogPost';

const blogposts = [
    {
        id: 1,
        title: 'Bitcoin at its high rate',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis delectus laudantium autem. Eum provident commodi, dolor at maxime eos, alias nemo ex corrupti quisquam nam consequuntur. Vero deserunt earum laborum!',
        img: bitcoin
    },
    {
        id: 2,
        title: 'Walton released new RX8 mini',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis delectus laudantium autem. Eum provident commodi, dolor at maxime eos, alias nemo ex corrupti quisquam nam consequuntur. Vero deserunt earum laborum!',
        img: walton
    },
    {
        id: 3,
        title: 'apple released ios 15',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis delectus laudantium autem. Eum provident commodi, dolor at maxime eos, alias nemo ex corrupti quisquam nam consequuntur. Vero deserunt earum laborum!',
        img: iphone
    },
    {
        id: 4,
        title: 'Modern plough technology is implemented',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis delectus laudantium autem. Eum provident commodi, dolor at maxime eos, alias nemo ex corrupti quisquam nam consequuntur. Vero deserunt earum laborum!',
        img: land
    }
]

const Blog = () => {
    return (
        <div className='container p-5' id='blog'>
            <h2 className='text-blue-400 text-3xl py-3 pl-3'>Blog posts</h2>
            <div className='flex align-middle justify-around flex-wrap'>
                {
                    blogposts.map(post => <BlogPost key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Blog;