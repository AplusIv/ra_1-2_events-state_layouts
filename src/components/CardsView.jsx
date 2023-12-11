import ShopCard from './ShopCard';

const CardsView = ({products, state}) => {
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