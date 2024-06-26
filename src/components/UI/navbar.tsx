import logo from '../../asset/logo.svg'
import menuIcon from '../../asset/MovieTicket.svg'

const NavBar = () => {
  return (
    <header >
      <nav className="navbar">
        <div className="logo">
          <figure>
          <img src={logo} alt="Logo" />
          </figure>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#destacadas">Destacadas</a>
          </li>
          <li>
            <a href="#cartelera">Cartelera</a>
          </li>
          <li>
            <a className='reviewBtn' href="#resena">Dejar reseña</a>
          </li>
        </ul>
        <div className="menu-icon">
          <figure>
            <img src={menuIcon} alt="menu icon" />
          </figure>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
