import "./HeaderTicketOffice.css";

import MenuHeader from "../../MenuHeader/MenuHeader";
import Logo from "../../Logo/Logo";
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
