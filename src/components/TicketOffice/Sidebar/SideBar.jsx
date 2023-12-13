import './SideBar.css';

import DateSection from './DateSection/DateSection';
import PriceSlider from './PriceSlider/PriceSlider';
import SwitchSection from './SwitchSection/SwitchSection';

const SideBar = () => {

  return (
    <aside className='SideBar'>
      <DateSection/>
      <SwitchSection />
      <PriceSlider />
    </aside>
  );
};

export default SideBar;
