import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../NavBar/NavBar";

import "./Layout.css";

function Layout() {
  return (
    <div className="layout">

      {/* Top Navbar */}
      <Navbar />

      <div className="main-section">

        {/* Left Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <main className="content">
          <Outlet />
        </main>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Layout;
