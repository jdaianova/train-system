import "./HeaderTicketOffice.css";

import MenuHeader from "../../commonComponents/MenuHeader/MenuHeader";
import Logo from "../../commonComponents/Logo/Logo";
import TicketOfficeBookingForm from "../TicketOfficeBookingForm/TicketOfficeBookingForm";
import { useEffect } from "react";

const HeaderTicketOffice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="HeaderTicketOffice">
      <Logo />
      <MenuHeader />
      <TicketOfficeBookingForm />
    </section>
  );
};

export default HeaderTicketOffice;
