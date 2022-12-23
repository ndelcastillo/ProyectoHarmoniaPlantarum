import React from 'react'
import Item from './Item'
import './itemList.css';

function ItemList(props) {
    return (
        <div className='row'>
            <h1 className='itemListTitle text-left ms-3' onClick={() => (alert("Hay 9 productos"))}>Productos</h1>
            {props.productos.map((item) => {
                return <div className='col-md-3'>
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        offer={item.offer}
                        detail={item.detail}
                        stock={item.stock}
                    />
                </div>
            })}
        </div>
    )
}

export default ItemList