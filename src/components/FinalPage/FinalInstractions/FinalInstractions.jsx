import "./FinalInstractions.css";
import FinalInstractionsElement from "./FinalInstractionsElement";
import PrintTickets from "./svgIconsFinalPage/PrintTickets";
import TicketsControl from "./svgIconsFinalPage/TicketsControl";
import TicketsToEmail from "./svgIconsFinalPage/TicketsToEmail";

function FinalInstractions() {
  const icons = [
    {
      pic: <TicketsToEmail/>,
      text: "билеты будут отправлены на ваш e-mail",
      highlightWord: "e-mail",
    },
    {
      pic: <PrintTickets/>,
      text: "распечатайте и сохраняйте билеты до даты поездки",
      highlightWord: "распечатайте",
    },
    {
      pic: <TicketsControl/>,
      text: "предьявите распечатанные билеты при посадке",
      highlightWord: "предьявите",
    },
  ];

  return (
    <div className="FinalInstractions">
      {icons.map((elem, i) => (
        <FinalInstractionsElement
          key={i}
          pic={elem.pic}
          text={elem.text}
          highlightWord={elem.highlightWord}
        />
      ))}
    </div>
  );
}

export default FinalInstractions;
