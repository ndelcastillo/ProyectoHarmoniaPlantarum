import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount';
import { CarritoContext } from '../../context/carritoContext';
import { Link } from 'react-router-dom';
import './itemDetail.css';

function ItemDetail({ productos }) {

    let squareDivTxt = {
        textAlign: 'center',
        color: 'white',
    }

    const stylePrice = {
        color: productos.offer ? 'green' : 'black'
    }

    /*
    let estado = false
    function handleAddToCart(count) {
        addItem(productos, count)
        alert(`agregaste al carrito ${count}`)
    }
    */

    const [isInCarrito, setIsInCarrito] = useState(false)

    const [qty, setQty] = useState(1)

    const { addProduct } = useContext(CarritoContext)

    const onAdd = () => {
        addProduct(productos, qty)
        setIsInCarrito(true)
    }


    return (
        <div className='container'>
            <div className='cardItemDetail shadow w-100 d-flex'>
                <div className='cardItemDetailImg me-5 mx-auto'>
                    <img src={productos.img} className='cardItemDetailImg1 w-100   me-5' alt="cardItemDetailImg1" />
                </div>
                <div className='cardItemDetailBody me-5 p-5'>
                    <h5 className='cardItemDetailName m-5 pe-5 ps-5 text-center'>{productos.name}</h5>
                    <h5 style={stylePrice} className='cardItemDetailPrice m-5 pe-5 ps-5 text-center'>${productos.price}</h5>
                    {productos.stock === 0 && <h5 style={{ color: 'red', fontWeight: '600' }} className='cardItemDetailStock m-5 pe-5 ps-5 text-center'>Producto sin stock</h5>}
                    {/*<h6 className='cardItemDetailTextSeeMore mb-4'>Ver Mas</h6>*/}
                    {
                        (isInCarrito) ?
                            <div div className="cardItemDetailItemCount mt-5 pt-5 text-center">
                                <Link to={"/cart"}>
                                    <Button size="s" className='mt-3' variant="secondary" style={squareDivTxt}>
                                        Ir al carrito
                                    </Button>
                                </Link>
                            </div> :
                            <div div className="cardItemDetailItemCount mt-5 pt-5 text-center">
                                <ItemCount qty={qty} setQty={setQty} stock={productos.stock} onAdd={onAdd} />
                            </div>
                    }
                    {/*
                    <div className="cardItemDetailItemCount mt-5 pt-5 text-center">
                        { estado === false ? <ItemCount onAddToCart = {handleAddToCart}/> : <Button>Finalizar Compra</Button>}
                    </div>
                    */}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail