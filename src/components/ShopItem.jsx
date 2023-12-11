import React from 'react'

const ShopItem = (props) => {
  const {item} = props;
  console.log(item);

  return (
    <div className='product-list'>
      <img className='card-img' src={item.img} alt={item.name + '\'s pic'}/>
      <h1 className='card-name'>{item.name}</h1>
      <span className='card-color'>{item.color}</span>
      <span className='card-price'>{'$' + item.price}</span>
      <button className='add-to-cart'>add to cart</button>
    </div>
  )
}

export default ShopItem