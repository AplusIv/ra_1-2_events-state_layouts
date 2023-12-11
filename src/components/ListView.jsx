import ShopItem from './ShopItem';

const ListView = ({products, state}) => {
  const produtsCards = products.map((product) =>(<ShopItem item={product}/>));
  return ((state === 'view_module') ? <div className='products-list-container'>{produtsCards}</div> : null)
}

export default ListView