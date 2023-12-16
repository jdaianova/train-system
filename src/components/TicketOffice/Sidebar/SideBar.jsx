import './SideBar.css';

import DateSection from './DateSection/DateSection';
import PriceSlider from './PriceSlider/PriceSlider';
import SwitchSection from './SwitchSection/SwitchSection';
import TimeSlider from './TimeSlider/TimeSlider';

const SideBar = () => {

  return (
    <aside className='SideBar'>
      <DateSection/>
      <SwitchSection />
      <PriceSlider />
      <TimeSlider />
    </aside>
  );
};

export default SideBar;
