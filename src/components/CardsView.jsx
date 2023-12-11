import React from 'react'
import ShopCard from './ShopCard';

const CardsView = (props) => {
  const {products} = props;
  const {state} = props;
  console.log(props);

  // const produtsCards = <ShopCard card={products[0]}/>;
  // console.log(produtsCards);

  const produtsCards = products.map((product) =>(<ShopCard card={product}/>));
  console.log(produtsCards);

  if (state === 'view_list') {
    return (
      <div className='products-card-container'>{produtsCards}</div>
    )
  }
  return null; // если не настроен показ карточек - не возвращать разметку
  
}

export default CardsView