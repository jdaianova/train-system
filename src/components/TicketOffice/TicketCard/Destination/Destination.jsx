import './Destination.css';

const Destination = ({time, city, station}) => {
  const formattedTime = new Date(time*1000).toLocaleTimeString().slice(0,-3);

  return (
    <div className='Destination'>
        <p className='Destination-time'>{formattedTime}</p>
        <p className='Destination-city'>{city}</p>
        <p className='Destination-station'>{station} вокзал</p>
    </div>
  )
}

export default Destination