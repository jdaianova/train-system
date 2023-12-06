import "./MenuHeader.css";
import { headerMenuElements } from "../../../utils/constants";
import { HashLink } from "react-router-hash-link";

const MenuHeader = () => {
  return (
    <div className="MenuHeader">
      <nav className="MenuHeader-container">
        {headerMenuElements.map((element) => {
          const { id, name, hashLink } = element;
          return (
            <HashLink key={id} to={hashLink} className="MenuHeader-element">
              {name}
            </HashLink>
          );
        })}
      </nav>
    </div>
  );
};

export default MenuHeader;
