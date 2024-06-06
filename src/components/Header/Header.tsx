import { default as logo } from '../../assets/icons/calendar.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__wrapper">
          <img src={logo}></img>
          <h1 className="header__text">Agenda</h1>
        </nav>
      </div>
    </header>
  );
};
