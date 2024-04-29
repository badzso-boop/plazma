import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import NLS from "./HUN/NLS.js";
import Pioca from "./HUN/Pioca.js";
import Frekvencia from "./HUN/Frekvencia.js";
import Magamrol from "./HUN/Magamrol.js";
import Safe from "./HUN/Safe.js";
import Galery from "./HUN/Galery.js";
import Termekek from "./HUN/Termekek.js";
import Home from "./HUN/Home.js";

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div>
        <Router>
          <nav
            className="navbar bg-dark border-bottom border-body navbar-expand-lg"
            data-bs-theme="dark"
          >
            <div className="container-fluid">
              <Link className="navbar-brand" to="/" onClick={() => setCollapsed(true)}>
                Főoldal
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleNavbar}
                aria-expanded={!collapsed}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/NLS" onClick={toggleNavbar}>
                      NLS diagnosztika
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Pioca" onClick={toggleNavbar}>
                      Pióca terápia
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Safe" onClick={toggleNavbar}>
                      Safe laser
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Frekvencia" onClick={toggleNavbar}>
                      Frekvencia terápia
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Magamrol" onClick={toggleNavbar}>
                      Magamról
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/NLS" element={<NLS />} />
            <Route path="/Pioca" element={<Pioca />} />
            <Route path="/Safe" element={<Safe />} />
            <Route path="/Frekvencia" element={<Frekvencia />} />
            <Route path="/Magamrol" element={<Magamrol />} />
            <Route path="/Galery" element={<Galery />} />
            <Route path="/Termekek" element={<Termekek />} />
          </Routes>
        </Router>

        <div className="zaszlok text-center">
          <img
              className="m-1 rounded border"
              style={{width: "2.5rem"}}
              src="/images/hun.png"
              alt="magamrol.JPG"
            />
            <img
              className="m-1 rounded border"
              style={{width: "2.5rem"}}
              src="/images/eng.png"
              alt="magamrol.JPG"
            />
            <img
              className="m-1 rounded border"
              style={{width: "2.5rem"}}
              src="/images/aus.png"
              alt="magamrol.JPG"
            />
        </div>
      </div>
    </div>
  );
}

export default App;
