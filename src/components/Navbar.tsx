import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "../types/NavLink";

const Navbar: React.FC = () => {
  const links: NavLink[] = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Fleurs",
      to: "/fleurs",
    },
    {
      label: "Bouquets",
      to: "/bouquets",
    },
    {
      label: "Mon compte",
      to: "/compte",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Fleuriste Boujie
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map((link) => (
              <li key={link.label} className="nav-item">
                <Link className="nav-link" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
