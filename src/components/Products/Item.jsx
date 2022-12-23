import React from 'react'
import Button from '../Button/Button';
import {Link} from 'react-router-dom'
import './item.css';

function Item(props) {
  const { name, img, price, id, offer } = props
  const urlDetalle = `/productos/${id}`
  
  let classPrice = `priceTag ${offer && 'offerTag'}`

  return (
    <div className='container'>
      <div className='cardItem shadow mt-5 mx-2 w-100 text-center'>
        <img src={img} className='mx-auto w-100' alt="carImg" />
        <div className='cardBody'>
          <h5 className='cardName'>{name}</h5>
          <h5 className={classPrice}>${price}</h5>
          {/*<h6 className='cardTextSeeMore mb-4'>Ver Mas</h6>*/}
          <div className="cardBtn">
            <Link to={urlDetalle}>
              <Button>
                Ver Mas
              </Button>
            </Link>
            {/*<ItemCount/>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item