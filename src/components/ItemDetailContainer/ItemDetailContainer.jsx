import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css';
import { DotWave } from '@uiball/loaders'
import { getSingleItem } from '../../services/firestore';

function ItemDetailContainer() {
    const [productos, setProductos] = useState({});
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        getSingleItem(id)
            .then((respuestaProductos) => setProductos(respuestaProductos))
            .catch((errormsg) => {
                setError(errormsg.message)
            })
            .finally(() => setIsLoading(false))
    }, [id]);
    //pongo el [id] por si quiero ir al siguiente producto.

    if (isLoading) {
        return (
            <div className='loaderItem text-center'>
                {error ? (
                    <div>
                        <h3 style={{ color: '#aa0033' }} className='m-5 p-5'>Error obteneindo los datos</h3>
                        <p className='m-5 p-5'>{error}</p>
                    </div>
                ) : (
                    <div className='container'>
                        <div className='loaderItem1'>
                            <DotWave
                                size={47}
                                speed={1}
                                color="black"
                            />
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className='container d-flex justify-content-center align-items-center h-100 p-5'>
            <ItemDetail productos={productos} />
        </div>
    )
}
export default ItemDetailContainer
