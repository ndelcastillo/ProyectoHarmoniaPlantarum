import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './itemCount.css'

export default function ItemCount({ qty, setQty, onAdd, stock }) {

    function handleMinus() {
        if (qty > 1) {
            setQty(qty - 1);
        }
    }

    function handlePlus() {
        if (qty < stock) {
            setQty(qty + 1);
        }
    }

    return (
        <div className='text-center itemCountAll'>
            <div className='text-center mt-3'>
                <Button className='me-4' size="s" variant="secondary" onClick={handleMinus}>-</Button>
                <span>{qty}</span>
                <Button className='ms-4' variant="secondary" onClick={handlePlus}>+</Button>
            </div>
            <div className='text-center' >
                <Button size="s" className='mt-3' variant="secondary" onClick={() => { onAdd() }}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}
