import "./Header.scss";
import Chevron from "../../svg/chevron.svg";
import User2 from "../../svg/user2.svg";
// import Users from "../../svg/users.svg";

function Header({ title, avatar }) {
  return (
    <header className="header">
      <div className="burger">{/* <img svg={Users} alt="icon" /> */}</div>
      {title}: {avatar}
      <div className="icons">
        <img className="chevron" src={Chevron} alt="icon" />
        <img className="user" src={User2} alt="icon" />
      </div>
    </header>
  );
}

export default Header;
