import React, { useState } from 'react'
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';
import ListView from './ListView';

const Store = ({products}) => {
  const initial = 'view_list';
  const [state, setState] = useState(initial);

  const onSwitch = (event) => {
    if (event.target.classList.contains('icon-switch')) {
      console.log('icon-switch');
      setState((prevState) => (prevState === 'view_list') ? 'view_module' : 'view_list');
      // Заменить предыдущее состояние на новое
    }
  }

  return (
    <>
      <IconSwitch icon={state} onSwitch={onSwitch}/>
      <CardsView state={state} products={products}/>
      <ListView state={state} products={products}/>
    </>
  )
}

export default Store