import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Topbar />

        <div className="page-content">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;