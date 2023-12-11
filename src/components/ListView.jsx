import React from 'react'
import ShopItem from './ShopItem';

const ListView = ({products, state}) => {
  // const {products} = props;
  // console.log(props);

  // const produtsCards = <ShopCard card={products[0]}/>;
  // console.log(produtsCards);
  const produtsCards = products.map((product) =>(<ShopItem item={product}/>));
  console.log(produtsCards);
  return ((state === 'view_module') ? <div className='products-list-container'>{produtsCards}</div> : null)
  // return (
  //   <div className='products-list-container'>{produtsCards}</div>
  // )
}

export default ListView