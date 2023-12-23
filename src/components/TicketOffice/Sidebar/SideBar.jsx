import "./SideBar.css";

import DateSection from "./DateSection/DateSection";

import SwitchSection from "./SwitchSection/SwitchSection";
import TimeSliders from "./TimeSliders/TimeSliders";
import PriceSlider from "./PriceSlider/PriceSlider";
import LastOrders from "./LastOrders/LastOrders";

const SideBar = ({ isShowSideBar }) => {
  return (
    <>
      {isShowSideBar && (
        <aside className="SideBar">
          <DateSection />
          <SwitchSection />
          <PriceSlider />
          <TimeSliders timeDirection={"start"} />
          <TimeSliders timeDirection={"end"} />
          <LastOrders />
        </aside>
      )}
    </>
  );
};

export default SideBar;
