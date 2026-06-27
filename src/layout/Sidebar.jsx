import { NavLink } from "react-router-dom";

function Sidebar() {
  const menu = [
    {
      title: "Dashboard",
      path: "/",
    },
    {
      title: "Calculadoras",
      path: "/calculadoras",
    },
    {
      title: "Centro de Motores",
      path: "/motores",
    },
    {
      title: "Centro Solar",
      path: "/solar",
    },
    {
      title: "Biblioteca",
      path: "/biblioteca",
    },
    {
      title: "Configuración",
      path: "/configuracion",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h1>ElectroWeb</h1>

        <p>Soluciones Inteligentes para Ingeniería</p>
      </div>

      <nav className="sidebar-menu">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;