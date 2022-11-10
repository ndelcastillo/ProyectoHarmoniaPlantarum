import React from 'react'
import CarouselHeader from '../Carousel/CarouselHeader';
import NavBar from '../NavBar/NavBar';
import './header.css';

function Header() {
    return (
        <header className='header'>
            <NavBar/>
            <CarouselHeader/>
        </header>
    )
}

export default Header