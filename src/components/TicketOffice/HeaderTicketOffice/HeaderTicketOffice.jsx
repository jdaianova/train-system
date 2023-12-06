import "./HeaderTicketOffice.css";

import MenuHeader from "../../commonComponents/MenuHeader/MenuHeader";
import Logo from "../../commonComponents/Logo/Logo";
import TicketOfficeBookingForm from "../TicketOfficeBookingForm/TicketOfficeBookingForm";

const HeaderTicketOffice = () => {
  return (
    <section className="HeaderTicketOffice">
      <Logo />
      <MenuHeader />
      <TicketOfficeBookingForm />
    </section>
  );
};

export default HeaderTicketOffice;
