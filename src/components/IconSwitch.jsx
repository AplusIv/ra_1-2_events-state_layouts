import './iconSwitch.css';

const IconSwitch = ({icon, onSwitch}) => {
  return (
    <div className='layout' onClick={onSwitch}>
      <span class="material-icons icon-switch">{icon}</span>
    </div>    
  )
}

export default IconSwitch