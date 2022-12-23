import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './cartWidget.css'
import { CarritoContext } from '../../context/carritoContext';

function CartWidget() {

  const { getProductQty } = useContext(CarritoContext)

  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} /> {getProductQty() > 0 && getProductQty()}
    </div>
  )
}

export default CartWidget