import DataSideBarPassengers from './DataSideBarPassengers/DataSideBarPassengers';
import DataSideBarRoute from './DataSideBarRoute/DataSideBarRoute';
import RubIcon from '../commonTicketsComponents/svgComponents/RubIcon';
import './DataSidebar.css';

const DataSidebar = () => {
  return (
    <div className='DataSidebar'>
      <h4>Детали поездки</h4>

      <DataSideBarRoute direction={'departure'}/>

      <DataSideBarRoute direction={'arrival'}/>

      <DataSideBarPassengers />

      <div className='DataSidebar__total'>
      <h3>итог</h3>
      <p>{7760}</p>
      <RubIcon height={32} color={'rgba(229, 229, 229, 1)'}/>
      </div>
    </div>
  )
}

export default DataSidebar