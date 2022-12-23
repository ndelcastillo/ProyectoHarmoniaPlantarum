import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import CarouselHeader from '../Carousel/CarouselHeader';
import './itemListContainer.css';
import { DotWave } from '@uiball/loaders'
import {getItems, getItemsByCategory} from '../../services/firestore';

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const { cat } = useParams()

    useEffect(() => {
        setIsLoading(true)
        if (cat === undefined) {
            getItems()
                .then((respuestaProductos) => setProductos(respuestaProductos))
                .finally(() => setIsLoading(false))
        } else {
            getItemsByCategory(cat)
                .then((respuestaProductosFiltrados) => setProductos(respuestaProductosFiltrados))
                .finally(() => setIsLoading(false))
        }
    }, [cat]);

    return (
        <div className='mainItemListContainer'>
            <CarouselHeader />
            <div className='container mt-5'>
                {isLoading ?
                    <DotWave
                        size={47}
                        speed={1}
                        color="black"
                    /> :
                    <div className='container d-block justify-content-center align-items-center h-100 p-5'>
                        <ItemList productos={productos} />
                    </div>
                }
            </div>
        </div>
    )
}
export default ItemListContainer
