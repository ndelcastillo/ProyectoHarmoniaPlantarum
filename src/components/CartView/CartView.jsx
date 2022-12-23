import React from 'react'
import { useContext } from 'react';
import { CarritoContext } from '../../context/carritoContext';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import './cartView.css';

const CartView = () => {
  const context = useContext(CarritoContext);
  const { carrito, isInCarrito, addProduct, emptyCarrito, deleteProduct, getProductQty, getProductPrice } = context

  let carritoVacio = carrito.length === 0;

  if (carritoVacio) {
    return <div className='mainContainerCartView'>
      <h1 className='cartViewTitleVacio'>Tu carrito esta vacio...
        <Link className='cartViewLinkVacio' to={"/"}>Seguir Comprando</Link>
      </h1>
    </div>;
  }

  return (
    <div className='mainContainerCartView'>
      <div className='container d-block'>
        <h1 className='cartViewTitle text-center mb-4'>Mi Carrito</h1>
        <table className="cartViewTable text-center">
          <thead className="cartViewTableHead">
            <tr className="cartViewTableRow">
              <th>Imagen</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody className="cartViewTableBody">
            {carrito.map((item) => {
              return (
                <tr key={item.id} className="cartViewTableBodyInfo">
                  <td className='cartViewTableBodyInfoImg'>
                    <img src={item.img} alt={item.title} />
                  </td>
                  <td className='cartViewTableBodyInfoName'>{item.name}</td>
                  <td className='cartViewTableBodyInfoPrice'>$ {item.price}</td>
                  <td className='cartViewTableBodyInfoQty'>{item.qty}</td>
                  <th className='cartViewTableBodyInfoSubtotal'>$ {item.price * item.qty}</th>
                  <td>
                    <FontAwesomeIcon style={{cursor:"pointer"}} icon={faTrash} onClick={() => deleteProduct(item.id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className='text-right pt-3 cartViewPrecioCompra'>
          <h5 className='mt-2'>El total de tu compra es de ${getProductPrice()}</h5>
          <Link to={"/checkoutform/:orderid"}>
            <Button className='mt-2' variant="secondary">Continuar Compra</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartView