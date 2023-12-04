import CheckBoxes from './CheckBoxes/CheckBoxes';
import DateSection from './DateSection/DateSection';
import PriceSlider from './PriceSlider/PriceSlider';
import './SideBar.css';

const SideBar = () => {

  return (
    <aside className='SideBar'>
      <DateSection/>
      <CheckBoxes />
      <PriceSlider />
    </aside>
  );
};

export default SideBar;
