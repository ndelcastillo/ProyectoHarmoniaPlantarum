import React from 'react'
import CardItem from './CardItem';
import './itemListContainer.css';

import card1 from "../../assets/images/products/cards/terrarios007.jpg"
import card2 from "../../assets/images/products/cards/terrarios002.jpg"
import card3 from "../../assets/images/products/cards/terrarios006.jpg"
import card4 from "../../assets/images/products/cards/terrarios004.jpg"


function ItemListContainer(props) {
    return (
        <div className='container d-flex justify-content-center align-items-center h-100 p-5'>
            <h1>{props.greeting}</h1>
            <div className='row'>
                <div className='col-md-3'>
                    <CardItem
                        title="Terrario1"
                        img={card1}
                        price={4000}
                    />
                </div>
                <div className='col-md-3'>
                    <CardItem
                        title="Terrario2"
                        img={card2}
                        price={5000}
                    />
                </div>
                <div className='col-md-3'>
                    <CardItem
                        title="Terrario3"
                        img={card3}
                        price={6000}
                    />
                </div>
                <div className='col-md-3'>
                    <CardItem
                        title="Terrario4"
                        img={card4}
                        price={6000}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer
