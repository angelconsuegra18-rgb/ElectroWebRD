import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <h1 className="home-title">
        ⚡ Bienvenido a ElectroWebRD
      </h1>

      <p className="home-subtitle">
        Plataforma profesional para ingenieros, electricistas y técnicos eléctricos.
      </p>

      <a
        href="/app-release.apk"
        className="download-app-btn"
        download
      >
        📲 Descargar App para Android
      </a>

      <div className="cards">

        <Link to="/calculadoras" className="card">
          <div className="icon">🧮</div>
          <h2>Calculadoras</h2>
          <p>
            Ley de Ohm, caída de tensión, factor de potencia y más.
          </p>
        </Link>

        <Link to="/motores" className="card">
          <div className="icon">⚡</div>
          <h2>Centro de Motores</h2>
          <p>
            Dimensionamiento, cálculos y reportes profesionales.
          </p>
        </Link>

        <Link to="/protecciones" className="card">
          <div className="icon">🛡️</div>
          <h2>Protecciones</h2>
          <p>
            Breakers, fusibles, relés térmicos, cortocircuito y selectividad.
          </p>
        </Link>

        <Link to="/centro-solar" className="card">
          <div className="icon">☀️</div>
          <h2>Centro Solar</h2>
          <p>
            Diseño profesional de sistemas fotovoltaicos.
          </p>
          <small>Nuevo</small>
        </Link>

      </div>

    </div>
  );
}

export default Home;