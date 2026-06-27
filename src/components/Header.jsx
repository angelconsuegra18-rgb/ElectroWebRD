import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <Link
        to="/"
        className="logo"
      >
        <img
          src="/electroweb-logo.png"
          alt="ElectroWebRD"
          className="logo-img"
        />
      </Link>

      <nav>

        <Link to="/">
          🏠 Inicio
        </Link>

        <Link to="/calculadoras">
          🧮 Calculadoras
        </Link>

        <Link to="/motores">
          ⚡ Centro de Motores
        </Link>

        <Link to="/centro-solar">
          ☀️ Centro Solar
        </Link>

        <Link to="/contacto">
          📞 Contacto
        </Link>

      </nav>

    </header>
  );
}

export default Header;