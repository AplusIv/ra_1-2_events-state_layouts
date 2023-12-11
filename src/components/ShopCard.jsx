import React from 'react'


const ShopCard = ({card}) => {
  console.log(card);

  return (
    <div className='product-card'>
      <h1 className='card-name'>{card.name}</h1>
      <span className='card-color'>{card.color}</span>
      <img className='card-img' src={card.img} alt={card.name + '\'s pic'}/>
      <div className='card-price-info'>
        <span className='card-price'>{'$' + card.price}</span>
        <button className='add-to-cart'>add to cart</button>
      </div>
    </div>
  )
}

export default ShopCard