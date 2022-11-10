import React from 'react'
import Button from '../Button/Button';
import './cardItem.css';

function CardItem(props) {
  const { title, img, price } = props
  return (
    <div className='container'>
      <div className='cardItem mt-5 mx-auto w-100 text-center'>
        <img src={img} className='mx-auto w-100' alt="carImg" />
        <div className='cardBody'>
          <h5 className='cardName'>{title}</h5>
          <h5 className='cardPrice'>${price}</h5>
          <h6 className='cardTextSeeMore mb-4'>Ver Mas</h6>
          <Button>
            Ver Mas
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardItem