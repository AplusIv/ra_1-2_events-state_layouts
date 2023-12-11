import React from 'react'
import './iconSwitch.css';

const IconSwitch = (props) => {
  console.log(props);
  const {icon} = props;
  const {onSwitch} = props;

  // const showProductsCards = 'view_list';
  // if (icon === showProductsCards)
  return (
    <>
      <div className='layout' onClick={onSwitch}>
        <span class="material-icons icon-switch">{icon}</span>
      </div>
      {/* <CardsView state={icon}/>
      <ListView state={icon}/> */}
      {/* <App state={icon}/> */}
    </>
    
  )
}

export default IconSwitch